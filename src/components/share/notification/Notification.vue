<template>
  <div>
    <div class="notification notification--blue">
      <v-icon class="material-icons-round mr-2" size="13">{{ icon }}</v-icon>
      <span class="notification__text">{{ text }}</span>
      <slot name="after" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    icon: {
      type: String,
      default: 'info',
    },
    text: {
      type: String,
      default: 'To view the entire contact history and activity feed, check the contact profile.',
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/core/_variables.scss";

.notification {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: map-get($text, "strong");
  border-radius: 4px;
}

.notification--blue {
  background-color: map-get($notification, "blue-fill");

  .v-icon {
    color: map-get($notification, "blue");
  }
}

.notification__text {
  font-size: 14px;
}
</style>
