<template>
    <a target="_blank" :href="link"
        class="w-[90vw] sm:w-[30vw] 2xl:w-[20vw] gap-x-4 grid grid-cols-2 !leading-[1.1] downloads-list-item">
        <p class=" leading-[1.1]">{{ props.title }}</p>
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



<style>
.mini-map .downloads-list-item {
    width: 45px !important;
    column-gap: 0.5px;
}

@media (min-width: 1024px) {
    .mini-map .downloads-list-item {
        width: 5vw !important;
        column-gap: 0.5px;
    }
}


</style>