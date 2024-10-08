<template>
    <div v-if="props.hasTitle == 'true'" class="w-full flex items-start text-black">
        <div :style="`width: ${props.width}`" class="p-2 flex gap-x-2 leading-[1.3]">
            <h2 class=" uppercase font-medium">
                {{ props.title }}
            </h2>
            <div class="flex flex-col ml-auto w-[63.2%] min-w-[63.2%] max-w-[63.2%] gap-y-3 ">
                <ContentSlot />
            </div>
        </div>
    </div>

    <div v-else class="w-full p-1 lg:pl-2">
        <div :style="`width: ${props.width}`" class="flex flex-col gap-y-3">
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
        default: '100%'
    }
})
</script>
