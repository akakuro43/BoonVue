<template lang="pug">
  .l-page
    .l-keyvisual
      .keyvisual__bg
        vueImg(bgImg="/assets/images/device/top/kv.jpg")
        //- vueImg(src="/assets/images/device/top/kv.jpg")
    main.l-main-container
      section.s-section1
        .c-inner
          appearObject
            h2.title(data-delay-step='80')
              span.word Featured&nbsp;
                span.curtain.delay-elem
              span.word Work
                span.curtain.delay-elem
            p.text Look at the latest web site projects
              span.curtain
          ul.work-list
            li.item
              parallax-object.thumb(v-bind:rangeY="0.01", data-custom-cursor)
                .inner
                  vueImg.js-bg-img(bgImg="/assets/images/device/top/work1.jpg")
                  .curtain
                  a.link(href="https://unsplash.com/photos/ixedg2mKs3w" target="_blank")

                  appearObject.tag(offset=0)
                    h2.client
                      span.inline-text BRUCE
                    p.description
                      span.inline-text Branding Website

            li.item
              parallax-object.thumb(v-bind:rangeY="0.04", data-custom-cursor)
                .inner
                  vueImg.js-bg-img(bgImg="/assets/images/device/top/work2.jpg")
                  .curtain
                  a.link(href="https://unsplash.com/photos/XQvpN3j_mVo" target="_blank")
                  appearObject.tag(offset=0)
                    h2.client
                      span.inline-text HOLYOAKE
                    p.description
                      span.inline-text Branding Website
            li.item
              parallax-object.thumb(v-bind:rangeY="0.07")
                .inner
                  vueImg.js-bg-img(bgImg="/assets/images/device/top/work3.jpg")
                  .curtain
                  a.link(href="https://unsplash.com/photos/yzhLs9Zgwdo" target="_blank")
                  appearObject.tag(offset=0)
                    h2.client
                      span.inline-text GRUBER
                    p.description
                      span.inline-text Branding Website
      section.s-section2
        .c-inner
          ul.point-list
            li.item
              accordion
                h2.key(slot="title")
                  |You may use special comments to
                p.text(slot="body")
                  |You may use special comments toYou may use special comments toYou may use special comments to
            li.item
              accordion
                h2.key(slot="title")
                  |You may use special comments to
                p.text(slot="body")
                  |You may use special comments toYou may use special comments toYou may use special comments toYou may use special comments toYou may use special comments toYou may use special comments to
            li.item
              accordion
                h2.key(slot="title")
                  |You may use special comments to
                p.text(slot="body")
                  |You may use special comments toYou may use special comments toYou may use special comments to
            li.item
              accordion
                h2.key(slot="title")
                  |You may use special comments to
                p.text(slot="body")
                  |You may use special comments toYou may use special comments toYou may use special comments to
      section.s-section3
    Footer
</template>

<script>
import meta from '@/variables/meta.js';
import vueSVG from '@/modules/vue-svg/vueSVG';
import appearObject from '@/modules/appearObject';
import parallaxObject from '@/modules/parallaxObject';
import accordion from '@/modules/accordion';
import { mapState } from 'vuex';
import Footer from '@/layouts/Footer';
import vueImg from '@/modules/vueImg';
export default {
  name: 'home',
  metaInfo: meta(),
  components: {
    Footer,
    vueSVG,
    vueImg,
    appearObject,
    parallaxObject,
    accordion
  },
  computed: {
    ...mapState( 'window', [ 'height', 'isTouch', ]),
    ...mapState('scroll', [ 'scrollCurrent', 'scrollLast', 'rate', ]),
  },
  created() {
  },
  mounted() {
    // add event
    // this.$eventHub.$on('hoge', this.methos1);
    // this.$eventHub.$on('hoge2', this.methos2);

  },
  beforeDestroy() {
    // destroy event
    // this.$eventHub.$off('hoge', this.methos1);
    // this.$eventHub.$off('hoge2', this.methos2);
  },
  destroyed() {

  },
  methods: {

  }
}
</script>

<style lang="sass" scoped>
  +media-desktop
    .s-section1
      padding-top: 200px
      .is-appear
        .title
          transform: translateY(0)
          transition: 1.2s $ease
          .word
            .curtain
              transform: scaleY(0)
              transition: 0.8s $ease-in-out-quart
        .text
          transform: translateY(0)
          transition: 1.2s 0.1s $ease
          .curtain
            transform: scaleY(0)
            transition: 0.8s 0.2s $ease-in-out-quart
      .title
        +setEn
        font-weight: $fw-bold
        font-size: 48px
        letter-spacing: 0.05em
        transform: translateY(60px)

        .word
          position: relative
          .curtain
            content: ''
            +fitParent
            background: $white
            transform-origin: top
      .text
        +setEn
        font-weight: $fw-light
        font-size: 13px
        color: #333
        margin-top: 32px
        letter-spacing: 0.15em
        position: relative
        display: inline-block
        transform: translateY(60px)
        .curtain
          +fitParent
          height: 15px
          background: $white
          transform-origin: top



      .work-list
        margin-top: 110px
        &>.item
          &:nth-child(2)
            margin-top: 100px
          &:nth-child(3)
            margin-top: 60px
          &:nth-child(even)
            display: flex
            justify-content: flex-end
            .tag
              left: -70px
          &:nth-child(odd)
            .tag
              right: -70px
          .thumb
            position: relative
            width: 680px
            height: 480px
            .inner
              +fitParent
              perspective: 1000px;
              .js-bg-img
                transition: 0.95s $ease-boon
              &:hover
                .js-bg-img
                  transform: scale(.95) rotateY(-3deg)!important
            .link
              +fitParent
            .tag
              position: absolute
              bottom: 60px
              .client
                +setEn
                font-size: 36px
                transform: translateY(60px)
                display: inline-block
                .inline-text
                  display: inline
                  opacity: 0
                  clip-path: inset(100% 0% 0% 0%)
              .description
                +setEn
                margin-top: 20px
                font-size: 14px
                font-weight: $fw-regular
                transform: translateY(50px)
                .inline-text
                  display: inline
                  opacity: 0
                  clip-path: inset(100% 0% 0% 0%)
              &.is-appear
                .client
                  transform: translateY(0)
                  transition: 1.2s $ease
                  .inline-text
                    opacity: 1
                    clip-path: inset(0% 0% 0% 0%)
                    transition: 0.8s $ease-in-out-quart
                .description
                  transform: translateY(0)
                  transition: 1.2s 0.1s $ease
                  .inline-text
                    opacity: 1
                    clip-path: inset(0% 0% 0% 0%)
                    transition: 0.8s 0.2s $ease-in-out-quart


    .s-section2
      padding-top: 200px
      .point-list
        & > .item
          margin-top: -1px
          .key
            +setEn
            font-size: 24px
            border-top: 1px solid #f1f1f1
            border-bottom: 1px solid #f1f1f1
            padding: 24px 0
            font-weight: $fw-regular
          .text
            +setEn
            +setFont(16px,1.75)
            padding: 32px 0
            font-weight: $fw-regular
    .s-section3
      padding-top: 200px
  +media-mobile
</style>
