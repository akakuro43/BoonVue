<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    // use case
    // parallax-object.thumb( v-bind:isRangeUnitPercent="false", v-bind:rangeY="100")


    export default {
        name: 'MouseParallaxObject',

        props: {
          isAxisXOnly:  { type: Boolean, default: false },
          isAxisYOnly:  { type: Boolean, default: false },
          isReverseX:  { type: Boolean, default: false },
          isReverseY:  { type: Boolean, default: false },
          rangeX: { type: Number, default: 10 },
          rangeY: { type: Number, default: 5 },
          ease: { type: Number, default: 0.075 },
        },

        data() {
          return {
            active: true,
            vertialMouseX: 0,
            vertialMouseY: 0,
          };
        },

        computed: {
            ...mapState('device', [
                'isTouch',
                'height',
                'width'
            ]),
            ...mapState('scroll', [
                'defaultScrollTop',
                'vertialScrollTop',
                'scrollSpeed',
            ]),
            ...mapState('mouse', [
                'mouseY',
                'mouseX',
            ]),
        },

        created() {
          this.targetCenter = 0;
          this.translationX = 0;
          this.translationY = 0;
        },

        mounted() {
          if(this.isSP) return
            this.$nextTick(() => {
              this.$eventHub.$on('resize', this.resize);
              this.$eventHub.$on('update', this.update);

              this.resize();
            });
        },

        beforeDestroy() {
          if(this.isSP) return
          this.$eventHub.$off('resize', this.resize);
          this.$eventHub.$off('update', this.update);
        },

        methods: {
          resize() {
              if (this.isTouch) {
                  this.active = false;
              } else {
                  this.active = true;

                  const rect = this.$el.getBoundingClientRect();
                  const top = rect.top;
                  this.targetHeight = rect.height;
                  this.targetCenter = top + this.vertialScrollTop + ( this.targetHeight / 2 ); // ターゲットの中心までの距離(px)
              }
          },

          update() {
            if (!this.active) return;

            let targetToPx = this.targetCenter + (-this.offset) - (this.vertialScrollTop + this.height / 2);
            // ターゲトまでの距離(%)
            let targetToPer = targetToPx / this.height;

            // -1 〜 1外でリターン
            if(targetToPer > 1.25 || targetToPer < -1.25) return;

            this.translationObject();
          },
          translationObject() {
            let vertialMouseX = this.e(this.vertialMouseX, this.mouseX, this.ease);
                vertialMouseX = Math.floor(100 * vertialMouseX) / 100;
            let vertialMouseY = this.e(this.vertialMouseY, this.mouseY, this.ease);
                vertialMouseY = Math.floor(100 * vertialMouseY) / 100;
            this.vertialMouseX = vertialMouseX;
            this.vertialMouseY = vertialMouseY;
            let mousePerX = (vertialMouseX / this.width) * 2 - 1
            let mousePerY = (vertialMouseY / this.height) * 2 - 1
            let x = this.rangeX * mousePerX;
            let y = this.rangeY * mousePerY;

            if(this.isAxisXOnly) y = 0;
            if(this.isAxisYOnly) x = 0;
            if(this.isReverseX) x = -x;
            if(this.isReverseY) y = -y;
            this.$el.style.transform = `translate3d(${x+'px'},${y+'px'},0)`;

          },
          e(e, t, n) {
           return (1 - n) * e + n * t;
         }
        },
    };
</script>
