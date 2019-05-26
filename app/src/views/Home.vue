<template>
  <div class="home views">
    <h1 class="hello">Olá, {{ username }}!</h1>
    <b-form class="district">
      <b-dropdown id="dropdown-1" text="Escolha o bairro" variant="outline-danger" class="m-md-2">
        <b-dropdown-item @click="getGroups('Recife Antigo')">Recife Antigo</b-dropdown-item>
        <b-dropdown-item @click="getGroups('Rosarinho')">Rosarinho</b-dropdown-item>
      </b-dropdown>
    </b-form>
    <p v-show="hasGroups"><b>Grupos na sua área</b></p>
    <ul class="list">
      <li v-for="group in groups" v-bind:key="group.id">
        <Group :title="group.name" :start="group.start"
               :end="group.end"  :amountPeople="group.riders.length" />
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
  methods: {
    getGroups(district) {
      this.$http.get(`/listRides?district=${district}`)
        .then((res) => {
          this.hasGroups = true;
          this.groups = res.data;
        }).catch(err => err);
    },
  },
  data() {
    return {
      username: 'Renata',
      groups: [],
      hasGroups: false,
    };
  },
};

</script>

<style scoped>
.hello {
  font-size: 25px;
  text-align: left;
  font-weight: 400;
}

.district {
  margin: 10px auto 20px;
  display: block;
}
</style>
