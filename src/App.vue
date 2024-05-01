<script>
import Register from './components/pages/register.component.vue'
import LoginForm from "./components/login/login.component.vue";
import Menu from './components/pages/menu.component.vue'
import ClientList from "./Client/pages/client-list.component.vue";
import ClientProfile from "./Client/pages/client-profile.component.vue";
import ClientAdd from "./Client/pages/client-add.component.vue";
import ClientDeleteConfirmation from "./Client/pages/client-delete-confirmation.component.vue";
import SparePart from "./Inventory/pages/automotive/spare-part.vue";
import InventoryContent from "./Inventory/pages/automotive/automotive-inventory.vue";
export default {
  name:'app',
  components: {
    InventoryContent,
    ClientList, ClientProfile, ClientAdd, ClientDeleteConfirmation, Register, LoginForm, Menu, SparePart},
  data() {
    return {
      drawer: false,
      items: [
        { label: "Home", to: "/home" },
        { label: 'Inventory', to: '/inventory' }
      ]
    }
  }
}
</script>

<template>
  <pv-toast></pv-toast>
  <header>
    <pv-toolbar class="bg-primary">
      <template #start>
        <pv-button
            class="p-button-text text-white"
            icon="pi pi-bars"
            @click="drawer = !drawer"
        ></pv-button>
        <h3>CarHelp</h3>
      </template>
      <template #end>
        <div class="flex-column">
          <router-link
              v-for="item in items"
              :to="item.to"
              custom
              v-slot="{ navigate, href }"
              :key="item.label"
          >
            <pv-button class="p-button-text text-white"
                       :href="href"
                       @click="navigate">
              {{ item.label }}
            </pv-button>
          </router-link>
        </div>
      </template>
    </pv-toolbar>
  </header>
  <pv-sidebar v-model:visible="drawer"> </pv-sidebar>
  <RouterView />
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
