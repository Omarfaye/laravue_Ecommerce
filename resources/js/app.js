import './bootstrap';

import Alpine from 'alpinejs';
import {createApp} from "vue/dist/vue.esm-bundler";
import AddToCart from "./components/AddToCart.vue";
import NavbarCart from "./components/NavbarCart.vue";
import {Toaster} from "@meforma/vue-toaster";
import ShoppingCart from "./components/ShoppingCart.vue";

window.Alpine = Alpine;

Alpine.start();

const app = createApp();

app.use(Toaster).provide('toast', app.config.globalProperties.$toast);

app.component('AddToCart', AddToCart);
app.component('NavbarCart', NavbarCart);
app.component('ShoppingCart', ShoppingCart);

app.mount('#app');
