<template>
    <section>
        <h3 class="font-medium">{{ title }}</h3>
        <p>{{ location }}</p>
        <p>{{ date }}</p>
    </section>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});
</script>
