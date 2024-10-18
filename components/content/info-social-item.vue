<template>
    <a :href="props.link" target="_blank" rel="noopener noreferrer">{{ props.title }}</a>
</template>

<script setup>
const props = defineProps({
    link: String,
    title: String
})
</script>
