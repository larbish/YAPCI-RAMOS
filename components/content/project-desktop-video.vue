<template>
    <div v-if="props.hasText === 'true'" :style="style">
        <video :src="props.videoPath" class="w-full pointer-events-auto" muted loop autoplay playsinline></video>
        <p class="uppercase">{{ props.textContent }}</p>
    </div>

    <div v-else :style="noTextStyle">
        <video :style="`width: ${props.childWidth}`" :src="props.videoPath" class="pointer-events-auto" muted loop
            autoplay playsinline></video>
    </div>
</template>

<script setup>
const props = defineProps({
    videoPath: String,
    imageAlt: String,
    hasText: String,
    textContent: String,
    marginLeft: String,
    flexDirection: String,
    marginTop:{
        type: String,
        default: '0px'
    },
    childWidth: {
        type: String,
        default: '100%'
    },
    width: {
        type: String,
        default: '100%'
    },
    justifyContent: {
        type: String,
        default: 'flex-start', // Default value if none provided
    },
    alignItems: {
        type: String,
        default: 'flex-start', // Optional: You can set a default alignment
    },
})

const style = computed(() => ({
    marginLeft: props.marginLeft,
    width: props.width,
    marginTop: props.marginTop,
}))

const noTextStyle = computed(() => ({
    marginLeft: props.marginLeft,
    display: 'flex',
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    marginTop: props.marginTop
}))
</script>
