<script setup lang="ts">
const hmoLogos = [
  "/hmo/axa.png",
  "/hmo/nhis.jpg",
  "/hmo/reliance.svg",
  "/hmo/tht.svg",
  "/hmo/anchor.png",
  "/hmo/hygeia.png",
  "/hmo/unitedhmo.svg",
  "/hmo/ultimate.webp",
]
</script>
<template>
  <section class="container mx-auto px-4 py-12">
    <div>
      <h3 class="capitalize mt-3 text-center">
        We Are Trusted By The Best HMO
      </h3>
      <p class="mt-4 text-center">
        Providing quality eye care through partnerships with leading HMOs.
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
