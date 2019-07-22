<template lang="pug">
header.l-header
  .header__logo
    h1.logo(data-custom-cursor)
      router-link.link.u-pc-only(to="/")
        vueSVG(keyname="logo" width="80")
      router-link.link.u-sp-only(to="/")
        vueSVG(keyname="logo" width="24.5" isLiquid=true)
  nav.header__gnav
    ul.gnav-list
      li.item.js-hover(data-custom-cursor)
        router-link.link(to='/about') About us
      li.item.js-hover(data-custom-cursor)
        router-link.link(to='/service') Service
      li.item.js-hover(data-custom-cursor)
        router-link.link(to='/company') Company
  cling.cling-github-link
    .github-link(data-custom-cursor)
      vueSVG(keyname="github" width="24")
      a.link(href="https://github.com/akakuro43/BoonVue", target="_blank")
</template>

<script>
import { mapState } from 'vuex';
import vueSVG from '@/modules/vue-svg/vueSVG';
import cling from '@/modules/cling';
// import sleep from '@/utilities/Sleep.js';
// import {TweenMax, Power3,Power4,Expo} from "gsap";


export default {
  name: 'Header',
  components: {
    vueSVG,
    cling
  },
  computed: {
      ...mapState('window', [
          'height',
          'isPC',
          'isSP'
      ]),
      ...mapState('scroll', [
          'scrollCurrent',
          'scrollLast',
          'rate',
      ]),
  },
  data() {
    return {
      pageName: '',
    };
  },
  created() {
  },
  mounted() {
  },

  beforeDestroy() {
  },
  methods: {

  }

}
</script>

<style lang="sass">
  .l-header
    position: fixed
    z-index: 1000
    width: 100%
    left: 0
    top: 0
  +media-desktop
    .l-header
      .header__logo
        position: absolute
        top: 30px
        left: 30px
      .header__gnav
        position: absolute
        top: 44px
        right: 30px
        .gnav-list
          display: flex
          & > .item
            &:nth-child(n+2)
              margin-left: 16px
      .cling-github-link
        position: fixed
        right: 32px
        bottom: 32px
        width: 44px
        height: 44px
      .github-link
        width: 44px
        height: 44px
        display: flex
        justify-content: center
        align-items: center
        border: 1px solid $black
        border-radius: 50%
        position: relative
        .link
          +fitParent
  +media-desktop
    .l-header
      .header__logo
      .header__gnav


</style>
