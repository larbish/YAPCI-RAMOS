<template>
    <p class=" font-normal">
       <slot></slot>
    </p>
</template>

<script setup>
const props = defineProps({
    content: String
})
</script>
