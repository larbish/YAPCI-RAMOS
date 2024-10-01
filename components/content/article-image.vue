<template>
    <img :src="props.imagePath" class="w-full object-cover" :alt="imageAlt">
</template>

<script setup>
const props = defineProps({
    imagePath: String,
    imageAlt: String
})
</script>
