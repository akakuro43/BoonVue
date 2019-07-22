<template lang="pug">
.js-accordion(v-cloak='')
  .js-accordion--trigger(:class="{ '_state-open': isOpened }", @click='accordionToggle()')
    slot(name='title')
  transition(name="js-accordion" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave")
    .js-accordion--target(:class="{ '_state-open': isOpened }", v-if='isOpened')
      slot(name='body')
</template>
<script>

    import sleep from '@/utilities/Sleep.js';
    export default {
        name: 'accordion',
        props: {
        },
        data() {
          return {
             isOpened: false
          };
        },
        created() {

        },

        mounted() {

        },

        beforeDestroy() {

        },

        methods: {
          async accordionToggle(){
            this.isOpened = !this.isOpened;
            await sleep(1200)
            this.$eventHub.$emit('resize');
          },
          beforeEnter: function(el) {
            el.style.height = '0';
          },
          enter: function(el) {
            el.style.height = el.scrollHeight + 'px';
          },
          beforeLeave: function(el) {
            el.style.height = el.scrollHeight + 'px';
          },
          leave: function(el) {
            el.style.height = '0';
          }
        },
    }
</script>

<style lang="sass" scoped>
.js-accordion
  &--target
    transition: height 0.4s ease-in-out
    overflow: hidden
  // (略)
  &-enter-active
    animation-duration: 1s
    animation-fill-mode: both
    animation-name: js-accordion--anime__opend
  &-leave-active
    animation-duration: 1s
    animation-fill-mode: both
    animation-name: js-accordion--anime__closed

@keyframes js-accordion--anime__opend
  0%
    opacity: 0
  100%
    opacity: 1


@keyframes js-accordion--anime__closed
  0%
    opacity: 1
  100%
    opacity: 0
</style>
