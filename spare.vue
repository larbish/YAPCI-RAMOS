<template>
    <div class="h-screen w-full relative cursor-none" @click="handleClick">
        <img v-if="initalImageVisibility" src="~/assets/static/home-background-min.webp"
            class="h-full w-full object-cover" alt="">
        <div class="w-full h-fit absolute bottom-10 text-center">
            <h3 class="bg-blend-hard-light font-medium text-white brightness-75">
                PARTO DE MÍ. 2022. AUDIOVISUAL
            </h3>
        </div>
        <div class="absolute top-0 w-full h-full bg-black/50 overlay" ref="overlay">
            <div class="h-full w-full relative">
                <img v-if="secondImageVisibility" src="~/assets/static/home-background-two-min.webp"
                    class="h-full w-full object-cover" alt="">

                <div class="w-full h-fit absolute bottom-10 text-center">
                    <h3 class=" bg-blend-hard-light font-medium text-white brightness-75">
                        MONUMENTA. 2022. INSTALLATION
                    </h3>
                </div>


            </div>
        </div>

        <div class="absolute top-0 w-full h-full bg-black/50 overlay-two" ref="overlay2">
            <div class="h-full w-full relative">
                <img v-if="thirdImageVisibility" src="~/assets/static/home-background-three.png"
                    class="h-full w-full object-cover" alt="">

                <div class="w-full h-fit absolute bottom-10 text-center">
                    <h3 class=" bg-blend-hard-light font-medium text-white brightness-75">
                        MONUMENTA. 2022. INSTALLATION
                    </h3>
                </div>


            </div>
        </div>

        <div class="absolute top-0 w-full h-full bg-black/50 overlay-three" ref="overlay3">
            <div class="h-full w-full relative">
                <img v-if="fourthImageVisibility" src="~/assets/static/home-background-four.png"
                    class="h-full w-full object-cover" alt="">
                <div class="w-full h-fit absolute bottom-10 text-center">
                    <h3 class=" bg-blend-hard-light font-medium text-white brightness-75">
                        MONUMENTA. 2022. INSTALLATION
                    </h3>
                </div>

            </div>
        </div>


    </div>
</template>


<script setup>
import gsap from 'gsap';
const overlay = ref(null)
const overlay2 = ref(null)
const overlay3 = ref(null)

const initalImageVisibility = ref(true);
const secondImageVisibility = ref(true);
const thirdImageVisibility = ref(true);
const fourthImageVisibility = ref(true);
const animateState = ref(0)

let countFlip = false
onMounted(() => {
    animateState.value = 0
    window.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e
        const x = Math.round(clientX / window.innerWidth * 100)
        const y = Math.round(clientY / window.innerHeight * 100)

        if (animateState.value == 0) {
            //console.log(x, y, animateState.value)
            gsap.to(overlay.value, {
                duration: 0.3,
                css: {
                    clipPath: `circle(100px at ${x}% ${y}%)`
                },
                ease: "sine.out"
            })
        }

        if (animateState.value == 1) {
            //console.log(x, y, animateState.value)
            gsap.to(overlay2.value, {
                duration: 0.3,
                css: {
                    clipPath: `circle(100px at ${x}% ${y}%)`
                },
                ease: "sine.out"
            })
        }

        if (animateState.value == 2) {
            //console.log(x, y, animateState.value)
            gsap.to(overlay3.value, {
                duration: 0.3,
                css: {
                    clipPath: `circle(100px at ${x}% ${y}%)`
                },
                ease: "sine.out"
            })
        }


    })
})


const handleClick = async () => {
    //console.log('clicked')
    if (animateState.value == 0) {
        animateState.value = 1
        await gsap.to(overlay.value, {
            duration: 1,
            css: {
                clipPath: `circle(100% at 50% 50%)`
            },
            ease: "sine.out"
        })

        initalImageVisibility.value = !initalImageVisibility.value
    }

    else if (animateState.value == 1) {
        animateState.value = 2
        await gsap.to(overlay2.value, {
            duration: 1,
            css: {
                clipPath: `circle(100% at 50% 50%)`
            },
            ease: "sine.out"
        })

        secondImageVisibility.value = !secondImageVisibility.value
    }

    else if (animateState.value == 2) {
        animateState.value = 0
        await gsap.to(overlay3.value, {
            duration: 1,
            css: {
                clipPath: `circle(100% at 50% 50%)`
            },
            ease: "sine.out"
        })

        thirdImageVisibility.value = !thirdImageVisibility.value
    }

}

</script>


<style scoped>
.overlay {
    transition: clip-path 100ms;
}

.overlay-two {
    transition: clip-path 100ms;
    cursor: none;
    clip-path: circle(0%);
}

.overlay-three {
    transition: clip-path 100ms;
    cursor: none;
    clip-path: circle(0%);
}
</style>
