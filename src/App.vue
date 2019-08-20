<template lang="pug">
#app
  Header
  Loading
  customCursor
  vertialScroll
    transition(
      appear
      mode="out-in"
      v-on:enter="enter"
      v-on:before-enter="beforeEnter"
      v-on:after-enter="afterEnter"
      v-on:leave="leave"
      v-on:before-leave="beforeLeave"
      v-on:after-leave="afterLeave"
      v-on:before-appear="customBeforeAppearHook"
      v-on:appear="customAppearHook"
      v-on:after-appear="customAfterAppearHook"
      )
      router-view
  .l-bg

</template>

<script>
  import {TweenMax, Power2 } from "gsap";
  import { mapState, mapActions } from 'vuex';
  import vertialScroll from '@/modules/vertialScroll';
  import customCursor from '@/modules/customCursor';
  import UIDelayStepper from '@/modules/UIDelayStepper';
  import Header from '@/layouts/Header';
  import Loading from '@/layouts/Loading.vue';
  import UserAgent from '@/variables/UserAgent';
  import throttle from '@/utilities/throttle';
  import preload from '@/modules/preload';
  import sleep from '@/utilities/Sleep.js';

  export default {
      name: 'App',
      components: {
        vertialScroll,
        customCursor,
        Header,
        Loading,
      },
      created() {
        this.enterTime = 200;
        this.leaveTime = 300;
        this.ua = new UserAgent();
        this.windowResize(this.ua);

        this.bodyStyleCursor = document.querySelector('body').style.cursor;

        // add event
        window.addEventListener('resize', throttle(this.resize, 400), false);
        window.addEventListener('orientationchange', throttle(this.resize, 1000), true);
        window.addEventListener('mousemove', this.mousemove);
      },
      mounted() {
        this.resize();
        this.update();
      },
      computed: {
          ...mapState('device', [
              'width',
              'height',
              'isTouch',
              'isSP',
              'isPC',
              'device',
          ]),
          ...mapState('page', [
              'currentPage',
              'isPageLoaded',
          ]),
      },
      methods: {
        ...mapActions(
          'device', {
            'windowResize': 'resize',
          },
        ),
        ...mapActions(
          'page', {
            'setPageId': 'setPageId',
            'loaded': 'loaded',
          },
        ),
        ...mapActions(
          'mouse', {
            'mouseMousemove': 'mousemove',
          },
        ),
        // ----------------
        // PAGE ENTER
        // ----------------
        beforePageEnter(el) {
          let pageID =  document.querySelector('body').dataset.pageId;
          this.setPageId(pageID);
          // console.log(this.currentPage);
          new UIDelayStepper(el).run();
          this.$eventHub.$emit('beforePageEnter');
          TweenMax.set(el, { opacity: 0 });
        },
        async pageEnter(el, done) {
          await sleep(10)
          let from = new Date();
          let promise = new Promise((resolve) => {
            // preload start
            preload(resolve, this.isPC, false)
          });
          promise.then((result) => {
            let to = new Date();
            let ms = to.getTime() - from.getTime();
            let enterTime = this.enterTime - ms;
            enterTime = (enterTime <= 0) ? 0 : enterTime;
            setTimeout(()=>{
              // preload が完了するとdoneを呼ぶ
              done();
            },enterTime)
          });
        },
        afterPageEnter(el) {
          TweenMax.to(el, 0.25, { opacity: 1, ease: Power2.easeOut });
          this.$eventHub.$emit('afterPageEnter');

        },
        // ----------------
        // PAGE LEAVE
        // ----------------
        // Before Leave
        beforePageLeave(el) {
          this.$eventHub.$emit('beforePageLeave');
          TweenMax.to(el, 0.25, { opacity: 0, ease: Power2.easeOut });
        },
        // Leave
        pageLeave(el, done) {
          setTimeout(()=> {
            done();
          },this.leaveTime)
        },
        // After Leave
        afterPageLeave() {
          this.$eventHub.$emit('afterPageLeave');
          this.loaded();
          this.resize();
        },
        // ----------------
        // OTHER
        // ----------------
        resize() {
          this.ua.resize();
          this.windowResize(this.ua);
          this.$eventHub.$emit('resize');
        },
        update() {
          this.$eventHub.$emit('update');
          requestAnimationFrame(this.update.bind(this));
        },
        mousemove(event) {
          this.mouseMousemove({
            mouseY: event.clientY,
            mouseX: event.clientX
          })
          this.$eventHub.$emit('mousemove')
        },
        // ----------------
        // VUE DEFAULT
        // ----------------
        // ENTER
        beforeEnter: function (el) { this.beforePageEnter(el) },
        enter: function (el, done) { this.pageEnter(el, done) },
        afterEnter: function (el) { this.afterPageEnter(el) },
        // LEAVING
        beforeLeave: function (el) { this.beforePageLeave(el) },
        leave: function (el, done) { this.pageLeave(el, done) },
        afterLeave: function (el) { this.afterPageLeave(el) },
        // APPEAR
        customBeforeAppearHook: function (el) { this.beforePageEnter(el) },
        customAppearHook: function (el, done) { this.pageEnter(el, done) },
        customAfterAppearHook: function (el) { this.afterPageEnter(el) },
      }


    }
</script>

<style lang="sass" scoped>
</style>
