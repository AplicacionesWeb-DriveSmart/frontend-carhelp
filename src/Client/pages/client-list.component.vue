<script>
import Client from "../model/client.entity.js";
import ClientCard from "./client-card.component.vue";
import {ClientService} from "../../carhelp//services/client.service.js";

export default {
  name: "client-content",
  components: {ClientCard, Client},
  data() {
    return {
      clients:[],
      errors: [],
      clientService: new ClientService()
    }
  },
  created() {
    this.getClients();
  },
  methods: {
    getClients() {
      this.clientService.getAll()
          .then(response => {
            this.clients = response.data
            console.log(response.data)
          })
          .catch(e => {
            this.errors.push(e);
          });
    },
  }
}
</script>
<template>
  <div class="div">
    <div class="div-2">
      <div class="div-3">
        <div class="div-4">Client list</div>
        <div class="div-5"><router-link to="/add"><button>Add client</button></router-link></div>
      </div>
      <div v-for="client in clients" :key="client.id">
        <client-card :clients="[client]"></client-card>
      </div>
    </div>
  </div>
</template>

<style>

.div {
  background-color: #181a27;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 66px 60px 0;
}
@media (max-width: 991px) {
  .div {
    padding: 0 20px;
  }
}
.div-2 {
  background-color: #406378;
  display: flex;
  width: 100%;
  max-width: 1418px;
  flex-direction: column;
  padding: 80px 70px;
}
@media (max-width: 991px) {
  .div-2 {
    max-width: 100%;
    padding: 0 20px;
  }
}
.div-3 {
  display: flex;
  margin-top: 70px;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-3 {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
  }
}
.div-4 {
  color: #000;
  flex-grow: 1;
  flex-basis: auto;
  font: 500 80px Roboto Mono, sans-serif;
}
@media (max-width: 991px) {
  .div-4 {
    max-width: 100%;
    font-size: 40px;
  }
}

@media (max-width: 991px) {
  .div-5 {
    padding: 0 20px;
  }
}

button{
  font-family: Roboto Mono, sans-serif;
  border-radius: 40px;
  background-color: #002e43;
  justify-content: center;
  padding: 22px 49px;
  color: #ffffff;

}

</style>
