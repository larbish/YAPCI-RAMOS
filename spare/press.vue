<template>
    <div class="h-screen w-full overflow-x-clip bg-white relative text-black">
        <div ref="wrapper" class="wrapper flex h-full flex-nowrap bg-white leading-[1.2]">
            <section v-for="(section, index) in sections" :key="index"
                class="download-scroll-section w-fit h-full pt-56 first:pl-4 lg:first:pl-64 gap-x-10 lg:gap-x-10 lg:pl-8 flex-shrink-0 d-flex line-right">
                <div class="flex flex-col">
                    <p class="font-medium">{{ section.title }}</p>
                    <div class=" min-w-96 lg:min-w-fit mt-0.5 grid gap-x-10 lg:grid-rows-10 lg:grid-flow-col ">
                        <div v-for="(item, idx) in section.items" :key="idx"
                            class="grid grid-cols-3 uppercase hover:text-neutral-400 gap-x-4 cursor-pointer">
                            <p class="col-span-2">{{ item.title }}</p>
                            <p>{{ item.author }}</p>
                        </div>
                    </div>
                </div>
            </section>

            
        </div>

        <div
            class="w-full flex flex-wrap items-center gap-x-4 text-black text-center top-40 lg:top-48 fixed pl-4 lg:pl-64">
            <NuxtLink v-for="link in navLinks" :key="link"  :class="{ 'border-b-[0.5px] border-black': link.toLowerCase().replace(' ', '-') === route.path.split('/')[2] }"
                :to="link === 'ALL' ? '/downloads' : `/downloads/${link.toLowerCase().replace(' ', '-')}`"
                class="cursor-pointer">
                {{ link }}
            </NuxtLink>
        </div>

        <div class="fixed bottom-[20vh] w-full flex items-center justify-center">
            <div class="relative h-fit max-w-60 lg:max-w-fit lg:w-fit">
                <!-- <img src="@/assets/progress-indicator.svg" class="h-14" alt="progress indicator"> -->
                <div
                    class="flex items-center text-[0.15rem] leading-[1.1] sm:leading-[1.1] sm:text-[0.14rem] 2xl:text-[0.2rem] sm:gap-x-0 2xl:leading-[1.1]">
                    <ul v-for="(section, index) in sections" :key="index">
                        <div class="flex flex-col">
                            <p class="font-medium">{{ section.title }}</p>
                            <div class=" min-w-fit lg:min-w-fit max-w-[fit] mt-[0.1rem]">
                                <div v-for="(item, idx) in section.items" :key="idx"
                                    class="grid grid-cols-3 uppercase gap-x-1">
                                    <p class="col-span-2">{{ item.title }}</p>
                                    <p>{{ item.author }}</p>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
                <div ref="progressIndicator" class="h-[140%] absolute top-[-20%] bg-black w-[1px] left-[0%]"></div>
            </div>
        </div>
        <p class=" fixed bottom-2 text-center w-full lg:text-left left-2 leading-[1.1]">

            ©2024 YAPCI RAMOS <br>
            ALL RIGHTS RESERVED
        </p>
        <div ref="dragProxy" class="hidden absolute drag-proxy"></div>
    </div>
</template>

<script setup>
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';

const route = useRoute();
const progressIndicator = ref(null);
const wrapper = ref(null);
const dragProxy = ref(null);

const sections = ref([
    {
        title: "PRESS",
        items: [
            { title: "Journeys of the Self: Latest Reviews", author: "Nora Navarro" },
            { title: "Guayec in the Media", author: "Marina Ribot" },
            { title: "Rebirthing Rituals: Press Highlights", author: "Nora Navarro" },
            { title: "Nothing is True, Everything is Living: Press Releases", author: "Cecile Bourne" },
            { title: "The Evolution of Consciousness: Media Coverage", author: "Liam O'Connor" },
            { title: "Myth and Reality: Press Insights", author: "Sophia Lee" },
            { title: "The Art of Spiritual Awakening: Reviews", author: "Derek White" }
        ]
    },
    // other sections...
]);

const navLinks = ["ALL", "READS", "PRESS", "PUBLICATIONS", "CATALOGUES", "PRESS KITS", "DOSSIERS"];

let horizontalScroll, scrollTween, dragInstance;

function initializeScroll() {
    const sectionsArray = gsap.utils.toArray(".download-scroll-section");
    let maxWidth = 0;

    const getMaxWidth = () => {
        maxWidth = 0;
        sectionsArray.forEach((section) => {
            maxWidth += section.offsetWidth;
        });
    };
    getMaxWidth();
    ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

    scrollTween = gsap.to(sectionsArray, {
        x: () => `-${maxWidth - window.innerWidth}`,
        ease: "none",
    });

    horizontalScroll = ScrollTrigger.create({
        animation: scrollTween,
        trigger: wrapper.value,
        pin: true,
        scrub: true,
        end: () => `+=${maxWidth}`,
        invalidateOnRefresh: true,
        onUpdate: (Self) => {
            if (progressIndicator.value) progressIndicator.value.style.left = Self.progress * 100 + "%";
        },
    });

    const dragRatio = maxWidth / (maxWidth - window.innerWidth);

    dragInstance = Draggable.create(dragProxy.value, {
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
}

function cleanupScroll() {
    if (horizontalScroll) horizontalScroll.kill();
    if (dragInstance) dragInstance.kill();
    ScrollTrigger.clearMatchMedia();
    gsap.globalTimeline.clear();
}

onMounted(() => {
    if (import.meta.client) {
        gsap.registerPlugin(ScrollTrigger, Draggable);
        initializeScroll();
    }
});

onUnmounted(() => {
    cleanupScroll();
});
</script>




<style>
::selection {
    color: white;
    background-color: red;
}
</style>