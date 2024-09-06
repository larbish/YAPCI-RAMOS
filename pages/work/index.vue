<template>
    <div class="text-black px-2 w-full pt-44 min-h-screen relative bg-white pb-44">
        <!-- Iterate over sorted projects to display media -->
        <div v-for="(project, projectIndex) in sortedProjects" :key="projectIndex">
            <div v-for="(mediaItem, mediaIndex) in project.media" :key="mediaIndex">
                <!-- Render video -->
                <video v-if="mediaItem.type === 'video' && hoverIndex === projectIndex" :src="mediaItem.src"
                    :style="getMediaStyle(mediaItem.position, mediaItem.width, mediaItem.height)"
                    class="aspect-auto hidden lg:block" autoplay playsinline muted loop />

                <!-- Render image -->
                <img v-if="mediaItem.type === 'img' && hoverIndex === projectIndex" :src="mediaItem.src"
                    :style="getMediaStyle(mediaItem.position, mediaItem.width, mediaItem.height)"
                    class="aspect-auto hidden lg:block" alt="" />
            </div>
        </div>

        <div
            class="lg:px-40 flex uppercase tracking-wide items-center gap-x-3 leading-[1.1] text-white mix-blend-difference">
            <NuxtLink to="/work" class="border-b border-spacing-0  border-white">List</NuxtLink>
            <NuxtLink to="/work/grid">Grid</NuxtLink>
        </div>

        <div class="w-full font-medium flex lg:px-40 mt-7 text-white mix-blend-difference">
            <button @click="sortCriterion = 'year'" class="w-14 min-w-14 lg:w-64 flex items-center">YEAR <img
                    src="@/assets/icons/chevron-down.svg" class="invert" alt="chevron down"
                    :class="sortCriterion === 'year' ? 'rotate-180' : ''"></button>
            <button @click="sortCriterion = 'title'"
                class="w-[45vw] min-w-[45vw] lg:w-[30vw] lg:min-w-[30vw] flex items-center">PROJECT<img
                    src="@/assets/icons/chevron-down.svg" class="invert" alt="chevron down"
                    :class="sortCriterion === 'title' ? 'rotate-180' : ''"></button>
            <button @click="sortCriterion = 'category'" class="w-[full] flex items-center">CATEGORY<img
                    src="@/assets/icons/chevron-down.svg" class="invert" alt="chevron down"
                    :class="sortCriterion === 'category' ? 'rotate-180' : ''"></button>
        </div>

        <!-- Project list -->
        <div class="lg:px-40 flex font-normal w-full flex-col mt-5 lg:mt-2 z-10 text-white mix-blend-difference" v-auto-animate>
            <NuxtLink v-for="(project, index) in sortedProjects" :key="index" @mouseenter="hoverIndex = index"
                :to="project.link" @mouseleave="hoverIndex = null"
                :class="['w-full flex hover:text-[#D9D9D9] hover:cursor-pointer']" v-auto-animate>
                <h2 class="w-14 lg:w-64">{{ project.year }}</h2>
                <h2 class="w-[45vw] min-w-[45vw] lg:w-[30vw] lg:min-w-[30vw]">{{ project.title }}</h2>
                <h2 class="w-[full]">{{ project.category }}</h2>
            </NuxtLink>
        </div>

        <p class=" mt-16 text-center w-full lg:text-left absolute bottom-0 lg:mt-64 pl-2 pb-1 lg:pb-1 leading-[1.1]">
            ©2024 YAPCI RAMOS <br>
            ALL RIGHTS RESERVED
        </p>
    </div>
</template>


<script setup lang="ts">
// Combined projects with media and patterns
const projects = ref([
    {
        year: '2024',
        title: 'MONUMENTA. NUEVE ENCARNACIONES GUANCHES',
        category: 'INSTALLATION',
        link: '/work',
        media: [
            { type: 'video', src: '/images/Guayec_WorkPage.mp4', autoplay: true, playsinline: true, muted: true, loop: true, width: '60vw', height: '60vh', position: { right: '0vw', bottom: '0vh' } },
            { type: 'img', src: '/images/GROUP-50.png', position: { left: '0px', top: '0px' } }
        ]
    },
    {
        year: '2023',
        title: 'FREEDOM',
        category: 'AUDIOVISUAL',
        link: '/work',
        media: [
            { type: 'img', src: '/images/image7.png', position: { left: '10vw', bottom: '10vh' } }
        ]
    },
    {
        year: '2022',
        title: 'PARTO',
        link: '/work',
        category: 'INSTALLATION',
        media: [
            { type: 'img', src: '/images/project-3.png', position: { left: '0vw', top: '0vh' } },
            { type: 'img', src: '/images/project-3-2.png', position: { right: '10vw', bottom: '20vh' } }
        ]
    },
    // Add more projects with media as needed
])

// State for sorting
const sortCriterion = ref<string>('year')

// Function to sort projects
const sortedProjects = computed(() => {
    return [...projects.value].sort((a, b) => {
        if (sortCriterion.value === 'year') {
            return parseInt(b.year) - parseInt(a.year);
        } else if (sortCriterion.value === 'title') {
            return a.title.localeCompare(b.title);
        } else if (sortCriterion.value === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });
})

function getMediaStyle(position: any, width: string, height: string) {
    return {
        ...position,
        width,
        height,
        position: 'absolute'
    };
}

// Hover index tracking
const hoverIndex = ref<number | null>(null)
</script>
