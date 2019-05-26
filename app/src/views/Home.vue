<template>
  <div class="home">
    <!-- <h1 class="hello">Olá, Renata!</h1>
    <Group :title="title"/> -->
    <Profile/>
  </div>
</template>

<style>
.hello {
  font-size: 25px;
  text-align: left;
}
</style>


<script>
import Group from '@/components/Group.vue';
import Profile from '@/components/Profile.vue';

export default {
  name: 'home',
  components: {
    Group,
    Profile,
  },
  data() {
    return {
      title: 'PADARIA ROSARINHO',
    };
  },
};
</script>
