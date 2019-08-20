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
        name: 'ParallaxObject',

        props: {
          mode: { type: String, default: 'vertical' }, // 'horizontal', 'oblique'
          isRangeUnitPercent: { type: Boolean, default: true },
          rangeX: { type: Number, default: 0.05 },
          rangeY: { type: Number, default: 0.05 },
          offset: { type: Number, default: 0}
        },

        data() {
          return {
            active: true,
          };
        },

        computed: {
            ...mapState('device', [
                'isTouch',
                'height'
            ]),
            ...mapState('scroll', [
                'defaultScrollTop',
                'vertialScrollTop',
                'scrollSpeed',
            ]),
        },

        created() {
          this.targetCenter = 0;
          this.translationX = 0;
          this.translationY = 0;
        },

        mounted() {
          this.unit = this.isRangeUnitPercent ? '%' : "px";
            this.$nextTick(() => {
              this.$eventHub.$on('resize', this.resize);
              this.$eventHub.$on('update', this.update);

              this.resize();
            });
        },

        beforeDestroy() {
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
            // console.log(targetToPer)
            // if(targetToPer > 1.0 || targetToPer < -1.0) return;

            if(this.isRangeUnitPercent) {
              this.translationPercent(targetToPer);
            } else {
              this.translationPx(targetToPer);
            }
          },
          translationPercent(targetToPx) {
            // トランスレイト計算
            switch (this.mode) {
              case 'vertical':
                this.translationY += (targetToPx * (this.rangeY * this.targetHeight ) - this.translationY);
                break;
              case 'horizontal':
                this.translationX += (targetToPx * this.rangeX - this.translationX);
                break;
              case 'oblique':
                this.translationY += (targetToPx * this.rangeY - this.translationY);
                this.translationX += (targetToPx * this.rangeX - this.translationX);
                break;
              // case 'scale':
              //   return;
              default:
            }
            // 移動
            this.$el.style.transform = `translate3d(${this.translationX + this.unit},${this.translationY + this.unit},0)`;
          },
          translationPx(targetToPer) {
            // トランスレイト計算
            switch (this.mode) {
              case 'vertical':
                this.translationY += (targetToPer * this.rangeY - this.translationY);
                break;
              case 'horizontal':
                this.translationX += (targetToPer * this.rangeX - this.translationX);
                break;
              case 'oblique':
                this.translationY += (targetToPer * this.rangeY - this.translationY);
                this.translationX += (targetToPer * this.rangeX - this.translationX);
                break;
              // case 'scale':
              //   return;
              default:
            }
            // 移動
            this.$el.style.transform = `translate3d(${this.translationX + this.unit},${this.translationY + this.unit},0)`;
          }
        },
    };
</script>
