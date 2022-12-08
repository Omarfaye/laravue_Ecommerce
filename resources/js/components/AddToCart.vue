<template>
  <div class="flex items-center justify-between py-4">
    <button class="bg-indigo-500 text-white p-2"
    v-on:click.prevent="addToCart"
    >
      Ajouter au panier
    </button>
  </div>
</template>

<script  setup>
import useProduct from "../composables/products";
import {TinyEmitter} from "tiny-emitter";
import {inject} from "vue";

const { add } = useProduct();
const productId = defineProps(['productId']);

const emitter = new TinyEmitter();
//const emitter = require("tiny-emitter/instance");
const toast = inject('toast');

 const addToCart = async() => {
   //console.log(productId);
   await axios.get('/sanctum/csrf-cookie');
   await axios.get('/api/user')
       .then(async(res) => {
        let cartCount = await add(productId);
        emitter.on('cartCountUpdated', cartCount);
         toast.success('Produit ajouter au panier...');
   })
       .catch(()=>{
         toast.error('Merci de vous connecter pour ajouter un produit...');
       });


 }
</script>
