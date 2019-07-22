<template lang="pug">
.l-page
  //- .l-kv
  //-   .kv__read
  //-     h1#pageName.page-name お問い合わせ
  //-   .kv__bg
  //-     textSlider(
  //-       msgPC="Contact Contact Contact Contact ",
  //-       msgSP="Contact ")
  //-   .kv__cover
  //- .l-contents
  //-   .s-contact
  //-     .c-inner--s
        From
  Footer
</template>

<script>
import Footer from '@/layouts/Footer';
import meta from '@/variables/meta.js';
import From from '@/modules/vue-form/Form';
import { mapState, mapMutations } from 'vuex';

export default {


  name: 'contact',
  components: {
    Footer,
    From
  },
  computed: {
    ...mapState(
      'window',['height','isTouch']
    ),
  },
  mounted() {
  },
  metaInfo: meta('contact'),
  methods: {
    ...mapMutations(["increment", "decrement"])
  }
}
</script>

<style lang="sass">
  +media-desktop
  +media-mobile

</style>
