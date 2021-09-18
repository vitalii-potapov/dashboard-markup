<template>
  <v-navigation-drawer
    id="drawer"
    height="100%"
    :mini-variant="internalMiniVariant"
    mini-variant-width="68"
    permanent
    width="200"
  >
    <template #img>
      <v-img
        class="drawer__bg"
        height="100%"
        position="left top"
        src="@/assets/img/dashboard/navigation.jpg"
      />
    </template>

    <div class="drawer__logo">
      <s-icon class="drawer__icon--touchpoint-icon">touchpoint-icon</s-icon>
      <s-icon class="drawer__icon--touchpoint">touchpoint</s-icon>
    </div>

    <div class="drawer__nav">
      <v-list-item
        v-for="tab of tabs"
        :key="tab.label"
        class="drawer__nav-item"
        :class="{'drawer__nav-item--active': tab.label === internalActiveTab}"
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
      <div class="drawer__toggle">
        <v-list-item class="drawer__toggle-item">
          <s-btn
            class="drawer__toggle-btn"
            dark
            plain
            @click="toggleBar"
          >
            <v-list-item-icon>
              <s-icon v-if="internalMiniVariant" key="close">menu</s-icon>
              <s-icon v-else key="open">menu-open</s-icon>
            </v-list-item-icon>
            <v-list-item-title>Collapse menu</v-list-item-title>
          </s-btn>
        </v-list-item>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Drawer',
  props: {
    miniVariant: {
      type: Boolean,
      default: false,
    },
    activeTab: {
      type: String,
      default: 'Tickets',
    },
    tabs: {
      type: Array,
      default: () => [
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
    },
  },
  data: (vm) => ({
    internalMiniVariant: vm.miniVariant,
    internalActiveTab: vm.activeTab,
  }),
  methods: {
    onClick(tabLabel) {
      this.internalActiveTab = tabLabel;
      this.$emit('update:active-tab', this.internalActiveTab);
    },
    toggleBar() {
      this.internalMiniVariant = !this.internalMiniVariant;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/core/_variables.scss";

#drawer {
  &.v-navigation-drawer--mini-variant {
    .drawer__nav-item > :first-child,
    .drawer__toggle-item,
    .drawer__toggle-btn .v-list-item__icon {
      margin: 0;
    }
    .v-list-item {
      justify-content: unset;
    }
    .drawer__icon--touchpoint-icon {
      color: map-get($dashboard, "nav-item");
    }
    .drawer__icon--touchpoint,
    .drawer__toggle-btn .v-list-item__title {
      position: absolute !important;
      display: initial;
      clip: rect(1px,1px,1px,1px);
      overflow: hidden;
    }
  }

  .drawer__bg .v-image__image {
    background-size: initial;
    background-repeat-y: repeat;
  }

  .drawer__logo {
    display: flex;
    align-items: center;
    padding: 18px 8px 18px 24px;
  }

  .drawer__icon--touchpoint-icon {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    margin-right: 6px;
    color: map-get($dashboard, "logo");
    transition: $default-transition;
  }

  .drawer__icon--touchpoint {
    flex-shrink: 0;
    width: 86px;
    height: 18px;
    color: #ffffff;
  }

  .drawer__nav {
    display: flex;
    flex-flow: column;
    padding-right: 8px;
    padding-left: 8px;
  }

  .v-list-item {
    min-height: 44px;
    padding: 0 17px;

    &:hover:before {
      border-radius: 8px;
    }
  }

  .drawer__toggle {
    margin-bottom: 8px;
    padding-right: 8px;
    padding-left: 8px;
  }

  .drawer__nav-item,
  .drawer__toggle-item {
    color: map-get($dashboard, "nav-item");
    border-radius: 8px;

    .v-icon {
      color: currentColor;
    }
    .v-btn__content {
      opacity: 1;
      color: map-get($dashboard, "nav-item");
    }
    .v-list-item__icon {
      flex-shrink: 0;
      align-self: unset;
      min-width: 18px;
      margin: 0 17px 0 0;
    }
  }

  .drawer__toggle-item {
    padding-right: 0;
    padding-left: 0;
    &:before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0;
    pointer-events: none;
    background-color: currentColor;
    transition: .3s cubic-bezier(.25,.8,.5,1);
  }
    &:hover:before {
      opacity: 0.04;
    }
  }

  .drawer__toggle-btn  {
    width: 100%;
    min-width: unset;
    height: 44px;
    padding: 0 17px;
    text-align: left;
    border-radius: 8px;
  }

  .drawer__nav-item--active {
    color: #ffffff;
  }
}
</style>
