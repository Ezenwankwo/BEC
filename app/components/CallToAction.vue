<script setup lang="ts">
const hmoLogos = [
  "/hmo/reliance.svg",
  "/hmo/leadway.webp",
  "/hmo/axa.png",
  "/hmo/anchor.png",
  "/hmo/hygeia.png",
  "/hmo/avon.png",
  "/hmo/ultimate.webp",
  "/hmo/sunu.jpg",
]
</script>
<template>
  <section class="container mx-auto px-4 py-12">
    <div>
      <h6 class="text-sky-600 dark:text-sky-200 text-center uppercase">
        Trusted By
      </h6>
      <h3 class="capitalize mt-3 text-center">
        We Are Trusted By The Best HMO
      </h3>
      <p class="mt-4 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
    <div class="flex flex-wrap justify-center gap-6 mt-12">
      <div v-for="(logo, index) in hmoLogos" :key="index" class="flex p-8 justify-center">
        <img :src="logo" :alt="`HMO ${index + 1}`" class="h-12 object-contain" />
      </div>
    </div>
  </section>
</template>
<style scoped></style>
