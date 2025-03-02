<script setup lang="ts">
const hmoLogos = [
    "/hmo/axa.png",
    "/hmo/nhis.jpg",
    "/hmo/reliance.svg",
    "/hmo/tht.svg",
    "/hmo/anchor.png",
    "/hmo/hygeia.png",
    "/hmo/avon.png",
    "/hmo/ultimate.webp",
    "/hmo/sunu.jpg",
    "/hmo/leadway.webp",
    "/hmo/prohealth.png",
    "/hmo/zenith.png",
    "/hmo/unitedhmo.svg",
    "/hmo/nem.jpg",
    "/hmo/dot.svg",
    "/hmo/bastion.png",
    "/hmo/songhai.jpeg",
    "/hmo/hci.png",
    "/hmo/century.png",
    "/hmo/metro.webp",
    "/hmo/novo.webp",
    "/hmo/fountain.png",
    "/hmo/hallmark.jpg",
    "/hmo/springtide.png",
    "/hmo/police.png",
    "/hmo/nnpc.png",
    "/hmo/unitedcomprehensive.png",
    '/hmo/ally.png',
    "/hmo/redcare.png",
]
</script>

<template>
    <div class="py-10 text-center bg-sky-100 dark:bg-sky-700 text-sky-900 dark:text-sky-100">
        <div class="container mx-auto px-4">
            <div class="-mx-4 flex flex-wrap">
                <div class="mx-auto px-4 rounded-2xl w-full lg:w-8/12">
                    <div class="px-6 py-12 rounded-lg tertiary-card">
                        <h2 class="font-bold leading-tight mb-2 text-3xl">
                            HMO Partnerships
                        </h2>
                        <p>
                            Providing quality eye care through partnerships with leading HMOs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container flex flex-wrap justify-center gap-6 py-12 mx-auto">
        <div v-for="(logo, index) in hmoLogos" :key="index" class="flex p-8 justify-center">
            <img :src="logo" :alt="`HMO ${index + 1}`" class="h-12 object-contain" />
        </div>
    </div>
</template>