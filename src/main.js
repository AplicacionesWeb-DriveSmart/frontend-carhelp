import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Card from "primevue/card";
import Button from "primevue/button";
import SelectButton from "primevue/selectbutton";
import Avatar from "primevue/avatar";
import Toolbar from "primevue/toolbar";
import PrimeVue from "primevue/config";

createApp(App)
    .use(PrimeVue, { ripple: true })
    .component('pv-card', Card)
    .component('pv-button', Button)
    .component('pv-select-button', SelectButton)
    .component('pv-avatar', Avatar)
    .component('pv-toolbar', Toolbar)
    .mount('#app')
