<template lang="pug">
  div
    .slider-container.swiper-container
      .slider-wrapper.swiper-wrapper
        slot
    .slider-progress(v-if="isProgress")
      .progress-value(v-bind:style="`transform: scaleX(${progress})`")
</template>

<script>
    import { mapState } from 'vuex';
    import Swiper from 'swiper';

    // 参考資料
    // http://reiwinn-web.net/2018/03/15/swiper-4-1-6/#speed

    // use case
    // swiper(v-bind:slidesPerView=3, v-bind:centeredSlides='false')
    // .slide.swiper-slide
    //   vueImg(src="/assets/images/common/dummyImg.png")
    // .slide.swiper-slide
    //   vueImg(src="/assets/images/common/dummyImg.png")

    export default {
        name: 'swiper',
        props: {
          isProgress: { type: Boolean, default: true },
          slidesPerView: { type: Number, default: 3 },
          spaceBetween: { type: Number, default: 32 },
          centeredSlides: { type: Boolean, default: true },
        },
        computed: {
            ...mapState('device', [
                'isTouch',
                'isPC'
            ]),
        },
        data() {
          return {
            progress: 0,
          };
        },

        created() {
        },

        mounted() {
            this.$nextTick(() => {
              this.init();
              this.addEvent();
            });
        },

        beforeDestroy() {
          this.swiper = null;
        },

        methods: {
          init() {
            this.swiper = new Swiper('.swiper-container', {
              slidesPerView: this.slidesPerView,
              spaceBetween: this.spaceBetween,
              centeredSlides: this.centeredSlides,
              nested: false
              // pagination: {
              //   el: '.swiper-pagination',
              //   clickable: true,
              // },
            });
          },
          addEvent() {
            if(this.isProgress) {
              this.swiper.on('progress',  progress => {
                // console.log(progress);
                this.progress = progress;
              });
            }
          }
        }
    };
</script>
<style lang="sass" scoped="">
  @import "../assets/sass/vendor/swiper.sass"

  .slider-container
    width: 100%
    height: 100%
    .slider-wrapper
      display: flex
  .slider-progress
    position: absolute
    top: -32px
    right: 41px
    width: 150px
    height: 1px
    background: #ccc
    overflow: hidden
    .progress-value
      +fitParent
      transform-origin: left
      transform: scaleX(0)
      transition: 0.1s ease-out
      background: red

</style>
