<template>
    <div class="w-full flex items-start">
        <div :style="{
            width: `${props.leftWidthPercent}%`,
        }">
        </div>

        <div :class="`w-[${props.rightWidthPercent}%]`">

        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    leftWidthPercent: Number,
    rightWidthPercent: Number,
    flexStart: String,
    flexEnd: String,
})

const containerStyle = computed(() => {
    if (props.flexStart === 'true') {
        return {
            display: 'flex',
            justifyContent: 'flex-start',
        }
    }

    if (props.flexEnd === 'true') {
        return {
            display: 'flex',
            justifyContent: 'flex-end',
        }
    }
    

})
</script>