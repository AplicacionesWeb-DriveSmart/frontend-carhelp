<script>
export default {
  name: "spare-part-card",
  props: {
    sparepart: null,

  },
  data() {
    return {
      drawer: false
    }
  },
}
</script>
<template>
  <pv-card>
    <template #content>
      <div class="spare-part-card">
        <img :src="sparepart.image" alt="spare-part image" width="300px">
        <h1>Name: {{ sparepart.name }}</h1>
        <pv-button label="MORE" @click="drawer = true" class="more" ></pv-button>
        <pv-dialog v-model:visible="drawer">
          <pv-card>
            <template #content>
              <div class="spare-part-card2">
                <img :src="sparepart.image" alt="spare-part image" width="300px">
                <h1>Name: {{ sparepart.name }}</h1>
                <p>Description: {{ sparepart.description }}</p>
                <p>Price: {{ sparepart.price }}</p>
                <p>Quantity: {{ sparepart.quantity }}</p>
              </div>
            </template>
          </pv-card>
        </pv-dialog>
      </div>
    </template>
  </pv-card>
</template>

<style>
.more {
  padding: 10px 10px; /* Adjust padding to increase button size */
  font-size: 30px; /* Increase font size */
  border: none;
  background-color: black !important; /* Button background color */
  color: white !important; /* Button text color */
  cursor: pointer;
  border-radius: 8px; /* Rounded corners */
  transition: background-color 0.3s ease;
}
.spare-part-card {
  background-color: gray;
  padding: 20px;
  max-width: 500px;
}
.spare-part-card2 {
  background-color: gray;
  padding: 20px;
  max-width: 1000px;
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