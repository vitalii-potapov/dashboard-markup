<template>
  <svg
    class="s-icon"
    :style="style"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <use :xlink:href="label" />
  </svg>
</template>

<script>
import isArray from 'lodash/isArray';

export default {
  name: 'SIcon',
  props: {
    assetsIcon: {
      type: Boolean,
      default: false,
    },
    size: {
      type: [Number, String, Array],
      default: 0,
    },
    isArray: {
      type: Function,
      default: isArray,
    },
  },
  computed: {
    label() {
      if (!this.$slots.default) return '';

      // eslint-disable-next-line global-require
      return `${require('@/assets/icons/symbols.svg')}#${this.$slots.default[0].text.trim()}`;
    },
    style() {
      if (!this.size) return '';

      return this.size && this.isArray(this.size)
        ? `width:${this.size[0]}px;height:${this.size[1]}px`
        : `width:${this.size}px;height:${this.size}px`;
    },
  },
};
</script>

<style lang="scss">
.s-icon {
  width: 18px;
  height: 18px;
}
</style>
