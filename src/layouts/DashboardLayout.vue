<template>
  <v-app>
    <Drawer />
    <div class="layout-body flex-grow-1">
      <AppBar />
      <AppView />
    </div>
  </v-app>
</template>

<script>
import AppBar from '@/components/dashboard/AppBar.vue';
import Drawer from '@/components/dashboard/Drawer.vue';
import AppView from '@/components/dashboard/AppView.vue';

export default {
  name: 'DashboardLayout',
  components: {
    AppBar,
    Drawer,
    AppView,
  },
};
</script>
