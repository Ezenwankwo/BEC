<script setup lang="ts">
  const services = [
    {
      name: 'Comprehensive Eye Exams',
      image: 'mission.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor.',
    },
    {
      name: 'Vision Correction',
      image: 'vision-correction.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor.',
    },
    {
      name: 'Treatment of Eye Diseases',
      image: 'mission.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor.',
    },
    {
      name: 'Padiatric and Geraitric Eye Care',
      image: 'mission.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor.',
    },
  ]
</script>
<template>
  <div class="bg-sky-100 dark:bg-sky-700">
    <div class="pb-24 pt-12">
      <div class="container mx-auto px-4 relative">
        <div
          class="-mx-4 flex flex-col flex-wrap items-center justify-center mb-4"
        >
          <div class="px-4 text-center w-full">
            <h3 class="capitalize">Our Services</h3>
            <p class="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vitae congue tortor.
            </p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-4 justify-center">
          <PetCard v-for="(pet, index) in services" :key="index" v-bind="pet" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
