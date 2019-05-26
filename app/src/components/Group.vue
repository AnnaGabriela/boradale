<template>
  <div class="group">
    <b-card :title="title">
      <b-card-text>
        <span><b>Saída:</b> {{ start }}</span><br>
        <span><b>Chegada:</b> {{ end }}</span><br>
        <span><b>{{ amountPeople }} pessoas vão dale</b></span>
      </b-card-text>
      <b-button v-show="hasButton" class="button" href="#">Participar deste grupo</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    start: String,
    end: String,
    amountPeople: Number,
    hasButton: Boolean,
  },
};
</script>

<style>
.group {
  width: 100%;
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
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 3px;
}

.card-text {
  text-align: left;
  font-size: 12px;
}
</style>
