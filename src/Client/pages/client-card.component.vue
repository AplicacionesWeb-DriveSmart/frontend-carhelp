<template>
  <div class="div-1">
    <div v-for="client in clients" :key="client.id">
      <v-card class="client-card">
        <img :src="client.image_url" alt="Client Image" style="width: 200px; height: 200px; margin-left: 10px; margin-top: 10px;">
        <div class="client-avatar"></div>
        <div>Name: {{ client.name }}</div>
        <div class="client-card-action">
          <router-link :to="{ name: 'profile', params: { id: client.id } }">
            <button>Edit</button>
          </router-link>
          <router-link :to="{ name: 'delete', params: { id: client.id }}">
            <button>Delete</button>
          </router-link>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    clients: Array
  },
  methods: {
    edit(clientId) {
      this.$router.push({ name: 'profile', params: { id: clientId } });
    },
    Delete(clientId) {
      this.$router.push({ name: 'delete', params: { id: clientId } });
    }
  }
}
</script>

<style scoped>

.div-1 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 70px;
  gap: 20px;
}

@media (max-width: 991px) {
  .div-1 {
    max-width: 100%;
    margin-top: 40px;
  }
}

.mat-card-content p {
  display: flex;
  flex-direction: row;
  font-family: Roboto Mono, sans-serif;
  text-align: center;
  color: #000;
  margin: 0;
}

.client-card-action button {
  font-family: Roboto Mono, sans-serif;
  border-radius: 40px;
  background-color: #002e43;
  color: #ffffff;
  margin-right: 8px;
  justify-content: center;
  padding: 22px 49px;
  margin-top: 15px;
}
</style>