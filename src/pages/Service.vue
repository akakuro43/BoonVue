<template lang="pug">
.l-page
  //- .l-kv
  //-   .kv__read
  //-     h1#pageName.page-name サービス一覧
  //-   .kv__bg
  //-     textSlider(
  //-       msgPC="Service Service Service Service ",
  //-       msgSP="Service ")
  //-   .kv__cover
  //- .l-contents
  //-   section.s-mian-service
  //-     .c-inner
  //-       ul.mian-service__list
  //-         li.item
  //-           .circle
  //-             .service-img
  //-               vueSVG(keyname="wifi" width="240")
  //-           .body
  //-             p.no
  //-               span.u-pc-only
  //-                 vueSVG(keyname="no1" width="168")
  //-               span.u-sp-only
  //-                 vueSVG(keyname="no1" width="100")
  //-             h2.name
  //-               span.en Wifi
  //-               span.ja 無線LAN
  //-             p.description
  //-               |ストレスフリーの接続性、ワークスタイルに合わせたセキュリティ、管理負荷の軽減等、多様な要望に対応
  //-             router-link.link(to="/service/wifi") Read more
  //-             .handling-product
  //-               p.key 取扱製品
  //-               p.value
  //-                 |FURUNO SYSTEM
  //-                 br
  //-                 |Stp-link
  //-                 br
  //-                 |HPAruba
  //-                 br
  //-                 |Aerohive
  //-                 br
  //-                 |CiscoAironet/Meraki
  //-                 br
  //-                 |Ruckus
  //-         li.item
  //-           .circle
  //-             .service-img
  //-               vueSVG(keyname="security" width="240")
  //-           .body
  //-             p.no
  //-               span.u-pc-only
  //-                 vueSVG(keyname="no2" width="168")
  //-               span.u-sp-only
  //-                 vueSVG(keyname="no2" width="100")
  //-             h2.name
  //-               span.en Security
  //-               span.ja セキュリティ
  //-             p.description
  //-               |マルチベンディング・マルチプラットフォームでサービスを提供
  //-             router-link.link(to="/service/security") Read more
  //-             .handling-product
  //-               p.key 取扱製品
  //-               p.value
  //-                 |Fortinet
  //-                 br
  //-                 |Cyberoam
  //-                 br
  //-                 |SonicWall
  //-                 br
  //-                 |Barracuda
  //-                 br
  //-                 |Check point
  //-                 br
  //-                 |SKY
  //-                 br
  //-                 |FFRI
  //-                 br
  //-                 |TRENDO MICRO
  //-                 br
  //-                 |McAfee
  //-                 br
  //-                 |Symantec.
  //-         li.item
  //-           .circle
  //-             .service-img
  //-               vueSVG(keyname="rpa" width="240")
  //-           .body
  //-             p.no
  //-               span.u-pc-only
  //-                 vueSVG(keyname="no3" width="168")
  //-               span.u-sp-only
  //-                 vueSVG(keyname="no3" width="100")
  //-             h2.name
  //-               span.en RPA
  //-               span.ja ロボティック・プロセス・オートメーション
  //-             p.description
  //-               |ダミーテキストダミーテキストダミーテキスト
  //-             router-link.link(to="/service/rpa") Read more
  //-             .handling-product
  //-               p.key 取扱製品
  //-               p.value
  //-                 |FURUNO SYSTEM
  //-                 br
  //-                 |Stp-link
  //-                 br
  //-                 |HPAruba
  //-                 br
  //-                 |Aerohive
  //-                 br
  //-                 |CiscoAironet/Meraki
  //-                 br
  //-                 |Ruckus
  //-   section.s-sub-service
  //-     .c-inner
  //-       ul.sub-service__list
  //-         li.item
  //-           .circle
  //-             .service-img
  //-               vueSVG(keyname="maintenance" width="116")
  //-               //- img(src="/images/pc/common/dummy_service.png")
  //-           .body
  //-             p.no
  //-               span.u-pc-only
  //-                 vueSVG(keyname="no4" width="88")
  //-               span.u-sp-only
  //-                 vueSVG(keyname="no4" width="68")
  //-             h2.name
  //-               span.en Maintenance
  //-               span.ja 保守
  //-             p.description
  //-               |顧客のニーズに合わせた保守サービスを提供
  //-             .handling-product
  //-               p.key 取扱製品
  //-               p.value.u-pc-only
  //-                 |一次受付
  //-                 br
  //-                 |二次受付
  //-                 br
  //-                 |障害時復旧支援
  //-                 br
  //-                 |インシデント管理
  //-                 br
  //-                 |ヘルプデスク
  //-                 br
  //-                 |運用支援
  //-                 br
  //-                 |定期報告
  //-                 br
  //-                 |オンサイト/リモート対応
  //-               p.value.u-sp-only
  //-                 |一次受付 / 二次受付 / 障害時復旧支援 / インシデント管理
  //-                 br
  //-                 |ヘルプデスク / 運用支援 / 定期報告 / オンサイト/リモート対応
  //-         li.item
  //-           .circle
  //-             .service-img
  //-               vueSVG(keyname="network" width="116")
  //-               //- img(src="/images/pc/common/dummy_service.png")
  //-           .body
  //-             p.no
  //-               span.u-pc-only
  //-                 vueSVG(keyname="no5" width="88")
  //-               span.u-sp-only
  //-                 vueSVG(keyname="no5" width="68")
  //-             h2.name
  //-               span.en Network
  //-               span.ja ネットワーク
  //-             p.description
  //-               |設計から保守まで多様化するニーズに柔軟に対応
  //-             .handling-product
  //-               p.key 取扱製品
  //-               p.value.u-pc-only
  //-                 |Cisco
  //-                 br
  //-                 |Hewlett Packard
  //-                 br
  //-                 |DELL
  //-                 br
  //-                 |Juniper
  //-                 br
  //-                 |NetApp
  //-                 br
  //-                 |EMC
  //-                 br
  //-                 |VMware
  //-               p.value.u-sp-only
  //-                 |Cisco / Hewlett Packard / DELL / Juniper
  //-                 br
  //-                 |NetApp / EMC / VMware
  //-         li.item
  //-           .circle
  //-             .service-img
  //-               vueSVG(keyname="pclcm" width="116")
  //-               //- img(src="/images/pc/common/dummy_service.png")
  //-           .body
  //-             p.no
  //-               span.u-pc-only
  //-                 vueSVG(keyname="no6" width="88")
  //-               span.u-sp-only
  //-                 vueSVG(keyname="no6" width="68")
  //-             h2.name
  //-               span.en PC/SP LCM
  //-               span.ja パソコンライフサイクル
  //-             p.description
  //-               |クライアントPCの導入・運用・廃棄をサポート
  //-             .handling-product
  //-               p.key 取扱製品
  //-               p.value.u-pc-only
  //-                 |DELL
  //-                 br
  //-                 |HP
  //-                 br
  //-                 |NEC
  //-                 br
  //-                 |FUJITSU
  //-                 br
  //-                 |※各社PC及びモバイル製品
  //-               p.value.u-sp-only
  //-                 |DELL / HP / NEC / FUJITSU
  //-                 br
  //-                 |※各社PC及びモバイル製品
  //-         li.item
  //-           .circle
  //-             .service-img
  //-               vueSVG(keyname="iot" width="116")
  //-               //- img(src="/images/pc/common/dummy_service.png")
  //-           .body
  //-             p.no
  //-               span.u-pc-only
  //-                 vueSVG(keyname="no7" width="88")
  //-               span.u-sp-only
  //-                 vueSVG(keyname="no7" width="68")
  //-             h2.name
  //-               span.en loT/AI
  //-               span.ja Lot製品開発 / AI開発(仮)
  //-             p.description
  //-               |ダミーテキストダミーテキストダミーテキスト
  //-             .handling-product
  //-               p.key 取扱製品
  //-               p.value.u-pc-only
  //-                 |FURUNO SYSTEM
  //-                 br
  //-                 |Stp-link
  //-                 br
  //-                 |HPAruba
  //-                 br
  //-                 |Aerohive
  //-                 br
  //-                 |CiscoAironet/Meraki
  //-                 br
  //-                 |Ruckus
  //-               p.value.u-sp-only
  //-                 |FURUNO SYSTEM / Stp-link / HPAruba / Aerohive
  //-                 br
  //-                 |CiscoAironet/Meraki / Ruckus
  Footer
</template>

<script>
import Footer from '@/layouts/Footer';
import meta from '@/variables/meta.js';
import vueSVG from '@/modules/vue-svg/vueSVG';
import { mapState, mapMutations } from 'vuex';

export default {


  name: 'service',
  metaInfo: meta('service'),
  components: {
    Footer,
    vueSVG
  },
  computed: {
    ...mapState( 'window', [ 'height', 'isTouch' ] ),
  },
  mounted() {

  },
  methods: {
    ...mapMutations(["increment", "decrement"])
  }
}
</script>

<style lang="sass" scoped>
+media-desktop
+media-mobile
</style>
