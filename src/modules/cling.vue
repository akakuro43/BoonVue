<template lang="pug">
    .js-cling
      .js-cling-target
        slot
</template>

<script>
    import { mapState } from 'vuex';
    import {TweenMax} from "gsap";
    // use case
    // cling.cling-github-link

    export default {
        name: 'cling',
        computed: {
            ...mapState('device', [
                'isTouch',
                'isPC'
            ]),
            ...mapState('mouse', [
                'mouseY',
                'mouseX',
            ]),
        },

        created() {
          this.mousePosition = {
            x: 0,
            y: 0,
          }
          this.isready = false;
        },

        mounted() {
            this.$nextTick(() => {
              this.isActive = this.isPC
              if(!this.isActive) return

              this.init();
              this.$eventHub.$on('update', this.update);
              this.onMouseEnterLeave();
            });
        },

        beforeDestroy() {
          if(!this.isActive) return
          this.$eventHub.$off('update', this.update);
          this.offMouseEnterLeave();
        },

        methods: {
          init() {
            this.clingAnim = {
                onMouseEnter: () => {
                    this.isready = true;
                    this.el = this.$el;
                    this.cling = this.$el.querySelector('.js-cling-target');
                    this.w = this.el.clientWidth;
                    this.h = this.el.clientHeight;
                },
                onMouseMove: () => {
                    var bounds = this.$el.getBoundingClientRect();
                    var x = bounds.left;
                    var y = bounds.top;
                    this.tx = ((this.mousePosition.x - x) / this.w - 0.5) * 1;
                    this.ty = ((this.mousePosition.y - y) / this.h - 0.5) * 1;
                    this.dx = (this.tx * 180) * Math.PI / 180;
                    this.dy = (this.ty * 180) * Math.PI / 180;
                    TweenMax.to(this.cling, 0.2, {
                        // rotation: _this.dx + 'deg',
                        x: this.dx * 8 + 'px',
                        y: this.dy * 8 + 'px',
                    });
                },
                onMouseLeave: () => {
                    this.isready = false;
                    if (this.cling) {
                        TweenMax.to(this.cling, 0.6, {
                            // rotation: '0deg',
                            x: '0px',
                            y: '0px',
                            ease: Elastic.easeOut.config(1.1, 0.6)
                        });
                    }
                },
            }
          },
          update() {
            this.mousePosition.x = this.mouseX;
            this.mousePosition.y = this.mouseY;
            if (this.isready) {
              this.clingAnim.onMouseMove();
            }
          },
          onMouseEnter() {
            this.clingAnim.onMouseEnter(this);
          },
          onMouseLeave() {
            this.clingAnim.onMouseLeave(this);
          },

          onMouseEnterLeave() {
            this.$el.addEventListener('mouseenter', this.onMouseEnter)
            this.$el.addEventListener('mouseleave', this.onMouseLeave)
          },
          offMouseEnterLeave() {
            this.$el.removeEventListener('mouseenter', this.onMouseEnter)
            this.$el.removeEventListener('mouseleave', this.onMouseLeave)
          }
        }
    };
</script>
