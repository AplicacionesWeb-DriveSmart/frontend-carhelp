<template>
  <div class="container-add-invoice">
    <div class="content-add-invoice">
      <div class="day-random">
        <p id="date">Actual Date: {{ today }}</p>
        <p id="random">Invoice Number: {{ randomWord }}</p>
      </div>
      <div class="content-forms-invoice">
        <div class="inputs-invoice">
          <label>Switch Client: </label>
          <select v-model="selectedClient" @change="onClientChange()">
            <option v-for="client in clients" :key="client.id" :value="client">{{ client.name }}</option>
          </select>
        </div>
        <div class="inputs-invoice" v-if="selectedClient">
          <label>Client Vehicles:</label>
          <select v-model="selectedVehicles">
            <option :value="selectedClient.vehicle">{{ selectedClient.vehicle.make }}</option>
          </select>
        </div>
        <div class="inputs-invoice">
          <label>RUC:</label>
          <input type="text" placeholder="Type RUC">
        </div>
      </div>
      <div class="content-table-invoice">
        <p>Enter the data of each service, description and unit value. When finished, select the “Invoice Completed” button.</p>
        <table border="1">
          <thead>
          <tr>
            <th>Service</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(service, i) in services" :key="i">
            <td><input type="text" v-model="service.name" placeholder="Service Name"></td>
            <td><input type="text" v-model="service.description" placeholder="Description"></td>
            <td><input type="number" v-model="service.price" placeholder="Price"></td>
            <td><button @click="removeService(i)">Remove</button></td>
          </tr>
          </tbody>
        </table>
        <br>
        <button @click="addService">Add Service</button>
      </div>
      <div class="confirm-buttom">
        <button @click="onCancel">Cancel</button>
        <button>Invoice Complete</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      today: new Date().toLocaleDateString(),
      randomWord: '', // Aquí puedes generar tu palabra aleatoria
      selectedClient: null,
      selectedVehicles: null,
      clients: [], // Aquí puedes agregar tus clientes
      services: [] // Aquí puedes agregar tus servicios
    };
  },
  methods: {
    onClientChange() {
      if (this.selectedClient) {
        this.getVehiclesByClientId(this.selectedClient.id)
            .then(data => this.selectedVehicles = data);
      }
    },

    addService() {
      this.services.push({ name: '', description: '', price: 0 });
    },
    removeService(index) {
      this.services.splice(index, 1);
    },
    onCancel() {
      this.$router.go(-1);
    },
  }
}
</script>

<style scoped>
.container-add-invoice {
  border: 1px solid black;
  width: 100%;
  display: flex;
  height: 100vh;
  justify-content: center;
  background-color: #181a27;
}

.content-add-invoice {
  width: 80%;
  border: 1px solid black;
  margin-top: 20px;
  background-color: #002e43;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.day-random {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.day-random #date {
  margin-left: 20px;
}

.day-random #random {
  margin-right: 20px;
}

.day-random  p{
  font-size: 25px;
  color: white;
}

.content-forms-invoice {
  width: 100%;
  display: flex;
  margin-top: 100px;
}

.inputs-invoice {
  margin-left: 20px;
  display: flex;
  color: white;
}

.inputs-invoice label {
  margin-right: 10px; /* Ajusta este valor según tus necesidades */
}

.content-table-invoice {
    width: 80%;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
}

.content-table-invoice table thead th {
    background-color: black;
    color: white;
}

.content-table-invoice table tbody tr {
    background-color: #f2f2f2;
}

.content-table-invoice button {
  background-color: #f2f2f2;
  color: black;
}

.confirm-buttom {
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: end;
}

.confirm-buttom button {
  margin-right: 20px;
  margin-bottom: 20px;
  background-color: #f2f2f2;
  color: black;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>