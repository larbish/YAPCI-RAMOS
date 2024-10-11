<template>
    <div :style="`width: ${props.width}; margin-top: ${props.marginTop}`" class="w-full text-black">
        {{ props.content }}
    </div>
</template>

<script setup>
const props = defineProps({
    content: String,
    marginTop: {
        type: String,
        default: '0px'
    },
    width: {
        type: String,
        default: '100%'
    }
})
</script>
