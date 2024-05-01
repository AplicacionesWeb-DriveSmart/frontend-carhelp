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
        <img :src="sparepart.image" alt="spare-part image" width="300px">
        <h1>Name: {{ sparepart.name }}</h1>
        <p>Description: {{ sparepart.description }}</p>
        <p>Price: {{ sparepart.price }}</p>
        <p>Quantity: {{ sparepart.quantity }}</p>
        <pv-button label="MORE" style="
            padding: 10px 10px; /* Adjust padding to increase button size */
            font-size: 30px; /* Increase font size */
            border: none;
            background-color: black; /* Button background color */
            color: white !important; /* Button text color */
            cursor: pointer;
            border-radius: 8px; /* Rounded corners */
            transition: background-color 0.3s ease;"></pv-button>
      </div>
    </template>
  </pv-card>
</template>

<style>
.spare-part-card {
  background-color: gray;
  padding: 20px;
  max-width: 500px;
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