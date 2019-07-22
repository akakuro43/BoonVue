<template lang="pug">
  svg(
    v-bind:class="className",
    xmlns='http://www.w3.org/2000/svg',
    v-bind:width='svgWidth',
    v-bind:height='svgHeight',
    v-bind:viewBox='0 + " " + 0 + " " +  widthBase + " " +  heightBase',
    v-html="svgValue")
</template>

<script>

import svgdata from './svgdata.js';

export default {
  name: 'vueSVG',
  props: {
    keyname: String,
    width: String,
    isLiquid: Boolean
  },
  data() {
    return {
      svgWidth: 0,
      svgHeight: 0,
      widthBase: 0,
      heightBase: 0,
      className: '',
      svgValue: ''
    };
  },
  mounted() {
    this.widthBase = Number(svgdata[this.keyname].widthBase);
    this.heightBase = Number(svgdata[this.keyname].heightBase);
    this.className = svgdata[this.keyname].className;
    let width = Number(this.width);

    this.svgWidth = width;
    this.svgHeight = Math.ceil(width * this.heightBase / this.widthBase);
    this.svgValue = svgdata[this.keyname].svgValue

    if(this.isLiquid) {
      // unit:vw
      this.svgWidth += 'vw';
      this.svgHeight += 'vw';
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
