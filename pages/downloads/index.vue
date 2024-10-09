<template>
    <ContentRenderer :value="data" />
</template>

<script setup>
const route = useRoute();

const { data } = await useAsyncData(`content-${route.params.category}`, () => {
    return queryContent('downloads', '').findOne()
})
</script>
