<template>
    <div class="w-full overflow-x-clip bg-white">
        <div ref="container" class="w-full h-full relative overflow-clip" v>
            <section class="w-full h-screen max-h-screen">
                <div class=" h-full w-full overflow-y-auto" data-lenis-prevent>
                    <SectionOne />
                </div>
            </section>

            <section
                class="w-full h-screen max-h-screen translate-x-[calc(9.11%)] bg-white bg-opacity-90 backdrop-blur-3xl border-l-[0.8px] transition-all duration-700 border-black absolute top-0 left-0"
                :class="{ '!translate-x-[calc(100%-3.12%)]': !secondSectionActive }">
                <div class="h-full w-full relative">
                    <div class=" h-full w-full overflow-y-auto" data-lenis-prevent>
                        <SectionTwo></SectionTwo>
                    </div>
                </div>
                <p @click="activateSecondSection"
                    class="absolute top-7 -left-[1%] font-medium rotate-90 text-white uppercase mix-blend-difference cursor-pointer">
                    Process
                </p>
            </section>

            <section
                class="w-full h-screen max-h-screen bg-white bg-opacity-90 translate-x-[calc(9.11%+1.56%)] border-l-[0.8px] transition-all duration-700 border-black backdrop-blur-3xl absolute top-0 left-0"
                :class="{ '!translate-x-[calc(100%-1.56%)]': !thirdSectionActive }">
                <div class="h-full w-full relative">
                    <div class=" h-full w-full overflow-y-auto" data-lenis-prevent>
                        <SectionThree></SectionThree>
                    </div>

                    <p @click="activateThirdSection"
                        class="absolute top-9 -left-[1.5%] font-medium rotate-90 text-white uppercase mix-blend-difference cursor-pointer">
                        Inspiration
                    </p>
                </div>
            </section>

            <img v-if="!firstSectionActive" @click="activateFirstSection" src="@/assets/icons/work-x.svg"
                class="w-[1.56%] left-[3.5%] fixed top-[2%] mix-blend-difference cursor-pointer" alt="">
        </div>
    </div>
</template>

<script setup>
import SectionOne from '@/components/monumenta/section-one.vue';
import SectionTwo from '~/components/monumenta/section-two.vue';
import SectionThree from '~/components/monumenta/section-three.vue';

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
