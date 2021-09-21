<template>
  <div>
    <tickets-header class="mb-5" />
    <div class="d-flex">
      <tickets-body class="tickets-body" />
      <tickets-aside class="tickets-aside" />
    </div>
  </div>
</template>

<script>
import TicketsHeader from '@/components/pages/tickets/TicketsHeader.vue';
import TicketsBody from '@/components/pages/tickets/TicketsBody.vue';
import TicketsAside from '@/components/pages/tickets/TicketsAside.vue';

export default {
  name: 'Tickets',
  components: {
    TicketsHeader,
    TicketsBody,
    TicketsAside,
  },
};
</script>

<style lang="scss">
.tickets-body {
  flex-grow: 1;
  margin-right: 20px;
}
.tickets-aside {
  max-width: 390px;
  width: 100%;
}
</style>
