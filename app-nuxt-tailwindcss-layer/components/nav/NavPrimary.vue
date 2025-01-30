<script setup lang="ts">
  defineProps({
    navs: {
      type: Array,
      default() {
        return []
      },
    },
    currentPath: {
      type: String,
      default: '/',
    },
  })
</script>

<template>
  <div class="h-full items-center">
    <div class="flex h-full space-x-2">
      <BaseButton
        v-for="(nav, index) in navs"
        :key="index"
        :to="nav.to"
        :label="nav.title"
        size="lg"
        :variant="nav.to === currentPath ? 'solid' : 'ghost'"
        class="!rounded-lg"
      />
    </div>
    <BaseButton
      class="ml-3"
      target="_blank"
      to="https://vuedesigner.com"
      size="xl"
      color="sky"
    >
      <span class="pl-2">Book Appointment</span>
      <template #trailing>
        <BaseIcon name="i-heroicons-clock" height="24px" />
      </template>
    </BaseButton>
  </div>
</template>

<style scoped></style>
