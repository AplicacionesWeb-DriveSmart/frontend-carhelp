<script>
  import {VehicleService} from "../../carhelp/services/vehicle.service.js";
  import VehicleCard from "./vehicle-card.component.vue";
  import Vehicle from "../model/vehicle.entity.js";

  export default {
    name: "vehicle-list-content",
    components:{VehicleCard, Vehicle},
    data(){
      return  {
        vehicles: [],
        erros: [],
        vehicleService: new VehicleService()
      }
    },
    created() {
      this.getVehicles();
    },
    methods: {
      getVehicles(){
        this.vehicleService.getAll()
            .then(response => {
              this.vehicles = response.data.flatMap(client=>client.vehicle)
              console.log(response.data.flatMap(client=>client.vehicle))
            })
            .catch(e => {
              this.errors.push(e);
            });
      }
    }
  }
</script>

<template>
  <div v-for="vehicle in vehicles">
    <vehicle-card :vehicle="vehicle"></vehicle-card>
  </div>
</template>

<style scoped>

</style>