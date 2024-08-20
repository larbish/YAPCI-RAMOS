<template>
    <div class="h-[100dvh] w-full relative" @click="handleClick">
        <video preload="metadata" src="/videos/01-Yapci-parto-de-mi.mp4" muted autoplay loop
            class="h-full w-full object-cover" playsinline></video>


        <!-- <img src="~/assets/static/home-background-min.webp" class="h-full w-full object-cover" alt=""> -->
        <div v-if="overlayState == 0 || overlayState == 1" class="absolute top-0 w-full h-full bg-black/50 overlay"
            ref="overlay">
            <div class="h-full w-full relative">
                <video preload="metadata" src="/videos/02-Yapci-monumenta-compressed.mp4" muted autoplay loop playsinline
                    class="h-full w-full object-cover"></video>
            </div>
        </div>

        <div v-if="overlayState == 1 || overlayState == 2" class="absolute top-0 w-full h-full bg-black/50 overlayTwo"
            ref="overlayTwo">
            <div class="h-full w-full relative">
                <video preload="metadata" src="/videos/03-Yapci-Lloro-compressed.mp4" muted autoplay loop playsinline
                    class="h-full w-full object-cover"></video>
            </div>
        </div>


        <div v-if="overlayState == 2 || overlayState == 3" class="absolute top-0 w-full h-full bg-black/50 overlay"
            ref="overlayThree">
            <div class="h-full w-full relative">
                <video preload="metadata" src="/videos/04-Yapci-Red-Hot-compressed.mp4" muted autoplay loop playsinline
                    class="h-full w-full object-cover"></video>
            </div>
        </div>

        <div class="w-full h-fit absolute bottom-10 z-40 text-center mix-blend-difference"
            @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <div class="w-fit h-fit mx-auto block" id="disable-hover">
                <button @click="handleOpenProject"
                    class="text-sm mix-blend-color-burn font-medium p-5 text-white brightness-75">
                    <span></span>
                    PARTO DE MÍ. 2022. AUDIOVISUAL
                </button>
            </div>

        </div>
        <div class="h-full w-full absolute top-0 grainy left-0"></div>
    </div>
</template>


<script setup>
const overlay = ref(null)
const overlayTwo = ref(null)
const overlayThree = ref(null)
const overlayState = ref(0)
const moveAnimationEnabled = ref(true)

const handleMouseEnter = (e) => {
    moveAnimationEnabled.value = false;
}

const handleMouseLeave = () => {
    moveAnimationEnabled.value = true
    console.log('enable')
}


const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const x = Math.round(clientX / window.innerWidth * 100)
    const y = Math.round(clientY / window.innerHeight * 100)
    console.log(`move animation enabled: ${moveAnimationEnabled.value}`)
    if (!moveAnimationEnabled.value) {
        if (overlayState.value == 0) {
            useUpdateClipPath(x, y, overlay, 'disable')
        }
        if (overlayState.value == 1) {
            useUpdateClipPath(x, y, overlayTwo, 'disable')
        }
        if (overlayState.value == 2) {
            useUpdateClipPath(x, y, overlayThree, 'disable')
        }
        return null;
    }

    if (overlayState.value == 0) {
        useUpdateClipPath(x, y, overlay, 'move')
    }
    if (overlayState.value == 1) {
        useUpdateClipPath(x, y, overlayTwo, 'move')
    }
    if (overlayState.value == 2) {
        useUpdateClipPath(x, y, overlayThree, 'move')
    }
}

const handleTouchMove = (e) => {
    const touch = e.touches[0]
    const x = Math.round(touch.clientX / window.innerWidth * 100)
    const y = Math.round(touch.clientY / window.innerHeight * 100)

    if (overlayState.value == 0) {
        useUpdateClipPath(x, y, overlay, 'move')
    }
    if (overlayState.value == 1) {
        useUpdateClipPath(x, y, overlayTwo, 'move')
    }
    if (overlayState.value == 2) {
        useUpdateClipPath(x, y, overlayThree, 'move')
    }
}

onMounted(() => {
    window.addEventListener('touchmove', handleTouchMove)
    window.addEventListener('mousemove', handleMouseMove)
})


const handleClick = async (e) => {

    if (!moveAnimationEnabled.value) return null

    const { clientX, clientY } = e
    const x = Math.round(clientX / window.innerWidth * 100)
    const y = Math.round(clientY / window.innerHeight * 100)


    overlayState.value = overlayState.value + 1

    if (overlayState.value >= 4) {
        overlayState.value = 0
    }

    if (overlayState.value == 1) useUpdateClipPath(x, y, overlay, 'click')

    if (overlayState.value == 2) useUpdateClipPath(x, y, overlayTwo, 'click')

    if (overlayState.value == 3) useUpdateClipPath(x, y, overlayThree, 'click')
}


</script>


<style scoped>
.overlay {
    clip-path: circle(100px at 50% 50%);
    /*  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='6.29' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3C/svg%3E"); */

}

.overlayTwo {
    clip-path: circle(0%);
    /*  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='6.29' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3C/svg%3E"); */

}

.overlayThree {
    clip-path: circle(0%);
    /*  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='6.29' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3C/svg%3E"); */

}

.grainy {
    background-repeat: no-repeat;
    background-size: cover;
    filter: contrast(200%) brightness(250%);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='6.29' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3C/svg%3E");
}
</style>
