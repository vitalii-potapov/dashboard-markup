<template>
  <div id="tickets-body">
    <!-- <div class="control">
      <div class="input">
        Create new activity...
      </div>
      <div class="search">
        search
      </div>
      <div class="sort">
        sort
      </div>
    </div> -->

    <notification class="mb-3">
      <template #after>
        <s-btn class="tickets-body__notification-btn">
          View contact
        </s-btn>
      </template>
    </notification>

    <base-list />
  </div>
</template>

<script>
import Notification from '@/components/share/notification/Notification.vue';
import BaseList from '@/components/share/cards/base/List.vue';

export default {
  name: 'TicketsBody',
  components: {
    Notification,
    BaseList,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/core/_variables.scss";

#tickets-body {
  .tickets-body__notification-btn {
    height: unset;
    margin-left: auto;
    padding: 7px 8px;
    font-size: 12px;
    color: map-get($text, "base");
    border-radius: 4px;
    background-color: #ffffff;

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
