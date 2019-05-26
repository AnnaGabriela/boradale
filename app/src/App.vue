<template>
  <div id="app">
    <TopBar/>
    <router-view/>
    <BottomBar/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
  color: #2c3e50;
}

.views {
  padding: 30px;
  height: 80vh;
}

ul {
  padding: 0;
  list-style: none;
}
</style>

<script>
import TopBar from '@/components/TopBar.vue';
import BottomBar from '@/components/BottomBar.vue';

export default {
  components: {
    TopBar,
    BottomBar,
  },
};

</script>
