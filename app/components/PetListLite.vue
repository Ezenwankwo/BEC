<script setup lang="ts">
  const services = [
    {
      name: 'Comprehensive Eye Exams',
      image: 'mission.jpg',
      description:
        'Regular checkups are crucial for detecting vision problems, eye diseases, and overall eye health.',
    },
    {
      name: 'Vision Correction',
      image: 'vision-correction.jpg',
      description:
        'Providing customized eyewear solutions ensures patients get the best visual correction tailored to their needs.',
    },
    {
      name: 'Treatment of Eye Diseases',
      image: 'mission.jpg',
      description:
        'Managing conditions like glaucoma, cataracts, and dry eye syndrome helps maintain long-term vision health.',
    },
    {
      name: 'Padiatric & Geriatric Care',
      image: 'impact.jpg',
      description:
        'Specialized care for children and the elderly helps in early detection of vision issues and age-related conditions.',
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
