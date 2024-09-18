<template>
    <div class="w-full h-[82.59vh] relative overflow-clip cursor-none ">
        <video @click="toggleFullScreen" @mouseenter="moveAnimationEnabled = true"
            @mouseleave="moveAnimationEnabled = false" :src="props.videoSrc"
            class="h-full pointer-events-auto w-full object-cover" muted loop autoplay playsinline></video>
        <p v-show="moveAnimationEnabled" ref="cursor"
            class="absolute top-10  font-medium pointer-events-none mix-blend-difference text-white">
            WATCH VIDEO</p>
    </div>
</template>

<script setup>
import gsap from 'gsap';
const props = defineProps({
    videoSrc: String
})
const moveAnimationEnabled = useState('moveAnimationEnabled')
const cursor = ref(null);

const handleMouseMove = (e) => {
    gsap.to(cursor.value, {
        duration: 0,
        x: e.clientX - 40,
        y: e.clientY - 40,
    });
};

const toggleFullScreen = (event) => {
    const videoElement = event.currentTarget;
    if (!document.fullscreenElement) {
        videoElement.requestFullscreen().catch(err => {
            /*           console.log(`Error attempting to enable full-screen mode: ${err.message}`); */
        });
    }
};


onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove);
});
</script>
