<template>
  <v-app>
    <AppBar />
  </v-app>
</template>

<script>
import AppBar from '@/components/dashboard/AppBar.vue';

export default {
  name: 'DashboardLayout',
  components: {
    AppBar,
  },
};
</script>
