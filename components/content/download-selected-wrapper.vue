<template>
    <div class="h-[100dvh] w-full overflow-x-clip bg-white relative text-black downloads-main-wrapper">
        <div ref="wrapper"
            class="wrapper flex h-full flex-nowrap overflow-x-scroll lg:overflow-x-auto gap-x-10 lg:gap-x-20 !cursor-default bg-white leading-[1.3]">

            <section v-if="isSelected('reads')" class="download-scroll-section w-fit h-fit pt-56 first:pl-4 lg:first:pl-64 cursor-default">
                <div class="flex flex-col ">
                    <p class="font-medium">READS</p>
                    <div class="flex mt-1 gap-x-10 items-starts min-w-fit uppercase ">
                        <slot name="reads"></slot>
                    </div>
                </div>
            </section>

            <section v-if="isSelected('press')" class="download-scroll-section w-fit h-fit pt-56 first:pl-4 lg:first:pl-64 cursor-default">
                <div class="flex flex-col ">
                    <p class="font-medium">PRESS</p>
                    <div class="flex mt-1 gap-x-10 items-starts min-w-fit uppercase ">
                        <slot name="press"></slot>
                    </div>
                </div>
            </section>

            <section v-if="isSelected('catalogues')" class="download-scroll-section w-fit h-fit pt-56 first:pl-4 lg:first:pl-64 cursor-default">
                <div class="flex flex-col ">
                    <p class="font-medium">CATALOGUES</p>
                    <div class="flex mt-1 gap-x-10 items-starts min-w-fit uppercase ">
                        <slot name="catalogues"></slot>
                    </div>
                </div>
            </section>

            <section v-if="isSelected('dossiers')" class="download-scroll-section w-fit h-fit pt-56 first:pl-4 lg:first:pl-64 cursor-default">
                <div class="flex flex-col ">
                    <p class="font-medium">DOSSIERS</p>
                    <div class="flex mt-1 gap-x-10 items-starts min-w-fit uppercase ">
                        <slot name="dossiers"></slot>
                    </div>
                </div>
            </section>


            <section class="download-scroll-section lg:w-[calc(100vw-35vw)] flex-shrink-0 d-flex line-right"></section>


        </div>

        <div
            class="w-full flex flex-wrap items-center gap-x-4 text-black text-center top-40 lg:top-48 fixed pl-4 lg:pl-64">
            <NuxtLink v-for="link in navLinks" :key="link" @click="toggleCategory(link)"
                :to="link === 'ALL' ? '/downloads' : `/downloads/${link.toLowerCase().replace(' ', '-')}`"
                class="cursor-pointer relative leading-none">
                <div v-if="isSelected(link)" class="flex items-start border-b-[0.5px] border-black border-spacing-0">{{
                    link }} </div>
                <div v-else>{{ link }}</div>

                <img v-show="isSelected(link)" src="@/assets/icons/tiny-x.svg"
                    class="absolute -right-2 top-0 border-spacing-0 border-b-[0.5px] border-transparent" :alt="link">
            </NuxtLink>
        </div>

        <div class="fixed bottom-[10vh] lg:bottom-[20vh] w-full flex items-center justify-center leading-[1.3]">
            <div class="relative h-fit max-w-[90vw] lg:max-w-fit lg:w-fit">
                <div
                    class="flex items-start text-[0.1rem] leading-[1] sm: mini-map sm:text-[0.12rem] 2xl:text-[0.2rem] sm:gap-x-0 2xl: lg:gap-x-0.5">


                    <section v-if="isSelected('reads')" class="w-fit h-fit max-w-fit min-w-fit cursor-default">
                        <div class="flex flex-col ">
                            <p class="font-medium">READS</p>
                            <div class="flex mt-1 items-starts min-w-fit uppercase  lg:gap-x-0.5">
                                <slot name="reads"></slot>
                            </div>
                        </div>
                    </section>

                    <section v-if="isSelected('press')" class="w-fit h-fit max-w-fit min-w-fit cursor-default">
                        <div class="flex flex-col ">
                            <p class="font-medium">PRESS</p>
                            <div class="flex mt-1  items-starts min-w-fit uppercase ">
                                <slot name="press"></slot>
                            </div>
                        </div>
                    </section>

                    <section v-if="isSelected('catalogues')" class="w-fit h-fit max-w-fit min-w-fit cursor-default">
                        <div class="flex flex-col ">
                            <p class="font-medium">CATALOGUES</p>
                            <div class="flex mt-1  items-starts min-w-fit uppercase ">
                                <slot name="catalogues"></slot>
                            </div>
                        </div>
                    </section>

                    <section v-if="isSelected('dossiers')" class="w-fit h-fit max-w-fit min-w-fit cursor-default">
                        <div class="flex flex-col ">
                            <p class="font-medium">DOSSIERS</p>
                            <div class="flex mt-1 items-starts min-w-fit uppercase ">
                                <slot name="dossiers"></slot>
                            </div>
                        </div>
                    </section>
                </div>


                <div ref="progressIndicator" class="h-[140%] absolute top-[-20%] bg-black w-[1px] left-[0%]"></div>
            </div>
        </div>
        <p class=" fixed bottom-2 text-center w-full lg:text-left left-2 ">

            ©2024 YAPCI RAMOS <br>
            ALL RIGHTS RESERVED
        </p>
        <div ref="dragProxy" class="hidden absolute drag-proxy"></div>
    </div>
