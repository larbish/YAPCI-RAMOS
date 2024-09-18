<template>
    <p class="mt-3 font-normal">
       <slot></slot>
    </p>
</template>

<script setup>
const props = defineProps({
    content: String
})
</script>
