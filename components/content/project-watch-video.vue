<template>
    <div class="w-full  relative overflow-clip">
        <video ref="vidElement" @mouseenter="moveAnimationEnabled = true" @mouseleave="moveAnimationEnabled = false"
            :src="props.videoSrc" class="h-full pointer-events-auto w-full object-cover" muted loop autoplay
            playsinline></video>
        <div class="flex justify-center w-full py-2.5 font-medium">
            <div @click="toggleFullScreen" class="cursor-pointer">
                <slot></slot>
            </div>
        </div>

    </div>
</template>

<script setup>
const props = defineProps({
    videoSrc: String
})

const vidElement = ref(null);

const toggleFullScreen = () => {
    const videoElement = vidElement.value
    if (!document.fullscreenElement) {
        videoElement.requestFullscreen().catch(err => {
            /*           console.log(`Error attempting to enable full-screen mode: ${err.message}`); */
        });
    }
};


</script>
