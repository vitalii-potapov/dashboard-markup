<template>
  <div class="profile">
    <profile-header
      v-model="activeTab"
      :avatar="avatar"
      :link="link"
      :name="name"
    />
    <v-tabs-items class="profile__tabs flex-grow-1" :value="activeTab">
      <v-tab-item>
        <profile-details :details="details" />
      </v-tab-item>
      <v-tab-item>
        <div class="d-flex justify-center align-center py-10">
          In progress
        </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import ProfileHeader from './ProfileHeader.vue';
import ProfileDetails from './ProfileDetails.vue';

export default {
  name: 'Profile',
  components: {
    ProfileHeader,
    ProfileDetails,
  },
  props: {
    avatar: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: 'Christopher Crawford',
    },
    link: {
      type: Object,
      default: () => ({
        link: '#link',
        label: 'SalesForce',
        icon: '', // default north_east
      }),
    },
    details: {
      type: Array,
      default: () => [
        { label: 'ID', value: 480408, color: 'strong-darken' },
        { label: 'Status', value: { label: 'open', color: 'yellow' }, type: 'status' },
        { label: 'Assignee', value: 'Robert Overit', color: 'strong' },
        { label: 'Priority', value: 'High', icon: '', color: 'strong' },
        { label: 'Inbox', value: 'support@company.com', color: 'strong' },
        { label: 'Associated with', value: ['Daisy Moody'], type: 'associated' },
        { label: 'Due date', value: 'in 8 days', color: 'base' },
        { label: 'Followers', value: ['path', 'path', 'path', 'path'], type: 'followers' },
        { label: 'Tags', value: ['account', 'issue'], type: 'tags' },
      ],
    },
  },
  data: () => ({
    activeTab: 0,
  }),
};
</script>

<style lang="scss">
.profile {
  display: flex;
  flex-flow: column;
  min-height: 760px;
}

.profile__tabs {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>
