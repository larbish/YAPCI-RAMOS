<template>
    <div :style="`width: ${props.width}`" class="w-full text-black">
        {{ props.content }}
    </div>
</template>

<script setup>
const props = defineProps({
    content: String,
    width: {
        type: String,
        default: '100%'
    }
})
</script>
