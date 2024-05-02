<script>
import SparePart from "../../model/spare-part.entity.js";
import SparePartCard from "./spare-part.vue";
import {InventoryService} from "../../../carhelp/services/inventory.service.js";

export default {
  name: "inventory-content",
  components: {SparePartCard, SparePart},
  data() {
    return {
      spareparts: [],
      errors: [],
      inventoryService: new InventoryService()
    }
  },
  created() {
    this.getSpareParts();
  },
  methods: {
    getSpareParts() {
      this.inventoryService.getAll()
          .then(response => {
            this.spareparts = response.data
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
  <div class="header-container">
    <h1 class="title">Products Catalog</h1>
  </div>
  <div class="spareparts-container">
    <!-- Bucle v-for para mostrar las tarjetas en la cuadrícula -->
    <div v-for="sparepart in spareparts" :key="sparepart.id">
      <spare-part-card :sparepart="sparepart"></spare-part-card>
    </div>
  </div>
</template>

<style>
/* Establecer una cuadrícula con 4 columnas */
.spareparts-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Crea 4 columnas iguales */
  gap: 20px; /* Espacio entre las tarjetas */
}
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
.title {
  color: white;
  margin: 0;
}
</style>