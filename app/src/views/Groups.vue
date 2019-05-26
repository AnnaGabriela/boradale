<template>
  <div class="groups views">
    <h1>Grupos</h1><br>
    <ul class="list">
      <li v-for="group in groups" v-bind:key="group.id">
        <Group :title="group.name" :start="group.start"
               :end="group.end"  :amountPeople="group.riders.length"  :hasButton="false"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Group from '@/components/Group.vue';

export default {
  components: {
    Group,
  },
  created() {
    this.$http.get(`/listMyRides?username=${this.username}`)
      .then((res) => {
        this.hasGroups = true;
        this.groups = res.data;
      }).catch(err => err);
  },
  data() {
    return {
      username: 'annagabriela',
      groups: [],
      hasGroups: false,
    };
  },
};

</script>

<style scoped>

</style>
