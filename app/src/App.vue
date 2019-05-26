<template>
  <div id="app">
    <TopBar/>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
  color: #2c3e50;
}
</style>

<script>
import TopBar from '@/components/TopBar.vue';

export default {
  components: {
    TopBar,
  },
};

</script>
