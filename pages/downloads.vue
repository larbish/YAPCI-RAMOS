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

            <section class="download-scroll-section lg:w-[calc(100vw-35vw)] flex-shrink-0 d-flex line-right"></section>
        </div>

        <div
            class="w-full flex flex-wrap items-center gap-x-4 text-black text-center top-40 lg:top-48 fixed pl-4 lg:pl-64">
            <p v-for="link in navLinks" :key="link" class="cursor-pointer" @click="setActiveFilter(link)">{{ link }}</p>
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
import Lenis from '@studio-freight/lenis'
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from "gsap";
import Draggable from "gsap/Draggable";
const progressIndicator = ref(null);


const setActiveFilter = (link) => {
    activeFilter.value = link;
};

const filteredSections = computed(() => {
    if (activeFilter.value === "ALL") {
        return sections.value;
    }
    return sections.value.filter(section => section.title === activeFilter.value);
});

const sections = ref([
    {
        title: "READS",
        items: [
            { title: "Journeys of the Self Towards Others", author: "Nora Navarro" },
            { title: "Guayec: A Cultural Exploration", author: "Marina Ribot" },
            { title: "Rebirthing Rituals: Ancient Practices", author: "Nora Navarro" },
            { title: "Nothing is True, Everything is Living", author: "Cecile Bourne" },
            { title: "The Evolution of Consciousness", author: "Liam O'Connor" },
            { title: "Myth and Reality: An In-Depth Study", author: "Sophia Lee" },
            { title: "The Art of Spiritual Awakening", author: "Derek White" }
        ]
    },
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
    {
        title: "PUBLICATIONS",
        items: [
            { title: "Understanding Modern Philosophy", author: "Alice Johnson" },
            { title: "Cultural Dynamics in the 21st Century", author: "Michael Smith" },
            { title: "A Study of Ancient Texts", author: "Evelyn Clark" },
            { title: "Global Perspectives on Art", author: "Henry Adams" },
            { title: "Exploring New Horizons", author: "Rachel Green" },
            { title: "Philosophy of the Mind", author: "James Brown" },
            { title: "Contemporary Literature Analysis", author: "Olivia Martin" }
        ]
    },
    {
        title: "CATALOGUES",
        items: [
            { title: "Catalogue of Modern Art", author: "Emma Williams" },
            { title: "Historical Texts Collection", author: "Daniel Harris" },
            { title: "Contemporary Cultural Studies", author: "Grace Nelson" },
            { title: "Anthology of World Literature", author: "Jacob Taylor" },
            { title: "Art Movements Through the Ages", author: "Ava Lewis" },
            { title: "New Age Spirituality", author: "Christopher Davis" },
            { title: "Philosophy and Thought", author: "Isabella Martinez" }
        ]
    },
    {
        title: "PRESS KITS",
        items: [
            { title: "Press Kit for 'Journeys of the Self'", author: "Nora Navarro" },
            { title: "Press Materials for 'Guayec'", author: "Marina Ribot" },
            { title: "Rebirthing Rituals: Press Kit", author: "Nora Navarro" },
            { title: "Nothing is True: Press Documents", author: "Cecile Bourne" },
            { title: "The Evolution of Consciousness: Press Pack", author: "Liam O'Connor" },
            { title: "Myth and Reality: Media Kit", author: "Sophia Lee" },
            { title: "The Art of Spiritual Awakening: Press Files", author: "Derek White" }
        ]
    },
    {
        title: "DOSSIERS",
        items: [
            { title: "Dossier on Modern Philosophy", author: "Alice Johnson" },
            { title: "Cultural Dynamics Case Studies", author: "Michael Smith" },
            { title: "Ancient Texts and Their Impact", author: "Evelyn Clark" },
            { title: "Global Art Perspectives", author: "Henry Adams" },
            { title: "New Horizons in Thought", author: "Rachel Green" },
            { title: "Mind and Consciousness: An Overview", author: "James Brown" },
            { title: "Literature Analysis: Recent Trends", author: "Olivia Martin" }
        ]
    }
]);

const navLinks = ["ALL", "READS", "PRESS", "PUBLICATIONS", "CATALOGUES", "PRESS KITS", "DOSSIERS"];
const wrapper = ref(null);
const dragProxy = ref(null);


if (import.meta.client) { gsap.registerPlugin(ScrollTrigger, Draggable); }

onMounted(() => {

})
onMounted(async () => {
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
    });


    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
        gsap.to(progressIndicator.value, {
            left: `${(horizontalScroll.progress * 100).toFixed(2)}%`
        })
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

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

});

</script>



<style>
::selection {
    color: white;
    background-color: red;
}
</style>