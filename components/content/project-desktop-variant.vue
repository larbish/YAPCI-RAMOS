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
    marginTop: {
        type: String,
        default: '0'
    },
    marginLeft: {
        type: String,
        default: '0px'
    },
    justifyContent: {
        type: String,
        default: 'flex-start', // Default value if none provided
    },
    alignItems: {
        type: String,
        default: 'flex-start', // Optional: You can set a default alignment
    },
    paddingLeft: {
        type: String,
        default: '0'
    },
})

const containerStyle = computed(() => ({
    display: 'flex',
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    paddingLeft: props.paddingLeft,
    marginTop: props.marginTop
}))
</script>
