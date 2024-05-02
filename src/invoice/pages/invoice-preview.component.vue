<script>
export default {
  data() {
    return {
      invoice: {
        issue_date: '',
        number: '',
        total: '',
        details: []
      },
      company: {
        name: '',
        address: '',
        phone: '',
        email: '',
        logo_url: ''
      },
      clients: {
        name: '',
        email: '',
        phone: ''
      }
    };
  },
  methods: {
    getTotalAmount() {
      // Aquí deberías implementar la lógica para calcular el total
    },
    onCancel() {
      this.$router.go(-1);
    }
  }
};
</script>

<template>
  <div class="container-invoice-preview">
    <div class="content-invoice-preview">
      <div class="information-invoice">
        <div class="pvc-informaction">
          <div class="pvc-title">
            <h1>Invoice</h1>
          </div>
          <div class="pvc-information-invoice">
            <p>Issue Date: {{invoice.issue_date}}</p>
          </div>
          <div class="pvc-information-invoice">
            <p>Invoice Number: {{invoice.number}}</p>
          </div>
          <div class="pvc-information-invoice">
            <p>Total amount: S/.{{invoice.total}} </p>
          </div>
        </div>
        <div class="company-image">
          <img :src="company.logo_url" alt="Logo de la compañía">
        </div>
      </div>
      <div class="users-informations">
        <div class="company-information">
          <p>From</p>
          <p>{{company.name}}</p>
          <p>{{company.address}}</p>
          <p>{{company.phone}}</p>
          <p>{{company.email}}</p>
        </div>
        <div class="client-information">
          <p>Invoice to</p>
          <p>Nombre: {{clients.name}}</p>
          <p>Correo: {{clients.email}}</p>
          <p>Number: {{clients.phone}}</p>
        </div>
      </div>
      <div class="details-invoices">
        <table v-if="invoice.details">
          <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="detail in invoice.details" :key="detail.id">
            <td>{{detail.description}}</td>
            <td>S./{{detail.amount}}</td>
          </tr>
          <tr>
            <td><strong>Total</strong></td>
            <td><strong>S./{{getTotalAmount()}}</strong></td>
          </tr>
          </tbody>
        </table>
        <button @click="onCancel">Volver</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-invoice-preview {
  background-color: #181a27;
  height: 1200px;
  display: flex;
  justify-content: center;
}

.content-invoice-preview {
  width: 80%;
  margin-top: 100px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  background-color: #6A90A9;
  border-radius: 20px;

}

.information-invoice {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.pvc-informaction {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: start;

}

.company-image {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.company-image img{
  width: 60%;
}

.pvc-title h1{
  font-size: 40px;
  color: white;
}

.pvc-information-invoice {
  margin-top: 20px;
  width: 300px;
  height: 50px;
  color: white;
  background-color: #406378;
  display: flex;
  align-items: center;
  justify-content: start;
  border-radius: 15px;
}

.pvc-information-invoice p{
  margin-left: 10px;
  font-size: 20px;
}

.users-informations {
  width: 100%;
  margin-top: 20px;
  display: flex;
}

.company-information {
  width: 50%;
  color: white;
}

.client-information {
  width: 50%;
  color: white;
  display: flex;
  flex-direction: column;
}

.details-invoices {
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.details-invoices table{
  width: 100%;
  background-color: white;
}

.details-invoices thead th {
  background-color: #406378;
  color: white;
  text-align: left;
  padding: 10px;
}

.details-invoices tbody td {
  padding: 10px;
  border: 1px solid #ccc;
}

.details-invoices tbody tr:hover {
  background-color: #f5f5f5;
}

.details-invoices button {
  margin-top: 20px;
  width: 50%;
  padding: 10px;
  background-color: #406378;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.details-invoices button:hover {
  background-color: #305260;
}
</style>