<script setup lang="ts">
const { name, image, description } = defineProps<{
  name: string
  image: string
  description: string
}>()
</script>
<template>
  <div class="w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
    <div
      class="m-4 text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-800 px-6 py-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      <NuxtImg class="mb-4 mx-auto rounded-lg w-full sm:w-10/12" :alt="name" :src="image" />
      <h5 class="font-semibold text-lg mb-2">{{ name }}</h5>
      <p class="mb-4 text-neutral-700 dark:text-secondary-300 text-base flex-grow">
        {{ description }}
      </p>
    </div>
  </div>
</template>
<style scoped></style>
