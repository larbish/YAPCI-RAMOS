<template>
    <div class="w-full bg-white min-h-screen">
        <article class="hidden lg:flex flex-col w-full">
            <div class="flex justify-between w-full">
                <div class="w-[33.6%]">
                    <slot name="images-left"></slot>

                    <p class="mt-16 text-center lg:text-left lg:mt-64 pl-2 pb-1 leading-[1.1] text-black">
                        ©2024 YAPCI RAMOS <br> ALL RIGHTS RESERVED
                    </p>
                </div>
                <div class="w-[33.5%]">
                    <slot name="images-right"></slot>
                </div>
            </div>

            <div class="fixed top-0 w-full flex justify-center">
                <div class="w-[33.03%] h-screen flex flex-col bg-white text-black overflow-y-auto no-scrollbar"
                    data-lenis-prevent>
                    <div
                        class="w-full flex flex-col items-center sticky lg:pt-36 2xl:pt-48 pb-8 top-0 bg-custom-gradient">
                        <h3 class="uppercase font-medium">{{ props.articleSectionTitle }}</h3>
                        <div class="flex w-full px-2 justify-between items-center mt-1">
                            <div class="min-w-fit">
                                <img src="@/assets/icons/chevron-left.svg" class="h-5" alt="">
                            </div>
                            <div class="w-full">
                                <h2
                                    class="lg:text-xl 2xl:text-2xl font-serif font-light text-center uppercase !leading-none px-10 arizona-font">
                                    {{ props.articleTitle }}
                                </h2>
                                <p class="uppercase text-center">{{ props.authorInfo }}</p>
                            </div>
                            <div class="min-w-fit">
                                <img src="@/assets/icons/chevron-right.svg" class="h-5" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="space-y-4 px-1.5 lg:mt-4 2xl:mt-10 leading-[1.1]">
                        <slot name="paragraphs"></slot>
                    </div>

                    <div class="font-medium uppercase px-1.5 mt-6 pb-10">
                        <slot name="download"></slot>
                    </div>
                </div>
            </div>
        </article>

        <article class="lg:hidden text-black">
            <div class="w-full flex flex-col items-center sticky pt-36 top-0 pb-10 bg-custom-gradient ">
                <h3 class="uppercase font-medium">{{ articleSectionTitle }}</h3>
                <div class="flex w-full px-3 justify-between items-center mt-1.5">
                    <div class="min-w-fit">
                        <img src="@/assets/icons/chevron-left.svg" class="h-6 sm:h-10" alt="">
                    </div>
                    <div class="w-full px-2.5 mt-1">
                        <h2
                            class="text-2xl sm:text-3xl px-4 font-serif font-light text-center uppercase leading-[1] arizona-font">
                            {{ articleTitle }}
                        </h2>
                        <p class="uppercase lg:text-base 2xl:text-lg text-center mt-4">{{ authorInfo }}</p>
                    </div>
                    <div class="min-w-fit">
                        <img src="@/assets/icons/chevron-right.svg" class="h-6 sm:h-10" alt="">
                    </div>
                </div>
            </div>

            <div class="space-y-3 px-2.5 mt-10 leading-[1.1]">
                <slot name="paragraphs"></slot>
            </div>

            <div class="font-medium uppercase px-1.5 mt-6 pb-10">
                <slot name="download"></slot>
            </div>
            <div class="flex flex-col w-full mt-1">
                <slot name="images-mobile"></slot>
            </div>
            <p class="mt-8 text-center lg:text-left lg:mt-64 pl-2 pb-6 leading-[1.1] text-black">
                {{ copyrightInfo }}
            </p>
        </article>
        <div ref="triggerElement" class="h-0.5 absolute bottom-0 w-full"></div> <!-- Trigger element at the bottom -->
    </div>

    <Flash v-if="displayFlash" />
</template>

<script setup>
const triggerElement = ref(null);
const displayFlash = ref(false);

const props = defineProps({
    articleSectionTitle: String,
    articleTitle: String,
    authorInfo: String,
    copyrightInfo: {
        type: String,
        default: '©2024 YAPCI RAMOS \n ALL RIGHTS RESERVED'
    },
    downloadButtonText: String,
})

const articleSectionTitle = ref("La Provincia");
const articleTitle = ref("Parir y renacer de Yapci Ramos en el Santa Mònica de Barcelona");
const authorInfo = ref("BY NORA NAVARRO. MARCH 2th, 2024");
const copyrightInfo = ref("©2024 YAPCI RAMOS \n ALL RIGHTS RESERVED");


onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                triggerFunction();
            }
        });
    });

    if (triggerElement.value) {
        observer.observe(triggerElement.value);
    }

    onUnmounted(() => {
        if (triggerElement.value) {
            observer.unobserve(triggerElement.value);
        }
    });
});

// Function to be triggered when intersection happens
function triggerFunction() {
    console.log('Triggered!');
    displayFlash.value = true;
    setTimeout(() => {
        displayFlash.value = false;
    }, 100);
}
</script>
