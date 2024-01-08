<template>
    <nav class="bg-blue-500 text-white p-3 flex justify-between font-bold">
       <NuxtLink to="/home">Home </NuxtLink>
       <NuxtLink to="/about">About </NuxtLink>
       <NuxtLink to="/phones">Phone </NuxtLink>
       <NuxtLink to="/profile">Profile </NuxtLink>
       <p class="cursor-pointer">Cart({{ cart.length }})</p>
    </nav>
</template>

<script setup>
  const cart = useCart();
  console.log(cart.value.length);
</script>
