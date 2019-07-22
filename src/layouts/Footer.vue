<template lang="pug">
footer.l-footer
  .footer__logo
    h1.header__logo
      router-link.link.u-pc-only(to="/")
        vueSVG(keyname="logo" width="60")
      router-link.link.u-sp-only(to="/")
        vueSVG(keyname="logo" width="20" isLiquid=true)
  p.footer__msg
    |Vue.js based frontend framework.
    br
    |I have packed my experience at DONGURI inc.
    vueSVG(keyname="piece" width="18")
  //- nav.footer__gnav
  //-   ul.nav-list
  //-     li.item.js-hover
  //-       router-link.link(to='/about') About us
  //-     li.item.js-hover
  //-       router-link.link(to='/service') Service
  //-     li.item.js-hover
  //-       router-link.link(to='/company') Company

  .footer__sns
    ul.sns-list
      li.item
        a.link(href="#")
          vueSVG(keyname="facebook" width="10")
      li.item
        a.link(href="#")
          vueSVG(keyname="twitter" width="18")
      li.item
        a.link(href="#")
          vueSVG(keyname="instagram" width="22")

  p.footer__copyright ©2019 BOON, All Rights Reserved.
</template>

<script>
import vueSVG from '@/modules/vue-svg/vueSVG';
export default {
  name: 'Footer',
  components: {
    vueSVG
  },
}
</script>

<style lang="sass" scoped>
  +media-desktop
    .l-footer
      position: relative
      z-index: 99
      width: 100%
      height: 320px
      background: $black
      .footer__logo
        position: absolute
        top: 90px
        left: 120px
        .c-logo
          fill: $white
      .footer__msg
        position: absolute
        top: 104px
        left: 290px
        +setFont(14px,1.75)
        color: $white
        .c-icon-piece
          margin-left: 5px
          top: 3px
          position: relative

      .footer__gnav
      .footer__sns
        position: absolute
        top: 210px
        left: 290px
        .sns-list
          display: flex
          justify-content: flex-start
          align-items: center
          & > .item
            &:nth-child(n+2)
              margin-left: 12px
            .link
              svg
                fill: $white
      .footer__copyright
        +setEn
        font-weight: $fw-regular
        font-size: 12px
        position: absolute
        color: rgba($white,0.5)
        right: 32px
        bottom: 40px

  +media-mobile
    .l-footer
      position: relative
      z-index: 99
      width: 100%
      .footer__logo
      .footer__gnav
      .footer__sns
      .footer__copyright

</style>
