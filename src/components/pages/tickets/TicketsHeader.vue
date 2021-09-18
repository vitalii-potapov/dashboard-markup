<template>
  <div id="tickets-header" class="tickets-header">
    <div class="tickets-header__bg" :style="`background-image: url('${require('@/assets/img/pages/tickets/bg.jpg')}')`" />
    <div class="tickets-header__nav-panel">
      <s-btn class="tickets-header__back" small text>
        <v-icon size="14">
          chevron_left
        </v-icon>
        Back to tickets
      </s-btn>
      <div>
        <span class="mr-1">1 of 22 tickets</span>
        <s-btn icon small><v-icon size="18">chevron_left</v-icon></s-btn>
        <s-btn icon small><v-icon size="18">chevron_right</v-icon></s-btn>
      </div>
    </div>
    <div class="tickets-header__content">
      <div class="tickets-header__page-icon">
        <v-icon class="material-icons-round" color="#currentColor" size="40">
          email
        </v-icon>
      </div>
      <div class="tickets-header__title">
        How to connect PayPal?
      </div>
      <ul class="tickets-header__info">
        <li class="tickets-header__info-item">
          Christopher Crawford
        </li>
        <li class="tickets-header__info-item">
          <a href="mailto:christopher@corp.com">
            christopher@corp.com
          </a>
        </li>
        <li class="tickets-header__info-item">
          Yesterday 12:22 am
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TicketsHeader',
  props: {
    bgImg: {
      type: String,
      default: 'assets/img/pages/tickets/bg.jpg',
    },
  },
  computed: {
    // bgSrc() {
    //   // eslint-disable-next-line import/extensions, import/no-unresolved, global-require
    //   return `${)}${this.bgImg}`;
    // },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/core/_variables.scss";

#tickets-header {
  &.tickets-header {
    position: relative;
    height: 240px;
  }

  .tickets-header__bg {
    position: absolute;
    inset: 0;
    border-radius: 4px;
    background-position: center;
    background-size: cover;
  }

  .tickets-header__content {
    position: relative;
    display: flex;
    align-items: center;
    flex-flow: column;
    padding: 16px 32px;
  }

  .tickets-header__nav-panel {
    position: absolute;
    top: 21px;
    left: 13px;
    right: 27px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: map-get($text, "base");

    .s-btn .v-ripple__container {
      color: #bdcebd;
    }
    .v-btn--icon.v-size--small {
      width: 20px;
      height: 20px;
    }
  }

  .tickets-header__back {
    font-size: inherit;
    color: inherit;
    &:hover {
      color: map-get($text, "strong");
    }
    &:before {
      background-color: #bdcebd;
    }

    .v-ripple__container {
      color: #bdcebd;
    }
  }

  .tickets-header__page-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    margin-bottom: 8px;
    border-radius: 50%;
    background-color: #bdcebd;

    .v-icon {
      color: #ffffff;
    }
  }

  .tickets-header__title {
    font-size: 20px;
    font-weight: 500;
    color: map-get($text, "strong");
  }

  .tickets-header__info {
    display: flex;
    font-size: 14px;
    color: map-get($text, "strong");
    list-style-type: none;
  }

  .tickets-header__info-item {
    display: flex;
    align-items: center;
    &:not(:last-child):after {
      content: "";
      display: block;
      width: 3px;
      height: 3px;
      margin-right: 10px;
      margin-left: 10px;
      border-radius: 50%;
      background-color: map-get($colors, "gray");
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }
}
</style>
