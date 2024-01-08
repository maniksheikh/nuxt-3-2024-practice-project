 <template>
  <div>
    <Head>
      <Title>Nuxt-3 Iphone {{ name }}</Title>
    </Head>
    <div class="flex justify-center w-full mt-20 p-10 font-bold text-red-500">
      <div class="grid grid-cols-2">
        <div>
          <img :src="`/static/${route.params.img}.jpg`" />
        </div>
        <div class="text-center">
          <h1 class="text-3xl">Iphone {{ name }}</h1>
          <button
            @click="addToCart"
            class="p-3 bg-indigo-800 text-white rounded-md mt-5 w-46"
          >
          <span v-if="isInCart()">Remove From Cart</span>
           <span v-else>Buy Now</span> 
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const route = useRoute();


const fullname = computed(() => {
  return route.params.name;
});

const cart = useCart();

function isInCart() {
  return !!cart.value.find((ct) => ct.name === fullname.value);
}

function addToCart() {
  if (!isInCart()) {
    cart.value.push({ name: fullname });
  } else {
    cart.value = cart.value.filter((ct) => ct.name === fullname.value) ;
  }
}

</script> 

