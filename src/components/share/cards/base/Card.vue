<template>
  <div id="card" class="card">
    <div>
      <div class="card__header">
        <p class="card__title">
          {{ title }}
        </p>
        <span
          v-if="topRightLabel"
          class="card__top-right-label"
          :class="`card__top-right-label--${topRightLabel.color}`"
        >
          {{ topRightLabel.label }}
        </span>
      </div>
      <p class="card__text">
        {{ text }}
      </p>
    </div>
    <!-- <div class="d-flex">
      <div class="d-flex">
        <div v-for="tag of ticket.tags" :key="tag.label">
          {{ tag.label }}
        </div>
      </div>
      <div>{{ ticket.name }}</div>
      <div class="d-flex">
        <span v-for="chip of ticket.chips" :key="chip.label" :class="`ticket-chip--${chip.color}`">
          {{ chip.label }}
        </span>
      </div>
    </div>  -->
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    topRightLabel: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/core/_variables.scss";

.card {
  padding: 20px;
  border-radius: 4px;
  background: #ffffff;
}

.card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card__title {
  margin-bottom: 0;
  font-size: 16px;
  line-height: 1.25;
  font-weight: 500;
  color: map-get($text, "strong");
}

.card__top-right-label {
  font-size: 12px;
}

.card__top-right-label--orange {
  color: map-get($colors, "orange");
}

.card__text {
  font-size: 14px;
  color: map-get($text, "base");
}
</style>
