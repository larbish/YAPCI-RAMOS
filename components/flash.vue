<template>
    <div class="fixed top-0 left-0 h-screen bg-red-700 opacity-0 w-full z-50" ref="flash"></div>
</template>

<script setup>
import gsap from "gsap";

const flash = ref(null);


onMounted(() => {
    gsap.to(flash.value, {
        duration: 0.2,
        opacity: 1
    }).then(() => {

        gsap.to(flash.value, {
            duration: 0.2,
            opacity: 0
        })
    })


})
</script>
