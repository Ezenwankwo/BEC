<script setup lang="ts">
// const props = defineProps({
// 	name: {
// 		type: String,
// 		default: 'StatsSection',
// 	},
// })
</script>
<template>
  <section>
    <div class="container mx-auto px-4 py-12 relative">
      <div class="-mx-4 flex flex-wrap items-center">
        <div class="p-4 w-full lg:w-2/5">
          <!-- <img
            src="https://images.unsplash.com/photo-1561438774-1790fe271b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEyfHxoYXBweSUyMGRvZ3xlbnwwfHx8fDE2ODMyOTgzOTc&ixlib=rb-4.0.3&q=80&w=1080"
            class="mb-6 rounded-3xl w-full"
            alt="Stats"
          /> -->
          <NuxtImg src="/impact.jpg" class="mb-6 rounded-3xl w-full" alt="Stats" />
        </div>
        <div class="lg:w-6/12 mx-auto p-4 w-full">
          <h6 class="font-bold mb-2 text-sky-600 dark:text-sky-200 uppercase">
            Our Work
          </h6>
          <h3 class="capitalize mb-6">Impact we make</h3>
          <p>
            Bringing clear vision to communities through expert eye care.
            Thousands treated, countless lives improved.
          </p>
          <div class="-mx-4 flex flex-wrap items-center">
            <div class="px-4 py-6 w-1/2">
              <h2 class="mb-2">20,000+</h2>
              <p>Patients Served</p>
            </div>
            <div class="px-4 py-6 w-1/2">
              <h2 class="mb-2">55,000+</h2>
              <p>Vision Screening</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
