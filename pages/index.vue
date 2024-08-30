<template>
    <div class="h-[100dvh] w-full relative cursor-none" @click="handleClick">
        <video preload="metadata" src="/videos/Guayec_30s.mp4" muted autoplay loop class="h-full w-full object-cover" playsinline></video>

        <div v-show="overlayState === 0 || overlayState === 1" class="absolute top-0 w-full h-full bg-black/50 overlay" ref="overlay">
            <div class="h-full w-full relative">
                <video preload="metadata" src="/videos/IDontMind_30s.mp4" muted autoplay loop playsinline class="h-full w-full object-cover"></video>
            </div>
        </div>

        <div v-show="overlayState === 1 || overlayState === 2" class="absolute top-0 w-full h-full bg-black/50 overlay" ref="overlayTwo">
            <div class="h-full w-full relative">
                <video preload="metadata" src="/videos/Lloro_30s.mp4" muted autoplay loop playsinline class="h-full w-full object-cover"></video>
            </div>
        </div>

        <div v-show="overlayState === 2 || overlayState === 3" class="absolute top-0 w-full h-full bg-black/50 overlay" ref="overlayThree">
            <div class="h-full w-full relative">
                <video preload="metadata" src="/videos/RedHot_30s.mp4" muted autoplay loop playsinline class="h-full w-full object-cover"></video>
            </div>
        </div>

        <div v-show="overlayState === 3 || overlayState === 4" class="absolute top-0 w-full h-full bg-black/50 overlay" ref="overlayFour">
            <div class="h-full w-full relative">
                <video preload="metadata" src="/videos/Guayec_30s.mp4" muted autoplay loop playsinline class="h-full w-full object-cover"></video>
            </div>
        </div>

        <div class="w-full h-fit absolute bottom-0 z-20 text-center mix-blend-difference" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <div class="w-fit h-fit mx-auto block font-medium" id="disable-hover">
                <button @click="handleOpenProject" class="mix-blend-color-burn p-3 text-white brightness-75">
                    PARTO DE MÍ. 2022. AUDIOVISUAL
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const overlay = ref(null);
const overlayTwo = ref(null);
const overlayThree = ref(null);
const overlayFour = ref(null);
const overlayState = ref(0);
const moveAnimationEnabled = ref(true);

const handleMouseEnter = () => {
    moveAnimationEnabled.value = false;
};

const handleMouseLeave = () => {
    moveAnimationEnabled.value = true;
};

const handleMove = (x, y) => {
    const currentOverlay = [overlay, overlayTwo, overlayThree, overlayFour][overlayState.value];
    const action = moveAnimationEnabled.value ? 'move' : 'disable';
    useUpdateClipPath(x, y, currentOverlay, action);
};

const handleMouseMove = (e) => handleMove(Math.round(e.clientX / window.innerWidth * 100), Math.round(e.clientY / window.innerHeight * 100));
const handleTouchMove = (e) => handleMove(Math.round(e.touches[0].clientX / window.innerWidth * 100), Math.round(e.touches[0].clientY / window.innerHeight * 100));

const handleTouchEnd = () => {
    const currentOverlay = [overlay, overlayTwo, overlayThree, overlayFour][overlayState.value];
    useUpdateClipPath(50, 50, currentOverlay, 'disable');
};

const checkMobile = () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
        handleTouchEnd();
    }
};

onMounted(() => {
    checkMobile();
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchend', handleTouchEnd);
});

onBeforeUnmount(() => {
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('touchend', handleTouchEnd);
});

const handleClick = async (e) => {
    if (!moveAnimationEnabled.value) return;

    const { clientX, clientY } = e;
    const x = Math.round(clientX / window.innerWidth * 100);
    const y = Math.round(clientY / window.innerHeight * 100);

    overlayState.value = (overlayState.value + 1) % 5;
    const overlayRefs = [overlay, overlayTwo, overlayThree, overlayFour];
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    if (overlayState.value === 4) {
        console.log('over 4');
        overlayState.value = 0;
        console.log(overlayState.value);
    }

    overlayRefs.forEach((ref, index) => {
        if (index === overlayState.value - 1 || index === overlayState.value) {
            useUpdateClipPath(x, y, ref, overlayState.value === index + 1 ? 'click' : 'move');
        }
    });

    if (!isMobile && overlayState.value >= 4) {
        overlayRefs.forEach(ref => useUpdateClipPath(50, 50, ref, 'move'));
    }
};
</script>

<style>
.overlay {
    clip-path: circle(100px at 50% 50%);
}

@media screen and (min-width: 768px) {
    .overlay {
        clip-path: circle(80px);
    }
}
</style>
