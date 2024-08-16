<template>
    <div class="w-full flex flex-col gap-y-2 items-center justify-center absolute top-0 py-10">
        <img src="@/assets/logo.svg" class="h-20 w-fit cursor-pointer" alt="">
        <div
            class="w-fit flex items-center text-xs font-medium gap-x-6  text-neutral-300 brightness-90 mix-blend-luminosity uppercase justify-center">
            <NuxtLink to="/about">Work</NuxtLink>
            <NuxtLink to="/gallery">Press</NuxtLink>
            <NuxtLink to="/contact">Downloads</NuxtLink>
            <NuxtLink to="/store">Info</NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>
