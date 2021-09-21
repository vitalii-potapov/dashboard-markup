<template>
  <div class="profile-details">
    <div>
      <div v-for="item of details" :key="item.label" class="profile-details__item">
        <div class="profile-details__label">
          {{ item.label }}
        </div>
        <div v-if="!item.type" :class="`text-${item.color || 'base'}`">
          {{ item.value }}
        </div>
        <div
          v-else-if="item.type === 'status'"
          class="profile-details__status"
          :class="`profile-details__status--${item.value.color}`"
        >
          {{ item.value.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileDetails',
  props: {
    details: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/core/_variables.scss";

.profile-details {
  padding: 32px;
}

.profile-details__item {
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 14px;
}

.profile-details__label {
  width: 120px;
  color: map-get($text, "base")
}

.profile-details__status {
  padding: 0 8px;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.03em;
  line-height: 18px;
  text-transform: uppercase;
  border: 1px solid;
  border-radius: 20px;
}

.profile-details__status--yellow {
  color: map-get($status, "yellow");
  border-color: map-get($status, "yellow-stroke");
  background-color: map-get($status, "yellow-fill");
}
</style>
