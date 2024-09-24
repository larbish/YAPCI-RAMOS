<template>
    <div :style="containerStyle" class="w-full flex">
        <div :style="{ width: `${props.leftWidthPercent}` }">
            <slot name="content-one"></slot>
        </div>

        <div :style="{ width: `${props.rightWidthPercent}` }">
            <slot name="content-two"></slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    leftWidthPercent: String,
    rightWidthPercent: String,
    justifyContent: {
        type: String,
        default: 'flex-start', // Default value if none provided
    },
    alignItems: {
        type: String,
        default: 'flex-start', // Optional: You can set a default alignment
    },
})

const containerStyle = computed(() => ({
    display: 'flex',
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
}))
</script>
