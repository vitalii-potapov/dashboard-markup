<template>
  <v-app>
    <Drawer />
    <AppBar />
  </v-app>
</template>

<script>
import AppBar from '@/components/dashboard/AppBar.vue';
import Drawer from '@/components/dashboard/Drawer.vue';

export default {
  name: 'DashboardLayout',
  components: {
    AppBar,
    Drawer,
  },
};
</script>
