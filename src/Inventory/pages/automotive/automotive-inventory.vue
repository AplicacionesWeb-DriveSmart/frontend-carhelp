<script>
import SparePart from "../../model/spare-part.entity.js";
import SparePartCard from "./spare-part.vue";
import {InventoryService} from "../../../carhelp/services/inventory.service.js";

export default {
  name: "inventory-content",
  components: {SparePartCard, SparePart},
  data() {
    return {
      spareparts:[],
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
  <h1 style="color:white;">Products Catalog</h1>
  <div v-for="sparepart in spareparts">
    <spare-part-card :sparepart="sparepart"></spare-part-card>
    <hr>
    <hr>
  </div>
</template>
<style>
</style>