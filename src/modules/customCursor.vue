<template lang="pug">
  .c-custom-cursor(v-if="isPC")
    .default
    .hover
</template>
<script>
    import { mapState } from 'vuex';

    export default {
        name: 'customCursor',
        computed: {
            ...mapState('device', [
              'width',
              'height',
              'isSP',
              'isPC',
            ]),
            ...mapState('mouse', [
              'mouseX',
              'mouseY',
            ]),
        },

        created() {
          this.mouseDefault;
          this.mouseHover;

        },

        mounted() {
          if(this.isSP) return
          this.$nextTick(() => {
            this.mouseDefault = this.$el.querySelector('.default');
            this.mouseHover = this.$el.querySelector('.hover');

            this.$eventHub.$on('update', this.update);
            this.$eventHub.$on('afterPageEnter', this.onHoverEvent);
            this.$eventHub.$on('beforePageLeave', this.offHoverEvent);
          });

        },

        beforeDestroy() {
          this.$eventHub.$off('afterPageEnter', this.onHoverEvent);
          this.$eventHub.$off('beforePageLeave', this.offHoverEvent);
        },

        methods: {
          onHoverEvent() {
            this.targetItems = [].slice.call( document.querySelectorAll( '[data-custom-cursor]'));
            for (var i = 0; i < this.targetItems.length; i++) {
              this.targetItems[i].addEventListener('mouseenter', this.mouseEnter, false)
              this.targetItems[i].addEventListener('mouseleave', this.mouseLeave, false)
            }
          },
          offHoverEvent() {
            for (var i = 0; i < this.targetItems.length; i++) {
              this.targetItems[i].removeEventListener('mouseenter', this.mouseEnter, false)
              this.targetItems[i].removeEventListener('mouseleave', this.mouseLeave, false)
            }
          },
          mouseEnter() {
            this.mouseDefault.style.transform = 'scale(0)';
            this.mouseHover.style.transform = 'scale(1)';
          },
          async mouseLeave() {
            this.mouseDefault.style.transform = 'scale(1)';
            this.mouseHover.style.transform = 'scale(0)';
          },
          update() {
            this.$el.style.transform = `translate3d(${this.mouseX - this.$el.clientWidth / 2}px , ${this.mouseY - this.$el.clientHeight / 2}px, 0)`
          }
        },
      }

</script>

<style lang="sass">
  .c-custom-cursor
    position: fixed
    top: -2px
    left: -2px
    width: 4px
    height: 4px
    border-radius: 50%
    background-color: red
    z-index: 100
    pointer-events: none
    display: inline-block
    transition: 0.2s ease-out
    .default
      position: absolute
      top: -18px
      left: -18px
      width: 40px
      height: 40px
      border: 1px solid #9c9c9c
      border-radius: 50%
      opacity: .2
      box-sizing: border-box
      z-index: 99
      transition: 0.4s $ease-out-quad
    .hover
      position: absolute
      top: -38px
      left: -38px
      width: 80px
      height: 80px
      background-color: #9c9c9c
      border-radius: 50%
      opacity: .12
      z-index: 98
      box-sizing: border-box
      transform: scale(0)
      transition: 0.4s $ease-out-quad
  </style>
