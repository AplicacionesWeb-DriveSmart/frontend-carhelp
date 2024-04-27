<script>
import Register from './components/pages/register.component.vue'
import LoginForm from "./components/login/login.component.vue";
import Menu from './components/pages/menu.component.vue'
import ClientList from "./components/pages/client-list.component.vue";
import ClientProfile from "./components/pages/client-profile.component.vue";



export default {
  name:'app',
  components: {ClientList, ClientProfile, Register, LoginForm, Menu}
}

</script>

<template>
 <ClientProfile></ClientProfile>
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
