<template lang="pug">
  .l-loading
</template>

<script>
// import { mapState } from 'vuex';
// import lottie from 'lottie-web';
// import sleep from '@/utilities/Sleep.js';
export default {
  name: 'Loading',
  created() {

  },
  mounted() {
    // this.animation = lottie.loadAnimation({
    //   container: this.$el, // the dom element that will contain the animation
    //   renderer: 'svg',
    //   loop: false,
    //   autoplay: false,
    //   path: '/assets/data/loading.json' // the path to the animation json
    // });
    // this.$eventHub.$on('enterHook',this.play);
    // this.show();
  },
  beforeDestroy() {
    // this.$eventHub.$off('enterHook',this.play);
  },
  methods: {
  }

}
</script>

<style lang="sass" scoped>
  .l-loading
    +fitParent(fixed)
    z-index: 10000
    display: none
</style>
