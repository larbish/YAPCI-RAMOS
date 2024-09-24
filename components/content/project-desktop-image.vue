<template>
    <div v-if="props.hasText === 'true'" :style="style">
        <img class="w-full" :src="props.imagePath" :alt="props.imageAlt">
        <p class="uppercase">{{ props.textContent }}</p>
    </div>

    <div v-else class="w-full" :style="noTextStyle" >
        <img class="w-full" :src="props.imagePath" :alt="props.imageAlt">
    </div>
</template>

<script setup>
const props = defineProps({
    imagePath: String,
    imageAlt: String,
    hasText: String,
    textContent: String,
    marginLeft: String,
    flexDirection: String,
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
    display: 'flex',
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
}))
</script>
