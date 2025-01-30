<script setup lang="ts">
  import siteMeta from '@/site'
  const { title, logo } = siteMeta
</script>
<template>
  <NuxtLink data-pg-name="Logo" class="flex items-center sm:flex-row" to="/">
    <!-- <BaseIcon height="40" class="mt-2" :name="logo" /> -->
    <NuxtImg src="/benita.svg" width="100" height="100" class="mt-2" />
    <h6
      class="hidden sm:block text-sky-600 dark:text-sky-200 font-extrabold font-serif ml-2 mt-4 text-2xl"
    >
      {{ title }}
    </h6>
  </NuxtLink>
</template>
<style scoped></style>
