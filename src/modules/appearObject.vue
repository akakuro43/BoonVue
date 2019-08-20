
<template lang="pug">
div
  slot
</template>

<script>
import { mapState } from 'vuex';
import getOffsetTop from '@/utilities/getOffsetTop';

// use case
// px指定
// appearObject(offset=100, isUnitPx=true)
// %指定
// appearObject(offset=0.01)

export default {
    name: 'AppearObject',
    props: {
        once: { type: Boolean }, // default:false
        offset: { type: String }, // %:0.00 - 1.0、px:0 -
        isUnitPx: { type: Boolean } // default:false → %
    },

    computed: {
        ...mapState('device', [
            'isTouch',
            'height',
        ]),
        ...mapState('scroll', [
            'defaultScrollTop',
            'vertialScrollTop',
            'scrollSpeed',
        ]),
    },

    created() {
      this.show = false;
    },

    mounted() {
      if(this.isUnitPx) {
        // offset:PX
        this.offsetValue = this.offset != null ? this.offset : 100
      } else {
        // offset:%
        this.offsetValue = this.offset != null ? this.offset : 0.1
      }

      this.$eventHub.$on('resize', this.resize);
      this.$eventHub.$on('update', this.update);

      this.resize();
    },

    beforeDestroy() {
      this.$eventHub.$off('resize', this.resize);
      this.$eventHub.$off('update', this.update);
    },

    methods: {
      resize() {
        this.offsetY = getOffsetTop(this.$el);
        if(this.isUnitPx) {
          this.trigger = this.offsetY -  (this.height - this.offsetValue);
        } else {
          this.trigger = this.offsetY -  (this.height - (this.height * this.offsetValue));
        }
      },

      update() {
        // console.log(this.offsetValue)
        if (this.once && this.show) return;

        if (!this.show && this.vertialScrollTop >= this.trigger) {
          this.show = true;
          this.$el.classList.add('is-appear');
        }

        if (!this.once) {
          if (this.show && this.vertialScrollTop < (this.offsetY -  this.height)) {
            this.show = false;
            this.$el.classList.remove('is-appear');
          }
        }
      },
    },
};
</script>
