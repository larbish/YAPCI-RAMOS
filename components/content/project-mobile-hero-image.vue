<template>
    <div class="h-[60vh]">
        <img class="w-full object-cover h-full" :src="imagePath" :alt="imageAlt">
    </div>
</template>

<script setup>

const props = defineProps({
    imagePath: String,
    imageAlt: String,
})

</script>
