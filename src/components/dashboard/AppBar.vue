<template>
  <v-app-bar id="app-bar" flat height="52">
    <div class="app-bar__left-col d-flex flex-grow-1">
      <s-btn class="app-bar__btn app-bar__btn--blue font-weight-medium" dark>
        Create
      </s-btn>

      <s-input class="app-bar__search" placeholder="Search TextMagic workspace" type="text" />
    </div>
    <div class="app-bar__right-col d-flex align-center">
      <s-btn class="app-bar__btn app-bar__btn--gray app-bar__btn--online">
        <span class="app-bar__status app-bar__status--online" />
        Online
      </s-btn>
      <s-btn class="app-bar__icon-btn" icon small>
        <v-icon class="material-icons-round" color="#currentColor" size="18">event</v-icon>
      </s-btn>
      <s-btn class="app-bar__icon-btn" icon small>
        <s-icon>notifications</s-icon>
      </s-btn>
      <s-btn class="app-bar__icon-btn" icon small>
        <s-icon>settings</s-icon>
      </s-btn>
      <profile-menu>
        <template #activator="{ on }">
          <s-btn class="app-bar__btn font-weight-medium" outlined v-on="on">
            <span class="mr-2">TextMagic</span>
            <v-img class="app-bar__avatar" src="@/assets/img/dashboard/app-bar/avatar.png" />
          </s-btn>
        </template>
      </profile-menu>
    </div>
  </v-app-bar>
</template>

<script>
import ProfileMenu from '@/components/share/profile-menu/ProfileMenu.vue';

export default {
  name: 'AppBar',
  components: {
    ProfileMenu,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/core/_variables.scss";

#app-bar {
  color: map-get($text, "base");

  .v-toolbar__content {
    display: flex;
    justify-content: space-between;
    padding: 12px 32px;
    background: #ffffff;
    border-bottom: 1px solid map-get($app-bar, "border");
  }

  .app-bar__left-col > .s-btn {
    margin-right: 10px;
  }

  .app-bar__right-col > .s-btn:not(:last-child) {
    margin-right: 11px;
  }

  .app-bar__btn {
    height: unset;
    padding: 6px 11px;
    font-size: 14px;
    color: map-get($text, "base");
    &:hover {
      color: map-get($app-bar, "blue");
    }
    &:before {
      background-color: #ffffff;
    }

    &:not(.app-bar__btn--online):not(.app-bar__btn--blue) {
      .v-ripple__container {
        color: map-get($app-bar, "blue");
      }
    }
  }

  .app-bar__btn--blue {
    color: #ffffff;
    border-color: map-get($app-bar, "blue");
    background-color: map-get($app-bar, "blue");
    &:hover {
      color: #ffffff;
    }
  }

  .app-bar__btn--gray {
    background-color: map-get($app-bar, "second");
  }

  .app-bar__btn--online {
    &:hover {
      color: map-get($user-status, "online");
    }
  }

  .app-bar__btn.v-btn--outlined {
    border-color: map-get($app-bar, "border");
    &:hover {
      border-color: map-get($app-bar, "blue");
    }
  }

  .app-bar__status {
    width: 12px;
    height: 12px;
    margin-right: 6px;
    border-radius: 50%;
  }

  .app-bar__status--online {
    background-color: map-get($user-status, "online");

    .v-ripple__container {
      color: map-get($user-status, "online");
    }
  }

  .app-bar__search {
    color: map-get($text, "base");
    max-width: 320px;
    width: 100%;
  }

  .app-bar__icon-btn {
    &:hover {
      color: map-get($app-bar, "blue");
    }

    .v-ripple__container {
      color: #ffffff;
    }
  }

  .app-bar__avatar {
    width: 18px;
    height: 18px;
  }
}
</style>
