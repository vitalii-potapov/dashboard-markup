<template>
  <div>
    <tickets-header />
    <tickets-body />
    <tickets-list />
    <tickets-aside />
  </div>
</template>

<script>
import TicketsHeader from '@/components/pages/tickets/TicketsHeader.vue';
import TicketsBody from '@/components/pages/tickets/TicketsBody.vue';
import TicketsList from '@/components/pages/tickets/TicketsList.vue';
import TicketsAside from '@/components/pages/tickets/TicketsAside.vue';

export default {
  name: 'Tickets',
  components: {
    TicketsHeader,
    TicketsBody,
    TicketsList,
    TicketsAside,
  },
};
</script>
