<script setup lang="ts">
definePageMeta({
  // layout: 'default',
  // name: 'blog',
  // alias: 'blog',
  title: 'Blog',
  description: 'Expert insights, eye care tips for a healthy vision.',
  navOrder: 5,
  type: 'secondary',
  icon: 'i-mdi-home',
  // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
})
</script>
<template>
  <div class="pb-12">
    <div class="py-10 text-center bg-sky-100 dark:bg-sky-700 text-sky-900 dark:text-sky-100">
      <div class="container mx-auto px-4">
        <div class="-mx-4 flex flex-wrap">
          <div class="mx-auto px-4 rounded-2xl w-full lg:w-8/12">
            <div class="px-6 py-12 rounded-lg tertiary-card">
              <h2 class="font-bold leading-tight mb-2 text-3xl">
                Blog
              </h2>
              <p>
                Expert insights, eye care tips for a healthy vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BlogList />
  </div>
</template>
