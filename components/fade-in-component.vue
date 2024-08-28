<template>
    <div class="opacity-0" ref="container">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';
const container = ref<HTMLDivElement | null>(null)

onMounted(() => {

    gsap.to(container.value, {
        duration: 0.2,
        ease: 'power1.inOut',
        opacity: 1,
    })
})
</script>
