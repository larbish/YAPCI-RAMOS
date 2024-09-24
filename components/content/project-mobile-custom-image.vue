<template>
        <img :src="imagePath" class="h-full min-w-fit w-fit max-w-fit" :style="{ height: props.height }" alt="">
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
