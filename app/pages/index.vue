<script setup lang="ts">
import Hmo from '~/components/Hmo.vue';

  definePageMeta({
    // layout: 'default',
    // name: 'index',
    // alias: 'index',
    title: 'Home',
    description: 'Eyecare and Optometry Clinic in Calabar, Nigeria',
    navOrder: 1,
    type: 'sky',
    ogImage: 'hero.jpg', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })
</script>
<template>
  <div>
    <HeroSection />
    <Hmo />
    <MiniDivider />
    <OurMission />
    <PetListLite />
    <StatsSection />
  </div>
</template>
<style scoped></style>
