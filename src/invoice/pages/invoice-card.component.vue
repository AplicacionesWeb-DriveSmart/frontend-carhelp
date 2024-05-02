<script>
import {InvoiceService} from "../../carhelp/services/invoice.service.js";
import {ClientService} from "../../carhelp/services/client.service.js";

export default {
  name:'invoice-card',
  data() {
    return {
      invoices:[],
      clients:[],
      errors: [],
      invoiceServices: new InvoiceService(),
      clientService: new ClientService()
    }
  },
  created() {
    this.getInvoices();
    this.getClients();
  },
  methods: {
    getInvoices(){
      this.invoiceServices.getAll()
          .then(response => {
            this.invoices = response.data.flatMap(client => client.invoices);
            console.log(response.data.flatMap(client => client.invoices));
          })
    },
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
    preview(clientId, numberId) {
      this.$router.push({ name: 'preview-invoice', params: { clientId: clientId, numberId: numberId } });
    }

  }
}
</script>

<template>

<div v-for="client of clients">
      <div v-for="invoice in client.invoices" :key="invoice.number" class="invoice-card-content">
        <p>{{ invoice.number }}</p>
        <p>{{ invoice.issue_date }}</p>
        <p>S/.{{ invoice.total }}</p>
        <p>Paid</p>
        <button @click="preview('1',invoice.number)">Ver</button>
      </div>
</div>





</template>

<style>
.invoice-card {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.invoice-card-content {
  display: flex;
  height: 50px;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  background-color: #406378;
  color: white;
  border-radius: 10px;
}

.invoice-card-content p {
  margin-left: 10px;
  margin-right: 50px;
}

.invoice-card button {
  background-color: #f1f1f1;
  color: #406378;
  border: none;
  width: 100px;
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 10px;
  cursor: pointer;
}

.invoice-card button:hover {
  background-color: #6A90A9;
  color: white;
}
</style>