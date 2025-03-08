<script setup lang="ts">
//...
</script>
<template>
  <footer class="pt-12">
    <div class="container mx-auto px-8">
      <div class="flex flex-wrap relative">
        <div
          class="-mx-4 flex flex-col flex-wrap items-center pl-4 pr-8 py-4 md:flex-col md:flex-nowrap -mt-4 lg:items-start lg:w-1/2">
          <NuxtLink class="-ml-4" to="/">
            <div to="/" class="font-serif inline-flex items-center text-3xl">
              <NuxtImg src="/benita.svg" alt="logo" width="100" height="100" class="mr-2" />
              <h6 class="font-serif inline-flex items-center text-3xl mt-2">
                Benita Eye Clinic
              </h6>
            </div>
          </NuxtLink>
          <p class="text-center w-full lg:text-left">
            We offer comprehensive eye examination, low vision care,
            contact lens practice and computerised optical services.
          </p>
          <div class="inline-flex mt-6 space-x-3">
            <div class="flex flex-wrap space-x-4">
              <NuxtLink href="https://www.facebook.com/vuedesigner" aria-label="facebook" external target="_blank">
                <BaseIcon name="i-logos-facebook" class="text-2xl" width="28px" />
              </NuxtLink>
              <NuxtLink href="https://twitter.com/vuedesigner" aria-label="twitter" external target="_blank">
                <BaseIcon name="i-logos-twitter" class="text-2xl" width="28px" />
              </NuxtLink>
              <NuxtLink href="https://discord.gg/BYp45Nnu5T" aria-label="discord" external target="_blank">
                <BaseIcon name="i-logos-discord-icon" class="text-2xl" width="28px" />
              </NuxtLink>
              <NuxtLink href="https://www.youtube.com/@vuedesigner" aria-label="youtube" external target="_blank">
                <BaseIcon name="i-logos-youtube-icon" class="text-2xl" width="28px" />
              </NuxtLink>
            </div>
          </div>
          <div class="my-6">
            <NuxtLink to="/">+234 803 756 4564</NuxtLink>
            <br>
            <NuxtLink to="/">benitaeye@yahoo.com</NuxtLink>
          </div>
        </div>
        <div class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 md:w-1/3 lg:items-start">
          <h2 class="font-bold text-sky-600 dark:text-sky-200 text-xl">
            Links
          </h2>
          <ul class="text-center lg:mt-2 lg:text-left">
            <li class="mb-4">
              <NuxtLink to="/" class="hover:text-sky-600 dark:text-sky-200">Home</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="/blog" class="hover:text-sky-600 dark:text-sky-200">Blog</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="/hmo" class="hover:text-sky-600 dark:text-sky-200">HMO</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="/appointment" class="hover:text-sky-600 dark:text-sky-200">Book Appointment</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex flex-col items-center w-full md:w-1/3">
          <h2 class="font-bold text-sky-600 dark:text-sky-200 text-xl">
            Gallery
          </h2>
          <div class="-mx-2 flex flex-wrap items-center lg:mt-2">
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg src="/mission.jpg" class="w-full" />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg src="/hero.jpg" class="w-full" />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg src="/impact.jpg" class="w-full" />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg src="/hero.jpg" class="w-full" />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg src="/vision-correction.jpg" class="w-full" />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg src="/mission.jpg" class="w-full" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col sm:w-full md:items-end">
          <hr class="mb-4 opacity-25">
          <p class="py-1 text-sm sm:text-center">
            &copy; 2025. All Rights Reserved - Benita Eye Clinic
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped></style>
