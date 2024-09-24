<template>
    <div class="h-[60vh]">
        <video @click="toggleFullScreen" @touchend="toggleFullScreen" :src="props.videoPath"
            class="h-full pointer-events-auto w-full object-cover" muted loop autoplay playsinline></video>
    </div>
</template>

<script setup>

const props = defineProps({
    videoPath: String,
})

const toggleFullScreen = (event) => {
    const videoElement = event.currentTarget;
    if (!document.fullscreenElement) {
        videoElement.requestFullscreen().catch(err => {
        });
    }
};

</script>

