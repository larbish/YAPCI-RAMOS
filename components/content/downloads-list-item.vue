<template>
    <a target="_blank" :href="link"
        class="w-[105.47vw] sm:w-[30vw] lg:w-[32.29vw] gap-x-4 grid grid-cols-2 downloads-list-item hover:opacity-65">
        <p>{{ props.title }}</p>
        <p>{{ props.author }}</p>
    </a>
</template>

<script setup>
const props = defineProps({
    title: String,
    author: String | Number,
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

@media (min-width: 1280px) {
    .mini-map .downloads-list-item {
        width: 8.5vw !important;
        column-gap: 0.5px;
    }
}


</style>
