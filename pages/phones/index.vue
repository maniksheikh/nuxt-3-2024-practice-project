<template>
  <div class="grid grid-cols-4 gap-10 p-5 mt-5">
    <NuxtLink to="/phones/phone-14" class="text-center shadow-lg  border rounded-lg font-medium">
      <h1 class="mb-5">Iphone 14 pro Max.</h1>
      <div class="flex justify-center">
        <img
          width="250"
          src="/static/iphone-14-pro-max-img.jpg"
        />
      </div>
    </NuxtLink>
    <NuxtLink to="/phones/phone-15-pro" class="text-center shadow-lg  border rounded-lg font-medium">
      <h1 class="mb-5">Iphone 15 Pro Max.</h1>
      <div class="flex justify-center">
        <img
          width="200"
          src="/static/iphone-15-pro-max-img.jpg"
        />
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
useHead({
  title: "Nuxt-3 phone ",
});
</script>

