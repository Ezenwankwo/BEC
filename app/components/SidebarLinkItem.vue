<script setup lang="ts">
  import type { SideBarItem } from '~~/types'

  const props = defineProps<{
    item: SideBarItem
    header?: boolean
    table?: boolean
  }>()

  // const config = useRuntimeConfig()
  // const { baseURL: base } = config.app

  const link = computed(() => {
    const hash = props.item.link && joinUrl(`#`, props.item.link)
    return {
      path: '',
      hash,
    }
  })

  const active = computed(() => {
    return useRoute().hash === link.value.hash
  })
</script>
<template>
  <NuxtLink
    v-if="link.hash"
    :to="link"
    :class="[active ? 'font-semibold' : 'font-normal', '']"
    class="mt-2 text-sky-600 dark:text-sky-200 pl-1 text-base"
    >{{ item.text }}
  </NuxtLink>
  <span v-else class="text-sky-600 dark:text-sky-200">
    {{ item.text }}
  </span>
</template>
<style scoped></style>
