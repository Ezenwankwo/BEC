<script setup lang="ts">
  const { name, image, description } = defineProps<{
    name: string
    image: string
    description: string
  }>()
</script>
<template>
  <NuxtLink class="w-full md:w-6/12 lg:w-4/12 xl:w-3/12" to="/">
    <div
      class="m-3 text-neutral-900 dark:text-neutral-100 bg-neutral-50 dark:bg-neutral-900 px-6 py-12 rounded-3xl shadow-xl text-center"
    >
      <NuxtImg
        class="mb-4 mx-auto rounded-xl w-full sm:w-9/12"
        :alt="name"
        :src="image"
      />
      <h5 class="font-bold mb-2">{{ name }}</h5>
      <p class="mb-6 text-secondary-600 dark:text-secondary-200 text-sm">
        {{ description }}
      </p>
    </div>
  </NuxtLink>
</template>
<style scoped></style>