</template>

<script setup>
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from "gsap";
import Draggable from "gsap/Draggable";
const progressIndicator = ref(null);
const router = useRouter()
const route = useRoute()


const navLinks = ["ALL", "READS", "PRESS", "CATALOGUES", "DOSSIERS"];
const wrapper = ref(null);
const dragProxy = ref(null);


if (import.meta.client) { gsap.registerPlugin(ScrollTrigger, Draggable); }

const isSelected = (category) => {
    const categories = route.params.category
        ?.split('_')
        .map(cat => cat.toLowerCase()) || []; // Convert route categories to lowercase
    return categories.includes(category.toLowerCase()); // Convert the category argument to lowercase
};



const selectedCategories = route.params.category
    .split('_')
    .map(category => category.replace('-', ' ').toUpperCase()); // Convert dashes to spaces and to uppercase

console.log(selectedCategories);

const toggleCategory = (category) => {
    // Get current categories from route parameters, convert to lowercase
    const currentCategories = route.params.category
        ?.split('_')
        .map(cat => cat.toLowerCase()) || [];

    // Convert the passed category to lowercase
    const categoryLowerCase = category.toLowerCase();
    if (categoryLowerCase === 'all') {
        // Reset to "ALL" if "ALL" is selected
        router.push({ path: '/downloads' });
    } else {
        // Check if the category is currently selected
        const categoryExists = currentCategories.includes(categoryLowerCase);

        // Determine the updated list of categories
        const updatedCategories = categoryExists
            ? currentCategories.filter(cat => cat !== categoryLowerCase) // Remove if already selected
            : [...currentCategories, categoryLowerCase]; // Add if not selected

        // If no categories are selected, reset to "ALL"
        //console.log(updatedCategories)
        if (updatedCategories.length === 0) {
            router.push({ path: '/downloads' });
        } else {
            // Update route with selected categories using underscores
            router.push({ path: `/downloads/${updatedCategories.join('_')}` });
        }
    }
};

onMounted(async () => {
    if (window.matchMedia("(min-width: 1024px)").matches) {



        const sectionsArray = await gsap.utils.toArray(".download-scroll-section");
        let maxWidth = 0;

        const getMaxWidth = () => {
            maxWidth = 0;
            sectionsArray.forEach((section) => {
                maxWidth += section.offsetWidth;
            });
        };
        getMaxWidth();
        ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

        let scrollTween = gsap.to(sectionsArray, {
            x: () => `-${maxWidth - window.innerWidth}`,
            ease: "none",
        });

        let horizontalScroll = ScrollTrigger.create({
            animation: scrollTween,
            trigger: wrapper.value,
            pin: true,
            scrub: true,
            end: () => `+=${maxWidth}`,
            invalidateOnRefresh: true,
            onUpdate: (Self) => {
                if (progressIndicator.value) progressIndicator.value.style.left = Self.progress * 100 + "%";
            }
        });

        let dragRatio = maxWidth / (maxWidth - window.innerWidth);

        Draggable.create(dragProxy.value, {
            trigger: wrapper.value,
            type: "x",
            allowContextMenu: true,
            onPress() {
                this.startScroll = horizontalScroll.scroll();
            },
            onDrag() {
                horizontalScroll.scroll(
                    this.startScroll - (this.x - this.startX) * dragRatio
                );
            },
            onThrowUpdate() {
                horizontalScroll.scroll(
                    this.startScroll - (this.x - this.startX) * dragRatio
                );
            },
        })[0];

    } else {

        const updateScrollPercentage = () => {
            if (wrapper.value && progressIndicator.value) {
                const scrollWidth = wrapper.value.scrollWidth;
                const clientWidth = wrapper.value.clientWidth;
                const scrollLeft = wrapper.value.scrollLeft;

                // Calculate the scroll percentage
                const scrollPercent = (scrollLeft / (scrollWidth - clientWidth)) * 100;

                // Update progress indicator
                progressIndicator.value.style.left = `${scrollPercent}%`;
            }
        };

        // Update scroll percentage on scroll
        wrapper.value.addEventListener('scroll', updateScrollPercentage);

        // Initial update
        updateScrollPercentage();
    }
})


</script>



<style scoped>
/* hide scroll bar  to all the child components of wrapper*/

::-webkit-scrollbar {
    display: none;
    opacity: 0px;
}
</style>