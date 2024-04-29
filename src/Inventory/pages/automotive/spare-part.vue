<script>
export default {
  name: "spare-part-card",
  props: {
    sparepart: null
  }
}
</script>
<template>
  <pv-card>
    <template #content>
      <div class="spare-part-card">
        <img :src="sparepart.image" alt="spare-part image" >
        <h1>Name: {{ sparepart.name }}</h1>
        <p>Author: {{ sparepart.description }}</p>
        <p>Width: {{ sparepart.price }}</p>
        <p>Height: {{ sparepart.quantity }}</p>
      </div>
    </template>
  </pv-card>
</template>

<style>
.spare-part-card {
  background-color: gray;
  padding: 20px;
}
.spare-part-card img {
  max-width: 100%;
}

@media (max-width: 600px) {
  .spare-part-card {
    margin: 10px auto;
    padding: 10px;
  }
  .spare-part-card img {
    max-width: 100%;
  }
}
</style>