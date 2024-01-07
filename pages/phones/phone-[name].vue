 <template>
  <div>
    <Head>
      <Title>Nuxt-3 Iphone {{ name }}</Title>
    </Head>
    <div class="p-10 font-bold text-red-500">
      <h1>Iphone {{ name }}</h1>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const name = computed(() => {
  return route.params.name;
});

// useHead({
//   title: `Nuxt-3 -Iphone ${route.params.name}`,
// });
</script> 

