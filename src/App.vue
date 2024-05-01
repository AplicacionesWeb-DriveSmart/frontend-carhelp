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
      drawer: true,
      items: [
        { label: "Home", to: "/home" },
        { label: "Client"},
        { label: "Vehicles"},
        { label: 'Inventory', to: '/inventory' },
        { label: "Chats"},
        { label: "Invoice"},
        { label: "Configuration"},
        { label: "Support"},
        { label: "Plans"},

      ]
    }
  }
}
</script>

<template>
  <div>
    <pv-toast />
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
            <pv-button
                class="p-button-text text-white"
                :href="href"
                @click="navigate"
            >
              {{ item.label }}
            </pv-button>
          </router-link>
        </div>
      </template>
    </pv-toolbar>
  </div>

  <pv-sidebar v-model:visible="drawer">
    <div class="sidebar-items">
      <router-link
          v-for="item in items"
          :to="item.to"
          custom
          v-slot="{ navigate, href }"
          :key="item.label"
      >
        <pv-button
            class="p-button-text black sidebar-item"
            :href="href"
            @click="navigate"
        >
          {{ item.label }}
        </pv-button>
      </router-link>
    </div>
  </pv-sidebar>

  <RouterView />
</template>

<style scoped>
.sidebar-container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 240px; /* Ancho del sidebar */
  background-color: #f0f0f0;
  box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow-y: auto;
}

.sidebar-items {
  display: flex;
  flex-direction: column;
  padding: 20px; /* Espaciado interno */
}

.sidebar-item {
  margin-bottom: 10px; /* Espaciado entre ítems */
}
</style>
