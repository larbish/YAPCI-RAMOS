<template>
    <div v-if="props.hasTitle === 'true" class="w-full flex items-start">
        <div :style="`width: ${props.width}`" class="p-3 leading-[1.1]">
            <h2 class=" uppercase font-medium">
                {{ props.title }}
            </h2>
            <div class="w-full flex flex-col gap-y-3 mt-3">
                <ContentSlot />
            </div>
        </div>
    </div>

    <div v-else class="w-full">
        <div :style="`width: ${props.width}`">
            <ContentSlot />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    hasTitle: String,
    title: String,
    width: {
        type: String,
        default: '80.31%'
    }
})
</script>
