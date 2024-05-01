<script>
import Register from './components/pages/register.component.vue'
import LoginForm from "./components/login/login.component.vue";
import Menu from './components/pages/menu.component.vue'
import ClientList from "./Client/pages/client-list.component.vue";
import ClientProfile from "./Client/pages/client-profile.component.vue";
import ClientAdd from "./Client/pages/client-add.component.vue";
import ClientDeleteConfirmation from "./Client/pages/client-delete-confirmation.component.vue";
import SparePart from "./Inventory/pages/automotive/spare-part.vue";
import {InventoryService} from "./carhelp/services/inventory.service.js";
import InventoryContent from "./Inventory/pages/automotive/automotive-inventory.vue";
export default {
  name:'app',
  components: {
    InventoryContent,
    ClientList, ClientProfile, ClientAdd, ClientDeleteConfirmation, Register, LoginForm, Menu, SparePart},
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
  <div class="w-full">
    <div>
      <h2>Inventory</h2>
      <inventory-content v-if="errors" :spareparts="spareparts"></inventory-content>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
