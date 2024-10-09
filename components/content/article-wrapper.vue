<template>
    <div class="w-full bg-white min-h-screen article-wrapper">
        <article class="hidden lg:flex flex-col w-full">
            <div class="flex justify-between w-full">
                <div class="w-[33.6%] pb-14 min-h-screen relative">
                    <slot name="images-left"></slot>

                    <p
                        class="mt-16 text-center lg:text-left lg:mt-64 pl-2 pb-1 leading-[1.3] text-black absolute bottom-0">
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
                            <div @click="goToPreviousArticle" class="min-w-fit cursor-pointer">
                                <img src="@/assets/icons/chevron-left.svg" class="h-5" alt="">
                            </div>
                            <div class="w-full">
                                <h2
                                    class="lg:text-xl 2xl:text-2xl font-serif font-light text-center uppercase !leading-none px-10 arizona-font">
                                    {{ props.articleTitle }}
                                </h2>
                                <p class="uppercase text-center">{{ props.authorInfo }}</p>
                            </div>
                            <div @click="goToNextArticle" class="min-w-fit cursor-pointer">
                                <img src="@/assets/icons/chevron-right.svg" class="h-5" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="space-y-4 px-1.5 lg:mt-4 2xl:mt-10 leading-[1.3]">
                        <slot name="paragraphs"></slot>
                    </div>

                    <div class="font-medium uppercase px-1.5 mt-6 pb-10 leading-[1.3] downloads-new-tab">
                        <slot name="download"></slot>
                    </div>
                </div>
            </div>
        </article>

        <article class="lg:hidden text-black">
            <div class="w-full flex flex-col items-center sticky pt-36 top-0 pb-10 bg-custom-gradient ">
                <h3 class="uppercase font-medium">{{ props.articleSectionTitle }}</h3>
                <div class="flex w-full px-3 justify-between items-center mt-1.5">
                    <div @click="goToPreviousArticle" class="min-w-fit cursor-pointer">
                        <img src="@/assets/icons/chevron-left.svg" class="h-6 sm:h-10" alt="">
                    </div>
                    <div class="w-full px-2.5 mt-1">
                        <h2
                            class="text-2xl sm:text-3xl px-4 font-serif font-light text-center uppercase leading-[1] arizona-font">
                            {{ props.articleTitle }}
                        </h2>
                        <p class="uppercase lg:text-base 2xl:text-lg text-center mt-4">{{ props.authorInfo }}</p>
                    </div>
                    <div @click="goToNextArticle" class="min-w-fit cursor-pointer">
                        <img src="@/assets/icons/chevron-right.svg" class="h-6 sm:h-10" alt="">
                    </div>
                </div>
            </div>

            <div class="space-y-3 px-2.5 mt-10 leading-[1.3]">
                <slot name="paragraphs"></slot>
            </div>

            <div class="font-medium uppercase px-1.5 mt-6 pb-10 leading-[1.3] downloads-new-tab">
                <slot name="download"></slot>
            </div>
            <div class="flex flex-col w-full mt-1">
                <slot name="images-left"></slot>
                <slot name="images-right"></slot>
            </div>
            <p class="mt-8 text-center lg:text-left lg:mt-64 pl-2 pb-6 leading-[1.3] text-black">
                ©2024 YAPCI RAMOS <br> ALL RIGHTS RESERVED
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

const copyrightInfo = ref("©2024 YAPCI RAMOS \n ALL RIGHTS RESERVED");


const route = useRoute();
const router = useRouter();
const contentQuery = await queryContent('press', 'article').find();

// Map content
const mappedContent = contentQuery.map((item) => {
    return {
        title: item.title,
        description: item.description,
        date: item.date,
        image: item.image,
        visible: false,
        link: item._path,
        tappedOnce: false
    };
});


onMounted(() => {
    // Select all anchor tags that are descendants of a specific class
    const links = document.querySelectorAll('.downloads-new-tab a');

    // Loop through each anchor tag and add the target attribute
    links.forEach(link => {
        link.setAttribute('target', '_blank');
    });

})

// Find current index based on route path
const currentIndex = mappedContent.findIndex(item => item.link === route.path);

// Get previous and next pages with boundary checks
const goToPreviousArticle = () => {
    if (currentIndex > 0) {
        router.push(mappedContent[currentIndex - 1].link);
    } else {
        // If it's the first one, loop to the last article
        router.push(mappedContent[mappedContent.length - 1].link);
    }
};

const goToNextArticle = () => {
    if (currentIndex < mappedContent.length - 1) {
        router.push(mappedContent[currentIndex + 1].link);
    } else {
        // If it's the last one, loop back to the first article
        router.push(mappedContent[0].link);
    }
};


/* onMounted(() => {
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
}); */

// Function to be triggered when intersection happens
/* function triggerFunction() {
    displayFlash.value = true;
    setTimeout(() => {
        displayFlash.value = false;
    }, 100);
} */
</script>


<style>
.article-wrapper a:hover{
    opacity: 0.65 !important;
}
</style>