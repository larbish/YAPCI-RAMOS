<template>
    <div class="w-full">
        {{ props.content }}
    </div>
</template>

<script setup>
const props = defineProps({
    content: String
})
</script>
