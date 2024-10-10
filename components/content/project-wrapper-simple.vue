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


        </div>
    </div>

    <div class="lg:hidden bg-white min-h-[100dvh] h-[100dvh] overflow-y-auto relative">
        <section class="w-full h-screen max-h-screen bg-white downloads-new-tab" @click="activateFirstSection">
            <slot name="section-one-mobile"></slot>
            <slot name="project-credits"></slot>
            <p class=" py-12 text-center text-black">
                ©2024 YAPCI RAMOS <br>
                ALL RIGHTS RESERVED
            </p>
        </section>

    </div>
</template>

<script setup>



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