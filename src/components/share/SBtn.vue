<template functional>
  <v-btn
    v-bind="data.attrs"
    class="s-btn"
    :class="data.staticClass"
    :elevation="props.elevation"
    v-on="listeners"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  props: {
    elevation: {
      type: [Number, String],
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.s-btn {
  position: relative;
  font-weight: 400;
  letter-spacing: 0;
  text-transform: initial;
}
</style>
