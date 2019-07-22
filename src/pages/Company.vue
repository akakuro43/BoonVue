<template lang="pug">
.l-page
  //- .l-kv
  //-   .kv__read
  //-     h1#pageName.page-name 会社情報
  //-   .kv__bg
  //-     textSlider(
  //-       msgPC="Company Company Company ",
  //-       msgSP="Com ", msgSP2="pany ")
  //-   .kv__cover
  //- .l-contents
  //-   section.s-info
  //-     .c-inner.p-inner
  //-       h2.c-headline1
  //-         span.en Info
  //-         span.ja 会社概要
  //-       .p-sectoin-contents-area
  //-         ul.c-table--col2.p-table
  //-           li.item
  //-             p.key
  //-               |会社名
  //-             p.value
  //-               |groxi株式会社
  //-           li.item
  //-             p.key
  //-               |本社
  //-             p.value
  //-               |〒103-0012
  //-               br
  //-               |東京都中央区日本橋堀留町1-10-15 JL日本橋ビル4階
  //-               br
  //-               |TEL：03-3667-0630 FAX：03-3667-0631
  //-           li.item
  //-             p.key
  //-               |設立
  //-             p.value
  //-               |1990年6月
  //-           li.item
  //-             p.key
  //-               |資本金
  //-             p.value
  //-               |20,000千円
  //-           li.item
  //-             p.key
  //-               |従業員
  //-             p.value
  //-               |203名 (2017年9月現在)
  //-           li.item
  //-             p.key
  //-               |代表取締役社長
  //-             p.value
  //-               |有光 哲
  //-           li.item
  //-             p.key
  //-               |取締役
  //-             p.value
  //-               |今井 裕之
  //-           li.item
  //-             p.key
  //-               |取締役 (非常勤)
  //-             p.value
  //-               |大川 毅裕
  //-           li.item
  //-             p.key
  //-               |取締役 (非常勤)
  //-             p.value
  //-               |細川 京子
  //-           li.item
  //-             p.key
  //-               |執行役員
  //-             p.value
  //-               |江口 啓之
  //-           li.item
  //-             p.key
  //-               |執行役員
  //-             p.value
  //-               |浅井 克央
  //-           li.item
  //-             p.key
  //-               |ＵＲＬ
  //-             p.value
  //-               |https://www.lee.co.jp/
  //-           li.item
  //-             p.key
  //-               |許認可
  //-             p.value
  //-               |ISO27001(ISMS) JVAC-IM0033
  //-               br
  //-               |一般労働者派遣事業 派 13-010581
  //-               br
  //-               |有料職業紹介事業 13-ユ010387
  //-               br
  //-               |建設業許可（般-26） 第141620号
  //-               br
  //-               |古物商許可 東京都公安委員会 第301041706745号
  //-           li.item
  //-             p.key
  //-               |取引先
  //-             p.value
  //-               |ソフトバンク（株）
  //-               br
  //-               |ＫＤＤＩ（株）
  //-               br
  //-               |ＫＤＤＩまとめてオフィス（株）
  //-               br
  //-               |ＫＤＤＩまとめてオフィス中部（株）
  //-               br
  //-               |伊藤忠テクノソリューションズ（株）
  //-               br
  //-               |ＣＴＣテクノロジー（株）
  //-               br
  //-               |伊藤忠ケーブルシステム（株）
  //-               br
  //-               |日本電気（株）
  //-               br
  //-               |ＮＥＣフィールディング（株）
  //-               br
  //-               |ネットワンシステムズ（株）
  //-               br
  //-               |（株）富士通マーケティング
  //-               br
  //-               |富士通ネットワークソリューションズ（株）
  //-               br
  //-               |（株）富士通ビー・エス・シー
  //-               br
  //-               |ユ二アデックス（株）
  //-               br
  //-               |沖電気工業（株）
  //-               br
  //-               |丸紅ＯＫＩネットソリューションズ （株）
  //-               br
  //-               |兼松（株）
  //-               br
  //-               |兼松エレクトロニクス（株）
  //-               br
  //-               |ケー・イー・エルテクニカルサービス（株）
  //-               br
  //-               |（株）協和エクシオ
  //-               br
  //-               |ＪＢサービス（株）
  //-               br
  //-               |日本システムウエア（株）
  //-               br
  //-               |日本オフィスシステム（株）
  //-               br
  //-               |（株）インターネットイニシアティブ
  //-               br
  //-               |大興電子通信（株）
  //-               br
  //-               |（株）ＮＳＤ
  //-               br
  //-               |（株）ネットワールド
  //-               br
  //-               |ＥＭＣジャパン（株）
  //-               br
  //-               |（株）ネットワークバリューコンポネンツ
  //-               br
  //-               |（株）主婦の友社
  //-               br
  //-               |（一社）日本教育情報化振興会
  //-               br
  //-               |（一財）対日貿易投資交流促進協会
  //-               br
  //-               |国土交通省
  //-               br
  //-               |農林水産省
  //-               br
  //-               |水野学園
  //-               br
  //-               |グロービス経営大学院
  //-               br
  //-               |※敬称略・順不同
  //-
  //-   section.s-access
  //-     .c-inner.p-inner
  //-       h2.c-headline1
  //-         span.en Access
  //-         span.ja アクセス
  //-       .p-sectoin-contents-area
  //-         #map.map-area
  //-           iframe(src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6481.0816254838255!2d139.780025!3d35.688307!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188953b6fc24e3%3A0x48b604d4590b6309!2z44CSMTAzLTAwMTIg5p2x5Lqs6YO95Lit5aSu5Yy65pel5pys5qmL5aCA55WZ55S677yR5LiB55uu77yR77yQ4oiS77yR77yVIO-8qu-8rOaXpeacrOapi-ODk-ODqw!5e0!3m2!1sja!2sjp!4v1560308587691!5m2!1sja!2sjp', width='100%', height='280', frameborder='0', style='border:0', allowfullscreen='')
  //-         p.map-info
  //-           |〒103-0012
  //-           br
  //-           |東京都中央区日本橋堀留町1-10-15 JL日本橋ビル4階
  //-           br
  //-           |TEL：03-3667-0630 FAX：03-3667-0631
  //-           br
  //-           br
  //-           |【アクセス】
  //-           br
  //-           |東京メトロ日比谷線 小伝馬町駅より徒歩4分
  //-           br
  //-           |東京メトロ日比谷線・都営浅草線 人形町駅より徒歩4分
  //-         a.googlemap-link(href="https://www.google.com/maps/place/%E3%80%92103-0012+%E6%9D%B1%E4%BA%AC%E9%83%BD%E4%B8%AD%E5%A4%AE%E5%8C%BA%E6%97%A5%E6%9C%AC%E6%A9%8B%E5%A0%80%E7%95%99%E7%94%BA%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%91%EF%BC%90%E2%88%92%EF%BC%91%EF%BC%95+%EF%BC%AA%EF%BC%AC%E6%97%A5%E6%9C%AC%E6%A9%8B%E3%83%93%E3%83%AB/@35.688307,139.780025,16z/data=!4m5!3m4!1s0x60188953b6fc24e3:0x48b604d4590b6309!8m2!3d35.6883074!4d139.7800252?hl=ja" target="_blank") Goolge Map
  //-   section.s-history
  //-     .c-inner.p-inner
  //-       h2.c-headline1
  //-         span.en History
  //-         span.ja 沿革
  //-       .p-sectoin-contents-area
  //-         ul.c-table--col2.p-table
  //-           li.item
  //-             p.key
  //-               |平成元年
  //-             p.value
  //-               |・「オフィス・リー」創立
  //-           li.item
  //-             p.key
  //-               |平成2年
  //-             p.value
  //-               |・「株式会社オフィス・リー」設立
  //-               br
  //-               |・資本金500万円
  //-           li.item
  //-             p.key
  //-               |平成4年
  //-             p.value
  //-               |・資本金を1,000万円に増資
  //-           li.item
  //-             p.key
  //-               |平成8年
  //-             p.value
  //-               |・千代田区東神田に本社移転
  //-           li.item
  //-             p.key
  //-               |平成9年
  //-             p.value
  //-               |・一般労働者派遣事業の許認可取得
  //-           li.item
  //-             p.key
  //-               |平成11年
  //-             p.value
  //-               |	・有料職業紹介業の許認可取得
  //-           li.item
  //-             p.key
  //-               |平成12年
  //-             p.value
  //-               |・資本金2,000万円に増資
  //-               br
  //-               |・千代田区神田駿河台に本社移転
  //-           li.item
  //-             p.key
  //-               |平成15年11月
  //-             p.value
  //-               |・「株式会社Lee.ネットソリューションズ」に社名変更
  //-           li.item
  //-             p.key
  //-               |平成16年1月
  //-             p.value
  //-               |・建設業許可取得
  //-           li.item
  //-             p.key
  //-               |平成18年6月
  //-             p.value
  //-               |・港区赤坂に本社移転
  //-           li.item
  //-             p.key
  //-               |平成19年3月
  //-             p.value
  //-               |・ISMS取得（本社適用）
  //-           li.item
  //-             p.key
  //-               |平成21年3月
  //-             p.value
  //-               |・中央区日本橋茅場町に本社移転
  //-           li.item
  //-             p.key
  //-               |平成21年7月
  //-             p.value
  //-               |・岩崎通信機株式会社グループの傘下となる
  //-           li.item
  //-             p.key
  //-               |平成27年
  //-             p.value
  //-               |・商標「オンデマンドWi-Fi」を登録（第5788187号）
  //-           li.item
  //-             p.key
  //-               |平成29年1月
  //-             p.value
  //-               |・中央区日本橋堀留町に本社移転
  //-           li.item
  //-             p.key
  //-               |令和元年7月
  //-             p.value
  //-               |・「株式会社グロキシー」に社名変更
  //-         ul.c-table--col2.p-table.group-company
  //-           li.item
  //-             p.key
  //-               |グループ会社
  //-             p.value
  //-               a.link(href="http://www.iwatsu.co.jp/", target="_blank")
  //-                 |岩崎通信機株式会社
  //-           li.item
  //-             p.key
  //-               |マージン率等の
  //-               br
  //-               |情報提供
  //-             p.value
  //-               a.link(href="/assets/pdf/margin.pdf", target="_blank")
  //-                 |PDFダウンロード(75KB)
  //-   section.s-declaration
  //-     .c-inner.p-inner
  //-       h2.c-headline1
  //-         span.en Declaration
  //-         span.ja 内部統制に関する宣言
  //-       .p-sectoin-contents-area
  //-         p.text
  //-           |当社は、自己の責任において、コンプライアンスを遵守し、業務を適正かつ効率的に遂行するために、内部統制のシステムを構築し、有効性、効率性、透明性を常に確保し、これを維持してまいります。
  //-           br
  //-           br
  //-           br
  //-           |代表取締役 ： 有光 哲
  //-           br
  //-           br
  //-           |内部統制に関するお問い合わせ等
  //-           br
  //-           |内部統制に関する苦情、お問い合わせ、開示・訂正請求等につきましては、下記窓口までお願い致します。
  //-           br
  //-           br
  //-           |【 内部統制に関する問い合わせ窓口 】
  //-           br
  //-           |株式会社Lee.ネットソリューションズ / 問い合わせ窓口 ： 経営管理部 コンプライアンス担当
  //-           br
  //-           |〒103-0012 東京都中央区日本橋堀留町1-10-15 JL日本橋ビル4階
  //-           br
  //-           |TEL：03-3667-0630 FAX：03-3667-0631 E-mail：contact@lee.co.jp
  //-     section.s-statement
  //-       .c-inner.p-inner
  //-         h2.c-headline1
  //-           span.en Statement
  //-           span.ja 内部統制に関する宣言
  //-         .p-sectoin-contents-area
  //-           ul.c-table--col1.p-table
  //-             li.item
  //-               p.value
  //-                 a.link(href="/assets/pdf/29_kessan.pdf" target="_blank") 第29期（平成30年3月期）(87kb PDF)
  //-             li.item
  //-               p.value
  //-                 a.link(href="/assets/pdf/28_kessan.pdf" target="_blank") 第28期（平成29年3月期）(85kb PDF)
  //-             li.item
  //-               p.value
  //-                 a.link(href="/assets/pdf/27_kessan.pdf" target="_blank") 第27期（平成28年3月期）(82kb PDF)
  //-             li.item
  //-               p.value
  //-                 a.link(href="/assets/pdf/26_kessan.pdf" target="_blank") 第26期（平成27年3月期）(82kb PDF)
  //-             li.item
  //-               p.value
  //-                 a.link(href="/assets/pdf/25_kessan.pdf" target="_blank") 第25期（平成26年3月期）(81kb PDF)
  //-             li.item
  //-               p.value
  //-                 a.link(href="/assets/pdf/24_kessan.pdf" target="_blank") 第24期（平成25年3月期）(43kb PDF)
  //-             li.item
  //-               p.value
  //-                 a.link(href="/assets/pdf/23_kessan.pdf" target="_blank") 第23期（平成24年3月期）(82kb PDF)
  //-             li.item
  //-               p.value
  //-                 a.link(href="/assets/pdf/22_kessan.pdf" target="_blank") 第22期（平成23年3月期）(11kb PDF)
  //-             li.item
  //-               p.value
  //-                 a.link(href="/assets/pdf/21_kessan.pdf" target="_blank") 第21期（平成22年3月期）(93kb PDF)
  Footer
</template>

<script>
import Footer from '@/layouts/Footer';
import meta from '@/variables/meta.js';
import { mapState, mapMutations } from 'vuex';

export default {


  name: 'company',
  components: {
    Footer,
  },
  computed: {
    ...mapState(
      'window', [
      'height',
      'isTouch',
      ]
      ),
  },
  mounted() {
    this.$nextTick(() => {
      // this.$eventHub.$emit('scrollSection:update');
      // this.$eventHub.$emit('resize');
    });
  },
  metaInfo: meta('company'),
  methods: {
    ...mapMutations(["increment", "decrement"])

  }
}
</script>

<style lang="sass" scoped>
+media-desktop
+media-mobile
</style>
