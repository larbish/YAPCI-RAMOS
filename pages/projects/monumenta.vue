<template>
    <div class="hidden lg:block w-full overflow-x-clip bg-white">
        <div class="w-full h-full relative overflow-clip leading-[1.1]">
            <section class="w-full h-screen max-h-screen">
                <div class=" h-full w-full overflow-y-auto" data-lenis-prevent>
                    <SectionOne />
                </div>
            </section>

            <section
                class="w-full h-screen max-h-screen translate-x-[calc(9.11%)] bg-white bg-opacity-90 backdrop-blur-3xl border-l-[0.8px] transition-all duration-700 border-black absolute top-0 left-0"
                :class="{ '!translate-x-[calc(100%-3.12%)] cursor-pointer': !secondSectionActive }"
                @click="activateSecondSection">
                <div class="h-full w-full relative">
                    <div class=" h-full w-full overflow-y-auto" data-lenis-prevent>
                        <SectionTwo></SectionTwo>
                    </div>
                </div>
                <p @click="activateSecondSection"
                    class="absolute top-7 -left-[1%] rotate-90 text-white hover:text-gray-400 uppercase mix-blend-difference cursor-pointer">
                    Process
                </p>
            </section>

            <section
                class="w-full h-screen max-h-screen bg-white bg-opacity-90 translate-x-[calc(9.11%+1.56%)] border-l-[0.8px] transition-all duration-700 border-black backdrop-blur-3xl absolute top-0 left-0"
                :class="{ '!translate-x-[calc(100%-1.56%)] cursor-pointer': !thirdSectionActive }"
                @click="activateThirdSection">
                <div class="h-full w-full relative">
                    <div class=" h-full w-full overflow-y-auto" data-lenis-prevent>
                        <SectionThree></SectionThree>
                    </div>

                    <p @click="activateThirdSection"
                        class="absolute top-9 -left-[1.5%]  rotate-90 text-white hover:text-gray-400 uppercase mix-blend-difference cursor-pointer">
                        Inspiration
                    </p>
                </div>
            </section>

            <img v-if="!firstSectionActive" @click="activateFirstSection" src="@/assets/icons/work-x.svg"
                class="w-[1.56%] left-[3.5%] fixed top-[2%] mix-blend-difference cursor-pointer" alt="">
        </div>
    </div>

    <div class="lg:hidden bg-white min-h-[100dvh] h-[100dvh] overflow-y-auto relative">
        <section class="w-full h-screen max-h-screen" @click="activateFirstSection">
            <SectionOneMobile></SectionOneMobile>
        </section>

        <section @click="activateSecondSection"
            class="w-full h-[80vh] bg-white bg-opacity-90 fixed bottom-0 pt-7 border-t-[0.8px] border-black transition-all duration-700 backdrop-blur-3xl"
            :class="{ 'top-[calc(100dvh-60px)] transition-all duration-700 backdrop-blur-none bg-transparent': !secondSectionActive }">
            <div class="relative h-full w-full">
                <p @click="activateSecondSection"
                    class="absolute font-medium -top-6 pl-2 text-white hover:text-gray-400 uppercase mix-blend-difference cursor-pointer">
                    Process
                </p>
                <div class="flex w-full h-full max-h-full overflow-clip overflow-x-auto">
                    <img src="@/assets/images/section-two-image-one.png" class="h-full min-w-fit" alt="">

                    <img src="@/assets/images/section-two-image-two.png" class="h-full min-w-fit" alt="">

                    <img src="@/assets/images/section-two-image-three.png" class="h-full min-w-fit" alt="">

                    <img src="@/assets/images/section-two-image-four.png" class="w-full h-fit" alt="">

                    <img src="@/assets/images/section-two-image-five.png" class="w-full h-fit" alt="">
                </div>
            </div>
        </section>

        <section @click="activateThirdSection"
            class="w-full h-[calc(80vh-30px)] bg-white bg-opacity-90 pt-7 fixed bottom-0 border-t-[0.8px] border-black transition-all duration-700 backdrop-blur-3xl"
            :class="{ 'top-[calc(100dvh-30px)] transition-all duration-700 backdrop-blur-none bg-transparent': !thirdSectionActive }">

            <div class="relative h-full w-full">
                <p @click="activateThirdSection"
                    class="absolute font-medium -top-6 pl-2 text-white hover:text-gray-400 uppercase mix-blend-difference cursor-pointer">
                    Inspiration
                </p>
                <div class="flex w-full h-full max-h-full overflow-clip overflow-x-auto">
                    <img src="@/assets/images/section-three-image-one.png" class="h-full min-w-fit" alt="">

                    <img src="@/assets/images/section-three-image-three.png" class="h-full min-w-fit" alt="">

                    <img src="@/assets/images/section-three-image-two.png" class="h-full min-w-fit" alt="">

                    <img src="@/assets/images/section-three-image-five.png" class="w-full h-fit" alt="">
                </div>
            </div>

        </section>
    </div>
</template>

<script setup>
import SectionOne from '@/components/monumenta/section-one.vue';
import SectionTwo from '~/components/monumenta/section-two.vue';
import SectionThree from '~/components/monumenta/section-three.vue';

import SectionOneMobile from '~/components/monumenta/section-one-mobile.vue';

const firstSectionActive = ref(true);
const secondSectionActive = ref(false);
const thirdSectionActive = ref(false); // Updated to false initially

const activateFirstSection = () => {
    firstSectionActive.value = true;
    secondSectionActive.value = false;
    thirdSectionActive.value = false;
};

const activateSecondSection = () => {
    firstSectionActive.value = false;
    secondSectionActive.value = true;
    thirdSectionActive.value = false;
};

const activateThirdSection = () => {
    firstSectionActive.value = false;
    secondSectionActive.value = true; // Ensure second section is inactive
    thirdSectionActive.value = true;
};
</script>


<style scoped>
.mobile-second-section {
    animation: sectionTwoAnimation 0.5s ease-in-out forwards;
}

@keyframes sectionTwoAnimation {
    0% {
        bottom: 0;
    }

    100% {
        top: calc(100vh - 30px);
    }
}
</style>