<template lang="pug">
.l-page
  //- .l-kv
  //-
  //- .l-contents
  //-   section.s-intoro.js-section
  //-     appearObject
  //-       h2.title まわがままで、感謝される。
  //-     .text-area
  //-       p.text
  //-         |わたしたちは、メンバーが好きなように
  //-         br.u-pc-only
  //-         |やりたいように仕事ができる会社を目指しています。
  //-       p.text
  //-         |しかし、エンジニアの世界では日々次々と技術が更新され
  //-         br.u-pc-only
  //-         |お客様の課題やニーズも変化しています。
  //-       p.text
  //-         |高い技術を身につけ、お客様からの信頼を勝ち取り
  //-         br.u-pc-only
  //-         |はじめて自分のやりたいように仕事ができる。
  //-         br.u-pc-only
  //-         |進化をすれば、その分だけわがままに仕事ができる。
  //-       p.text
  //-         |グロクシーでは、お客様や世の中から感謝されるような
  //-         br.u-pc-only
  //-         |わがままな仕事ができるように進化し続けます。
  //-   section.s-name.js-section
  //-     .c-inner.inner
  //-       .body
  //-         h2.c-headline1
  //-           span.en Name
  //-           span.ja 社名コンセプト
  //-         .p-read-area
  //-           h3.title
  //-             |仮の文章
  //-             br
  //-             |これはダミー文章です。
  //-           p.text
  //-             |吾輩わがはいは猫である。名前はまだ無い。どこで生れたかとんと見当けんとうがつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪どうあくな種族であったそうだ。この書生というのは時々我々を捕つかまえて煮にて食うという話である。しかしその当時は何という考もなかったから別段恐しい。
  //-       .thumb
  //-         .logo
  //-           span.u-pc-only
  //-             vueSVG(keyname="name" width="300")
  //-           span.u-sp-only
  //-             vueSVG(keyname="name" width="36" isLiquid=true)
  //-   section.s-logo.js-section
  //-     .c-inner.inner
  //-       .body
  //-         h2.c-headline1
  //-           span.en Logo
  //-           span.ja ロゴの意味
  //-         .p-read-area
  //-           h3.title
  //-             |全身全霊で、わがままする
  //-             br
  //-             |姿勢そのものをロゴに表現
  //-           p.text
  //-             |吾輩わがはいは猫である。名前はまだ無い。どこで生れたかとんと見当けんとうがつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪どうあくな種族であったそうだ。この書生というのは時々我々を捕つかまえて煮にて食うという話である。しかしその当時は何という考もなかったから別段恐しい。
  //-       .thumb
  //-         .logo
  //-           span.u-pc-only
  //-             vueSVG(keyname="logo" width="300")
  //-           span.u-sp-only
  //-             vueSVG(keyname="logo" width="45" isLiquid=true)
  Footer
</template>

<script>
import meta from '@/variables/meta.js';
import vueSVG from '@/modules/vue-svg/vueSVG';
import Footer from '@/layouts/Footer';
import appearObject from '@/modules/appearObject';
import { mapState, mapMutations } from 'vuex';

export default {


  name: 'about',
  metaInfo: meta('about'),
  components: {
    Footer,
    vueSVG,
    appearObject
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
