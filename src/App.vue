<template>
  <dashboard-layout>
    <tickets />
  </dashboard-layout>
</template>

<script>
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import Tickets from '@/pages/Tickets.vue';

export default {
  name: 'App',
  components: {
    DashboardLayout,
    Tickets,
  },
};
</script>

<style lang="scss" src="@/assets/scss/index.scss">
</style>
