<template>
    <div v-if="props.hasText === 'true'" :style="style">
        <NuxtImg class="w-full" :src="props.imagePath" :alt="props.imageAlt" placeholder format="webp" preload></NuxtImg>
        <p class="uppercase p-1">{{ props.textContent }}</p>
    </div>

    <div v-else :style="noTextStyle">
        <NuxtImg :style="`width: ${props.childWidth}`" :src="props.imagePath" :alt="props.imageAlt" placeholder format="webp" preload>
        </NuxtImg>
    </div>
</template>

<script setup>
const props = defineProps({
    imagePath: String,
    imageAlt: String,
    hasText: String,
    textContent: String,
    marginLeft: {
        type: String,
        default: '0'
    },
    marginRight: {
        type: String,
        default: '0'
    },
    flexDirection: String,
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
}))

const noTextStyle = computed(() => ({
    marginLeft: props.marginLeft,
    marginRight: props.marginRight,
    display: 'flex',
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
}))
</script>
