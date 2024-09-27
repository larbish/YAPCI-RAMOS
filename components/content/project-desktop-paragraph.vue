<template>
    <div class="w-full text-black">
        {{ props.content }}
    </div>
</template>

<script setup>
const props = defineProps({
    content: String
})
</script>
