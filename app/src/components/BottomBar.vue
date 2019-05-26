<template>
  <div>
    <div class="phone-viewport">
      <md-bottom-bar md-sync-route>
        <md-bottom-bar-item to="/" exact md-label="Home" md-icon="home"></md-bottom-bar-item>
        <md-bottom-bar-item to="/grupos" md-label="Grupos" md-icon="people"></md-bottom-bar-item>
        <md-bottom-bar-item to="/perfil" md-label="Perfil" md-icon="person"></md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BarRouter',
};
</script>

<style scoped>
  .phone-viewport {
    width: 322px;
    display: inline-flex;
    align-items: flex-end;
    overflow: hidden;
    border: 1px solid rgba(#000, .26);
    background: rgba(#000, .06);
  }

  @media screen and (min-width: 720px) {
    .phone-viewport {
      width: 100%;
    }
  }
</style>
