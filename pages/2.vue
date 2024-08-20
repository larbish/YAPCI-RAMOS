<template>
    <div class="h-screen w-full relative cursor-none" @click="handleClick">
        <video src="@/assets/videos/02-Yapci-monumenta.mp4" muted autoplay loop class="h-full w-full object-cover"
            playsinline></video>
        <div class="w-full h-fit absolute bottom-10 text-center">
            <NuxtLink to="/about" class="text-sm bg-blend-hard-light font-medium text-white brightness-75">
                PARTO DE MÍ. 2022. AUDIOVISUAL
            </NuxtLink>
        </div>
        <div class="absolute top-0 w-full h-full bg-black/50 overlay" ref="overlay">
            <div ref="overlay" class="h-full w-full relative">
                <video src="@/assets/videos/03-Yapci-Lloro.mp4" muted autoplay loop playsinline
                    class="h-full w-full object-cover"></video>

                <div class="w-full h-fit absolute bottom-10 text-center">
                    <NuxtLink to="/about" class="text-sm bg-blend-hard-light font-medium text-white brightness-75">
                        MONUMENTA. 2022. INSTALLATION
                    </NuxtLink>
                </div>
            </div>
        </div>


    </div>
</template>


<script setup>
import gsap from 'gsap';
const overlay = ref(null)

onMounted(() => {
    window.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e
        const x = Math.round(clientX / window.innerWidth * 100)
        const y = Math.round(clientY / window.innerHeight * 100)
        gsap.to(overlay.value, {
            duration: 0.3,
            css: {
                clipPath: `circle(100px at ${x}% ${y}%)`
            },
            ease: "sine.out"
        })
    })
})


const handleClick = async () => {
    console.log('clicked')
    await gsap.to(overlay.value, {
        duration: 1,
        css: {
            clipPath: `circle(100% at 50% 50%)`
        },
        ease: "sine.out"
    })

}

</script>


<style scoped>
.overlay {
    transition: clip-path 100ms;

    clip-path: circle(0%);
}
</style>
