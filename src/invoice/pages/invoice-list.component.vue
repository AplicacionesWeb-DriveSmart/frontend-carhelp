<script>
import {InventoryService} from "../../carhelp/services/inventory.service.js";
import {InvoiceService} from "../../carhelp/services/invoice.service.js";
import InvoiceCard from "./invoice-card.component.vue";

export default {
  name:'invoice-list',
  components: {InvoiceCard},
  data() {
    return {
      invoices:[],
      errors: [],
      invoiceServices: new InvoiceService()
    }
  },
  created() {
    this.getInvoices();
  },
  methods: {
    getInvoices(){
      this.invoiceServices.getAll()
          .then(response => {
            this.invoices = response.data.flatMap(client => client.invoices);
            console.log(response.data.flatMap(client => client.invoices));
          })
    },

    addInvoice(){
      this.$router.push('/add-invoice');
    }


  }
}
</script>

<template>
  <div class="container-invoice-list">
    <div class="title-invoice-list">
      <h1>Invoice List</h1>
    </div>
    <div class="content-invoice-list">
      <div class="add-event">
        <button @click="addInvoice()">Add</button>
      </div>
      <div class="content-search">
        <div class="search-list">
          <p>Invoice ID</p>
          <p>Invoice Date</p>
          <p>Amount</p>
          <p>Status</p>
          <input type="text" placeholder="Type">
        </div>
      </div>
      <div class="view-list">
        <invoice-card/>
      </div>
    </div>
  </div>
</template>

<style>


invoice-card {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title-invoice-list h1{
  color: white;
  margin-top: 20px;
  font-size: 40px;
}

.container-invoice-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.content-invoice-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:#002e43 ;
  width: 80%;
  height: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.content-search{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:#002e43 ;
}

.search-list {
  display: flex;
  height: 100px;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  background-color: #6A90A9;
  color: white;
  border-radius: 10px;
}

.search-list input {
  background-color: #f1f1f1;
  color: #406378;
  border: none;
  width: 80px;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.search-list p {
  margin-left: 10px;
  margin-right: 50px;
  background-color: #6A90A9;
}

.view-list {
  transform: translateX(10%);
  width: 100%;

}

.add-event {
  width: 80%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 20px;
  background-color:#002e43 ;
}

.add-event button{
  background-color: black;
  height: 50px;
  width: 100px;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 10px;
  cursor: pointer;
}
</style>