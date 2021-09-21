<template>
  <div class="list">
    <base-card
      v-for="item of items"
      :key="item.id"
      v-bind="item"
      class="list-item"
    />
  </div>
</template>

<script>
import BaseCard from './Card.vue';

export default {
  name: 'BaseList',
  components: {
    BaseCard,
  },
  props: {
    items: {
      type: Array,
      default: () => [
        {
          id: 1,
          firstName: 'Franklin',
          lastName: 'Stewart',
          title: 'Product demo call with Ruth',
          text: 'Please call and explain the customer about our product and answer.',
          topRightLabel: { label: 'Due today', color: 'orange' },
          tags: [
            { label: 'Task', icon: 'hight-priority' },
            { label: 'Meeting' },
          ],
          chips: [
            { label: 'Open', color: 'yellow' },
          ],
        },
        {
          id: 2,
          firstName: 'Jenny',
          lastName: 'Wilson',
          title: 'Key client yearly offer',
          text: 'Hello {First name}, Thank you for being our loyal customer. In this email we would...',
          tags: [
            { label: 'Deal' },
            { label: '$400K' },
          ],
          chips: [
            { label: 'Negotiation', color: 'purple' },
          ],
        },
        {
          id: 3,
          firstName: 'Franklin',
          lastName: 'Stewart',
          title: 'Product demo call with Ruth',
          text: 'Please call and explain the customer about our product and answer.',
          topRightLabel: { label: 'Due today', color: 'orange' },
          tags: [
            { label: 'Task', icon: 'hight-priority' },
            { label: 'Meeting' },
          ],
          chips: [
            { label: 'Open', color: 'yellow' },
          ],
        },
        {
          id: 4,
          firstName: 'Jenny',
          lastName: 'Wilson',
          title: 'Harrison & Co Summer Order',
          text: 'Please call and explain the customer about our product and answer.',
          tags: [
            { label: 'Task', icon: 'hight-priority' },
            { label: 'Meeting' },
          ],
          chips: [
            { label: 'Open', color: 'yellow' },
          ],
        },
      ],
    },
  },
};
</script>

<style lang="scss" scoped>
.list-item:not(:last-child) {
  margin-bottom: 12px;
}
</style>
