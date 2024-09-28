<template>
    <img :src="imagePath" class="h-full w-full object-contain" :style="{ height: props.height }" alt="">
</template>


<script setup>
const props = defineProps({
    imagePath: String,
    height: {
        type: String,
        default: 'fit'
    }
})
</script>
