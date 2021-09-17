<template>
  <v-navigation-drawer
    id="app-bar"
    height="100%"
    :mini-variant="miniVariant"
    mini-variant-width="68"
    permanent
    src="@/assets/img/dashboard/navigation.png"
    width="200"
  >
    <template #img>
      <v-img height="100%" position="60%" src="@/assets/img/dashboard/navigation.png" />
    </template>

    <div class="bar__logo">
      <s-icon class="bar__icon--touchpoint-icon">touchpoint-icon</s-icon>
      <s-icon class="bar__icon--touchpoint">touchpoint</s-icon>
    </div>

    <div class="bar__nav">
      <v-list-item
        v-for="tab of tabs"
        :key="tab.label"
        class="bar__nav-item"
        :class="{'bar__nav-item--active': tab.label === activeTab}"
        link
        @click="onClick(tab.label)"
      >
        <v-list-item-icon>
          <s-icon v-if="tab.assetsIcon">{{ tab.icon }}</s-icon>
          <v-icon
            v-else
            class="material-icons-round"
            color="#currentColor"
            size="18"
          >
            {{ tab.icon }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ tab.label }}</v-list-item-title>
      </v-list-item>
    </div>

    <template v-slot:append>
      <div class="bar__nav mb-2">
        <v-list-item class="bar__nav-item px-0">
          <v-btn
            blocks
            class="font-weight-regular text-none"
            dark
            plain
            @click="toggleBar"
          >
            <v-list-item-icon>
              <v-icon v-if="miniVariant" class="material-icons-round" color="#currentColor">menu</v-icon>
              <s-icon v-else>menu-open</s-icon>
            </v-list-item-icon>
            <v-list-item-title>Collapse menu</v-list-item-title>
          </v-btn>
        </v-list-item>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'AppBar',
  data: () => ({
    miniVariant: false,
    activeTab: 'Tickets',
    tabs: [
      { link: '#', icon: 'home', label: 'Home' },
      { link: '#', icon: 'question_answer', label: 'Messenger' },
      { link: '#', icon: 'email', label: 'Tickets' },
      { link: '#', icon: 'campaign', label: 'Campaigns', assetsIcon: true },
      { link: '#', icon: 'group', label: 'Contacts' },
      { link: '#', icon: 'inventory', label: 'Tasks', assetsIcon: true },
      { link: '#', icon: 'deals', label: 'Deals', assetsIcon: true },
      { link: '#', icon: 'folder', label: 'Files' },
      { link: '#', icon: 'automations', label: 'Automations', assetsIcon: true },
      { link: '#', icon: 'poll', label: 'Reports' },
    ],
  }),
  methods: {
    onClick(tabLabel) {
      this.activeTab = tabLabel;
    },
    toggleBar() {
      this.miniVariant = !this.miniVariant;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/core/_utils.scss";
@import "@/assets/scss/core/_variables.scss";

#app-bar {
  .bar__logo {
    display: flex;
    align-items: center;
    padding: 18px 8px 18px 24px;
  }
  .bar__icon--touchpoint-icon {
    width: 18px;
    height: 18px;
    margin-right: 6px;
    color: map-get($dashboard, "logo");
  }
  .bar__icon--touchpoint {
    width: 86px;
    height: 18px;
    color: #ffffff;
  }
  .bar__nav {
    display: flex;
    flex-flow: column;
    padding-right: 8px;
    padding-left: 8px;
  }
  .v-list-item {
    min-height: 44px;

    &:hover:before {
      border-radius: 8px;
    }
  }
  .bar__nav-item {
    color: map-get($dashboard, "nav-item");
    border-radius: 8px;

    .v-icon {
      color: currentColor;
    }
    .v-btn__content {
      opacity: 1;
      letter-spacing: 0;
      text-align: left;
      color: map-get($dashboard, "nav-item");
    }
    .v-list-item__icon {
      flex-shrink: 0;
      align-self: unset;
      min-width: 16px;
      margin: 0 17px 0 0;
    }
  }
  .bar__nav-item--active {
    color: #ffffff;
  }
}
</style>
