<script setup lang="ts">
</script>
<template>
  <section class="container mx-auto pb-12 px-4">
    <div class="rounded-3xl bg-cover bg-center" :style="{ backgroundImage: `url(/hero.jpg)` }">
      <div class="relative rounded-3xl">
        <div class="rounded-3xl p-6 lg:p-24">
          <div class="-mx-4 flex flex-wrap items-center mt-24 space-y-6 lg:space-y-0">
            <div class="bg-gray-900 bg-opacity-50 p-8 w-full md:w-9/12 xl:w-8/12 rounded-xl">
              <h1 class="capitalize leading-tight mb-2 text-white">
                Enhancing Vision And Improving Lives
              </h1>
              <p class="font-thin mb-6 text-gray-100">
                We offer comprehensive eye examination, low vision care,
                contact lens practice and computerised optical services.
              </p>
              <BaseButton size="md" label="Book Appointment" to="/appointment">
                <div class="inline-block ml-1 p-1.5 text-lg">Book Appointment</div>
                <BaseIcon name="i-heroicons-clock" height="28px" />
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
