<template>
  <div class="startform">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Local de destino:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.end"
          type="end"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Local de partida:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.start"
          type="start"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Data:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.date"
          type="date"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" label="Horário:" label-for="input-4">
        <b-form-select
          id="input-4"
          v-model="form.time"
          type="time"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" class="button">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        end: '',
        start: '',
        date: '',
        time: '',
      },
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.end = '';
      this.form.start = '';
      this.form.date = '';
      this.form.time = '';
      // Trick to reset/clear native browser form validation state
      this.show = false;
    },
  },
};
</script>

<style>
.startform {
    width: 90%;
    display: block;
    margin: auto;
}
</style>
