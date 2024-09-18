<template>
    <div class="w-full flex items-start">
        <div class="w-[40.31%]">
            <img :src="props.imgPath" class="w-full" alt="">
        </div>

        <div class="w-[28.33%] p-3 leading-[1.1]">
            <h2 class=" uppercase font-medium">
                {{ props.title }}
            </h2>

            <ContentSlot />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    imgPath: String,
    title: String
})
</script>
