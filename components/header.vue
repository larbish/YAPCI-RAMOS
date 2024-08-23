<template>
    <div class="w-full flex flex-col gap-y-2 items-center justify-center absolute top-0 py-4 mix-blend-difference">
        <img @mouseenter="moveAnimationEnabled = false" @mouseleave="moveAnimationEnabled = true"  src="@/assets/logo-white.svg" class=" w-36 xl:w-28 2xl:w-36 cursor-pointer" alt="">
        <div
            class="w-fit flex items-center font-medium gap-x-6 mt-4 lg:mt-6 brightness-90 mix-blend-luminosity uppercase justify-center">
            <NuxtLink @mouseenter="moveAnimationEnabled = false" @mouseleave="moveAnimationEnabled = true"  to="/">Work</NuxtLink>
            <NuxtLink @mouseenter="moveAnimationEnabled = false" @mouseleave="moveAnimationEnabled = true"  to="/">Press</NuxtLink>
            <NuxtLink @mouseenter="moveAnimationEnabled = false" @mouseleave="moveAnimationEnabled = true"  to="/">Downloads</NuxtLink>
            <button @mouseenter="moveAnimationEnabled = false" @mouseleave="moveAnimationEnabled = true"  class="uppercase" @click="infoState = true">Info</button>
        </div>
    </div>
</template>

<script setup lang="ts">
const infoState = useState('infoState')
const moveAnimationEnabled = useState('moveAnimationEnabled')
</script>
