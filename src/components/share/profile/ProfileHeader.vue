<template>
  <div
    id="profile__header"
    class="profile__header"
    :style="`background-image: url('${require('@/assets/img/pages/tickets/profile/bg.png')}')`"
  >
    <div class="d-flex flex-column align-center mb-4">
      <div class="profile__avatar">
        <img :alt="name" class="profile__avatar-img" src="@/assets/img/pages/tickets/profile/avatar.jpeg">
      </div>
      <p class="profile__name">
        {{ name }}
      </p>
      <a class="profile__link" :href="link.link">
        <span class="mr-1">
          {{ link.label }}
        </span>
        <v-icon class="profile__link--icon material-icons-round" size="13">
          {{ link.icon || 'north_east' }}
        </v-icon>
      </a>
    </div>

    <profile-control />

    <v-tabs
      active-class="text-strong"
      background-color="transparent"
      centered
      class="profile__tabs"
      :value="activeTab"
      @change="$emit('change', $event)"
    >
      <v-tab key="0">
        Ticket details
      </v-tab>
      <v-tab key="1">
        Contact details
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>
import ProfileControl from './ProfileControl.vue';

export default {
  name: 'ProfileHeader',
  components: {
    ProfileControl,
  },
  model: {
    prop: 'activeTab',
    event: 'change',
  },
  props: {
    activeTab: {
      type: Number,
      default: 0,
    },
    avatar: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    link: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/core/_variables.scss";

#profile__header {
  .profile__name,
  .profile__link {
    color: map-get($text, "strong")
  }
  .profile__link--icon {
    color: map-get($text, "base")
  }
  .profile__link:hover {
    color: map-get($profile, "active");

    .profile__link--icon {
      color: map-get($profile, "active");
    }
  }
  .profile__name {
    margin-bottom: 1px;
  }
  .profile__tabs {
    flex: unset;
    margin-top: auto;

    .v-tab,
    .v-tab:before,
    .v-tabs-slider {
      border-radius: 3px 3px 0 0;
    }

    .v-tab {
      max-width: 160px;
      width: 100%;
      text-transform: none;
      letter-spacing: 0;
      &:hover {
        .v-tab {
          color: map-get($profile, "active") !important;
        }
      }

      &:before,
      .v-ripple__container {
        color: map-get($profile, "active");
      }
    }

    .v-tabs-slider {
      height: 3px;
    }
  }
}

.profile__header {
  display: flex;
  align-items: center;
  flex-flow: column;
  min-height: 260px;
  padding-top: 30px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-position: center;
  background-size: cover;
}

.profile__avatar {
  display: flex;
}

.profile__avatar-img {
  width: 80px;
  height: 80px;
  margin-bottom: 4px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}

.profile__name {
  margin-bottom: 2px;
  font-size: 16px;
  font-weight: 500;
}

.profile__link {
  display: flex;
  align-items: center;
  font-size: 12px;
  text-decoration: none;
  transition: $default-transition;
}

.profile__link--icon {
  margin-bottom: 1px;
}
</style>
