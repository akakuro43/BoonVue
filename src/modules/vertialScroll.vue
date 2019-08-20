<template lang="pug">
    main.l-container(v-bind:class="[ (!onVS) ? 'is-not-vs' : 'is-vs' ]")
      #js-vertial-scroll
        slot
      div(v-if="progression" ref="line" class="c-progress u-fixed u-pos-tl u-fit-w")
        .progress-value(v-bind:style="`transform: scaleY(${progress})`")
</template>
<script>
    import { mapState, mapActions } from 'vuex';
    import sleep from '@/utilities/Sleep.js';

    let OPTIONS = {
      EASE: 0.075,
      // EASE: 1,
      IS_VS: true,
      IS_DISTORTION: true
    }

    export default {
        name: 'vertialScroll',
        props: {
            progression: { type: Boolean, default: true },
        },
        data() {
          return {
            onVS: false,
            isRun: false,
            ease: OPTIONS.EASE,
            progress: 0
          };
        },
        watch: {
            $route: 'resize',
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
            ...mapState('scroll', [
                'defaultScrollTop',
                'vertialScrollTop',
                'scrollSpeed',
            ]),
        },

        created() {
          this.containerHeight = 0;
          this.$fakeScroll = document.querySelector('.js-fake-scroll');
          this.$body = document.querySelector('body');
        },

        mounted() {
          this.$progressValue = this.$el.querySelector('.progress-value')
          this.onVS = OPTIONS.IS_VS && this.isPC;
          this.$container = document.getElementById('js-vertial-scroll');

          document.addEventListener('scroll', this.onScroll, false);
          this.$eventHub.$on('afterPageEnter', this.changeEaseDefault);
          this.$eventHub.$on('beforePageLeave', this.onFixedScroll);
          this.$eventHub.$on('afterPageLeave', this.changeEaseOne);
          this.$eventHub.$on('resize', this.resize);
          this.$eventHub.$on('update', this.update);

          this.$eventHub.$on('beforePageEnter', this.beforeEnterActions);


          this.$eventHub.$on('cancelFixedScroll', this.cancelFixedScroll);
          this.$eventHub.$on('onFixedScroll', this.onFixedScroll);

          this.isRun = true;

        },

        beforeDestroy() {
            document.removeEventListener('scroll', this.onScroll);
            this.$eventHub.$off('resize', this.resize);
            this.$eventHub.$off('update', this.update);

        },

        methods: {
          ...mapActions(
            'scroll', {
              'scrollScrollStore': 'scroll',
              'scrollUpdate': 'update',
              'scrollClrearScrollPositon': 'clrearScrollPositon'
            },
          ),
          changeEaseOne() {
            this.ease = 1.0;
          },
          changeEaseDefault() {
            this.ease = OPTIONS.EASE;
          },
          beforeEnterActions() {
            this.scrollClrearScrollPositon();
            this.cancelFixedScroll();
          },

          onFixedScroll() {
            let mt = this.onVS ? this.vertialScrollTop : this.defaultScrollTop;
            this.isRun = false;
            this.$body.style.marginTop = `-${mt}px`;
            this.$body.style.position = 'fixed';
          },
          cancelFixedScroll() {
            this.$body.style.position = 'inherit';
            this.$body.style.marginTop = `0px`;
            this.isRun = true;
          },
          onScroll() {
            let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
            this.scrollScrollStore(scrollY);
          },
          update() {
            // console.log(this.defaultScrollTop + '  ' + this.vertialScrollTop)

            let vertialScrollTop = this.e(this.vertialScrollTop, this.defaultScrollTop, this.ease);
                vertialScrollTop = Math.floor(100 * vertialScrollTop) / 100;
            let scrollSpeed = 1 * +((this.defaultScrollTop - vertialScrollTop) / (window.innerHeight, window.innerWidth));
            let scrollProgress = vertialScrollTop / ( this.containerHeight - this.height);
                scrollProgress = Math.floor(1000 * scrollProgress) / 1000;

            this.scrollUpdate({
              vertialScrollTop: vertialScrollTop,
              scrollSpeed: scrollSpeed,
              scrollProgress: scrollProgress,
            });

            // this.$progressValue.style.transform = `scaleY(${scrollProgress})`;
            this.progress = scrollProgress;

            if(!this.onVS) return
            if(!this.isRun) return
            if(OPTIONS.IS_DISTORTION) {
              this.$container.style.transform = "translate3d(0, -".concat(this.vertialScrollTop.toFixed(0), "px, 0) skewY(").concat(this.scrollSpeed * 0.5, "deg)")
            } else {
              this.$container.style.transform = "translate3d(0, -".concat(this.vertialScrollTop.toFixed(0), "px, 0)")
            }
          },
           e(e, t, n) {
            return (1 - n) * e + n * t;
          },
          async resize() {
            await sleep(10)
            this.containerHeight = this.$container.clientHeight;
            if(this.containerHeight !== this.oldContainerHeight) this.setPageHeight();
            this.oldContainerHeight = this.containerHeight;
          },
          setPageHeight() {
            if (this.onVS) {
              this.$fakeScroll.style.height = this.containerHeight + 'px';
            } else {
              // if mobile, transform val
              this.$fakeScroll.style.height = '0px';
              for (let i = 0; i < this.NB_CUEPOINTS; i++) {
                this.cuePoints[i].$el.style['transform'] = 'none';
              }
            }
          },
        },
    }
</script>

<style lang="sass">
  .is-vs
    position: fixed
    top: 0
    left: 0
    width: 100%
    overflow: hidden

  .c-progress
    background: #3e3e3f
    z-index: 999999
    height: 50vh
    width: 1px
    position: fixed
    top: 0
    left: 56px
    bottom: 0
    margin: auto
    overflow: hidden
    .progress-value
      +fitParent
      background: #838383
      transform-origin: top
      transform: scaleY(0)
</style>
