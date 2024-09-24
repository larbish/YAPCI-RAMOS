<template>
    <div v-if="props.hasText === 'true'" :style="style">
        <img class="w-full" :src="props.imagePath" :alt="props.imageAlt">
        <p class="uppercase">{{ props.textContent }}</p>
    </div>

    <div v-else class="w-full" :style="style" >
        <img class="w-full" :src="props.imagePath" :alt="props.imageAlt">
    </div>
</template>

<script setup>
const props = defineProps({
    imagePath: String,
    imageAlt: String,
    hasText: String,
    textContent: String,
    marginLeft: String
})

const style = computed(() => ({
    marginLeft: props.marginLeft
}))
</script>
