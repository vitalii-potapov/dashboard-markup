<template>
  <v-menu
    bottom
    :close-on-content-click="false"
    max-width="250"
    min-width="250"
    origin="center center"
    transition="scale-transition"
  >
    <template #activator="{ on }">
      <slot name="activator" :on="on" />
    </template>

    <div id="profile-menu" class="profile-menu">
      <div
        class="profile-menu__header"
        :style="`background-image: url('${require('@/assets/img/dashboard/app-bar/profile-menu-bg.png')}')`"
      >
        <div class="d-flex flex-column align-center">
          <div class="profile-menu__avatar">
            <img :alt="name" class="profile-menu__avatar-img" src="@/assets/img/pages/tickets/profile/avatar.jpeg">
          </div>
          <div class="profile-menu__text profile-menu__text--title">
            {{ name }}
          </div>
          <a class="profile-menu__text profile-menu__text--email" href="mailto:robert.overrit@textmagic.com">
            {{ email }}
          </a>
          <div class="profile-menu__text profile-menu__text--highlight">
            Manage account
          </div>
        </div>
      </div>
      <div>
        <v-list flat>
          <v-list-item-group
            v-model="selectedItem"
            color="primary"
            @click.prevent.stop
          >
            <v-list-item v-for="item of navItems" :key="item.label" class="profile-menu__nav-item">
              <v-list-item-icon>
                <v-icon class="material-icons-round" size="13">{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.label }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
    </div>
  </v-menu>
</template>

<script>
export default {
  name: 'ProfileMenu',
  props: {
    name: {
      type: String,
      default: 'Robert Overrit',
    },
    email: {
      type: String,
      default: 'robert.overrit@textmagic.com',
    },
    navItems: {
      type: Array,
      default: () => [
        { icon: 'business', label: 'Workspace' },
        { icon: 'group', label: 'Users' },
        { icon: 'credit_card', label: 'Billing' },
      ],
    },
  },
  data: () => ({
    selectedItem: null,
  }),
};
</script>

<style lang="scss">
@import "@/assets/scss/core/_variables.scss";

#profile-menu {
  background-color: #ffffff;

  ul {
    padding: 0;
  }

  .profile-menu__email {
    font-size: 12px;
    color: map-get($text, "base");
  }

  .profile-menu__header {
    padding: 16px 12px 12px;
    background-position: center;
    background-size: cover;
  }

  .profile-menu__avatar {
    display: flex;
  }

  .profile-menu__avatar-img {
    width: 40px;
    height: 40px;
    margin-bottom: 4px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }

  .profile-menu__text {
    font-size: 12px;
    color: map-get($text, "base");
  }

  .profile-menu__text--title {
    font-size: 14px;
    font-weight: 500;
    color: map-get($text, "strong");
  }

  .profile-menu__text--email {
    text-decoration: none;
    transition: $default-transition;
    &:hover {
      color: map-get($colors, "blue");
    }
  }

  .profile-menu__text--highlight {
    font-weight: 500;
    color: map-get($colors, "blue");
  }

  .profile-menu__nav-item {
    min-height: unset;

    .v-list-item {
      padding: 0 20px;
    }

    .margin-right {
      margin-right: 10px;
    }

    .v-list-item__icon {
      margin: 11.5px 0;
    }

    .v-list-item__content {
      padding: 7.5px 0;
    }

    .v-list-item__title {
      font-size: 14px;
      color: map-get($text, "strong");
    }
  }
}
</style>
