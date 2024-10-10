<template>
    <div class="hidden lg:block w-full overflow-x-clip bg-white">
        <div class="w-full h-full relative overflow-clip ">
            <section class="w-full h-screen max-h-screen">
                <div class=" h-full w-full overflow-y-auto downloads-new-tab text-black" data-lenis-prevent>
                    <slot name="section-one"></slot>
                    <slot name="project-credits"></slot>
                    <p class=" mt-16 text-center lg:text-left lg:mt-64 pl-2 pb-1 ">

                        ©2024 YAPCI RAMOS <br>
                        ALL RIGHTS RESERVED
                    </p>
                </div>
            </section>


            <section
                class="w-full h-screen max-h-screen bg-white bg-opacity-90 translate-x-[calc(9.11%+1.56%)] border-l-[0.8px] transition-all duration-700 border-black backdrop-blur-3xl absolute top-0 left-0"
                :class="{ '!translate-x-[calc(100%-1.56%)] cursor-pointer': !thirdSectionActive }"
                @click="activateThirdSection">
                <div class="h-full w-full relative">
                    <div class=" h-full w-full overflow-y-auto" data-lenis-prevent>
                        <slot name="section-two"></slot>
                    </div>

                    <p @click="activateThirdSection"
                        class="absolute top-9 -left-[1%]  rotate-90 text-white hover:text-gray-400 uppercase mix-blend-difference cursor-pointer">
                        Process
                    </p>
                </div>
            </section>

            <img v-if="!firstSectionActive" @click="activateFirstSection" src="@/assets/icons/work-x.svg"
                class="w-[1.56%] left-[3.5%] fixed top-[2%] mix-blend-difference cursor-pointer" alt="">
        </div>
    </div>

    <div class="lg:hidden bg-white min-h-[100dvh] h-[100dvh] overflow-y-auto relative">
        <section class="w-full h-screen max-h-screen bg-white downloads-new-tab" @click="activateFirstSection">
            <slot name="section-one-mobile"></slot>
            <slot name="project-credits"></slot>
            <p class=" py-16 text-center text-black">
                ©2024 YAPCI RAMOS <br>
                ALL RIGHTS RESERVED
            </p>
        </section>

        <section @click="activateThirdSection"
            class="w-full h-[calc(70dvh-30px)] bg-white bg-opacity-90 pt-[30px] fixed bottom-0 border-t-[0.8px] border-black transition-all duration-700 backdrop-blur-3xl"
            :class="{ 'top-[calc(100dvh-30px)] transition-all duration-700 backdrop-blur-none bg-transparent': !thirdSectionActive }">

            <div class="relative h-full w-full">
                <p @click="activateThirdSection"
                    class="absolute font-medium -top-6 pl-2 text-white hover:text-gray-400 uppercase mix-blend-difference cursor-pointer">
                    Process
                </p>
                <div class="flex w-full h-full max-h-full overflow-clip overflow-x-auto">
                    <slot name="section-two-mobile"></slot>
                </div>
            </div>

        </section>
    </div>
</template>

<script setup>

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


onMounted(() => {
    // Select all anchor tags that are descendants of a specific class
    const links = document.querySelectorAll('.downloads-new-tab a');

    // Loop through each anchor tag and add the target attribute
    links.forEach(link => {
        link.setAttribute('target', '_blank');
    });

})
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