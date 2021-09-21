<template>
  <div id="profile__control" class="d-flex">
    <s-btn
      v-for="control of controls"
      :key="control.action"
      class="profile__control-btn"
      small
      @click="$emit('click', control.action)"
    >
      <s-icon v-if="control.assetsIcon">{{ control.icon }}</s-icon>
      <v-icon
        v-else
        class="material-icons-round"
        color="#currentColor"
        size="18"
      >
        {{ control.icon }}
      </v-icon>
    </s-btn>
  </div>
</template>

<script>
export default {
  name: 'ProfileControl',
  props: {
    controls: {
      type: Array,
      default: () => [
        { action: 'phone', icon: 'call' },
        { action: 'message', icon: 'chat' },
        { action: 'deals', icon: 'deals', assetsIcon: true },
        { action: 'tasks', icon: 'inventory', assetsIcon: true },
        { action: 'notification', icon: 'notifications', assetsIcon: true },
      ],
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/core/_variables.scss";

#profile__control {
  .profile__control-btn {
    width: 34px;
    min-width: unset;
    height: 28px;
    padding: 0;
    color: map-get($text, "base");

    &:not(:last-child) {
      margin-right: 8px;
    }
    &:hover {
      color: map-get($profile, "active");
    }
    &:before {
      background-color: #ffffff;
    }

    .v-ripple__container {
      color: map-get($profile, "active");
    }
  }
}
</style>
