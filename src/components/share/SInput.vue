<template>
  <div>
    <input v-bind="$attrs" class="s-input">
  </div>
</template>

<script>
export default {
  name: 'SInput',
};
</script>

<style lang="scss">
@import "@/assets/scss/core/_variables.scss";

.s-input {
  width: 100%;
  padding: 6px 11px;
  font-size: 14px;
  line-height: 1;
  color: currentColor;
  border-radius: 4px;
  background: #f7f7fc;
  &::placeholder {
    color: map-get($text, "placeholder")
  }
}
</style>
