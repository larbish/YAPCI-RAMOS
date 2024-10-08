<template>
    <a target="_blank" :href="link"
        class="w-[90vw] sm:w-[40vw] 2xl:w-[30vw] gap-x-4 grid grid-cols-3 !leading-[1.1]">
        <p class="col-span-2 leading-[1.1]">{{ props.title }}</p>
        <p>{{ props.author }}</p>
    </a>
</template>

<script setup>
const props = defineProps({
    title: String,
    author: String,
    link: String
})
</script>
