<script>
  export default {
    props:{
      vehicle: null
    },
  }
</script>

<template>
  <div class="card-container-horizontal">
    <img src="" alt="vehicle image">
    <div class="cards">
      <v-card>
        <template #content>
          <p>Vehicle brand: {{vehicle.brand}}</p>
          <p>Model: {{vehicle.model}}</p>
          <p>Year of Manufacture: {{vehicle.manufacturing}}</p>
        </template>
      </v-card>
    </div>
  </div>
</template>

<style>
  .cards{
    border-radius: 400px;
    padding-left: 80px;
    margin-top: 15px;

  }

  .card-container-horizontal img{
    transform: translateX(50%);
    width: 70%;
    height: 30%;
    margin-top: 25px;
  }

  .card-container-horizontal{
    display: grid;
    width: 85%;
    height: 400px;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin: auto;
  }

</style>