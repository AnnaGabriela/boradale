<template>
  <div class="group">
    <b-card :title="title">
      <b-card-text>
        With supporting text below as a <br>
        natural lead-in to additional content.
      </b-card-text>
      <b-button class="button" href="#">Participar deste grupo</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.group {
  width: 90%;
  display: block;
  margin: auto;
}

.button {
  float: right;
}

.btn.button.btn-secondary {
  background-color: #ED4848;
  font-size: 15px;
}

.card-title {
  text-align: left;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 50%;
}

.card-text {
  text-align: left;
  font-size: 12px;
}
</style>
