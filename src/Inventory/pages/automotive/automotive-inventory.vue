<script>
import SparePart from "../../model/spare-part.entity.js";
import SparePartCard from "./spare-part.vue";

export default {
  name: "inventory-content",
  components: {SparePartCard, SparePart},
  props: {
    spareparts: Array
  }
}
</script>
<template>
  <div v-for="sparepart in spareparts">
    <spare-part-card :sparepart="sparepart"></spare-part-card>
    <hr>
    <hr>
  </div>
</template>
<style>
</style>