<template lang="pug">
  div.img-wapper
    // imgtag
    img.v-img(v-if="src != null",:src='imgPath', :alt='imgAlt')
    // background
    .v-bgimg(v-if="bgImg != null", v-bind:style='{backgroundImage: "url(" + imgPath + ")"}', v-bind:data-img-path="imgPath")
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'vueSVG',
  props: {
    src: String,
    bgImg: String,
    alt: String
  },
  data() {
    return {
      imgPath: '',
      imgAlt: '',
      isImgTag: true
    };
  },
  computed: {
    ...mapState('window', [
        'device',
    ]),
  },
  mounted() {
    let imgPath;
    this.isImgTag = this.src != null;
    this.isImgTag = !(this.bgImg != null);
    imgPath = this.isImgTag ? this.src : this.bgImg;

      this.imgPath = this.replace(imgPath);

      // console.log(this.imgPath);
    if(this.isImgTag) this.imgAlt = this.alt;

    this.imgLoad(this.imgPath);
  },
  methods: {
    imgLoad(src) {
      const img = new Image();
      img.onload = () => {
        setTimeout(()=> {
          // console.log('COMPLETE IMAGE!!!')
          this.$eventHub.$emit('resize');
        },100);
      };
      img.src = src;
    },
    replace(src) {
      return src.replace('device', this.device);
    }
  }
}
</script>

<style lang="sass" scoped>
  .js-bg-img
    width: 100%
    height: 100%
  .v-bgimg
    +fitParent
    background-position: 50% 50%
    background-repeat: no-repeat
    background-size: cover
</style>
