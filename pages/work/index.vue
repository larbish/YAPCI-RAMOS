<template>
    <div class="text-black px-2 w-full pt-44 min-h-screen relative overflow-x-clip bg-white pb-44">
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
            <button @click="toggleSort('year')" class="w-14 min-w-14 lg:w-64 flex items-center">YEAR <img
                    src="@/assets/icons/chevron-down.svg" class="invert" alt="chevron down"
                    :class="getSortIconClass('year')"></button>
            <button @click="toggleSort('title')"
                class="w-[45vw] min-w-[45vw] lg:w-[30vw] lg:min-w-[30vw] flex items-center">PROJECT<img
                    src="@/assets/icons/chevron-down.svg" class="invert" alt="chevron down"
                    :class="getSortIconClass('title')"></button>
            <button @click="toggleSort('category')" class="w-[full] flex items-center">CATEGORY<img
                    src="@/assets/icons/chevron-down.svg" class="invert" alt="chevron down"
                    :class="getSortIconClass('category')"></button>
        </div>

        <!-- Project list -->
        <div class="lg:px-40 flex font-normal w-full flex-col mt-5 lg:mt-2 z-10 text-white mix-blend-difference"
            v-auto-animate>
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


<script setup>
// Combined projects with media and patterns
const projects = ref([
    {
        year: '2024',
        title: 'PARTO',
        category: 'INSTALLATION',
        link: '/projects/parto',
        media: [
            { type: 'img', src: '/work-list/image 7.png', position: { left: '10vw', bottom: '10pvw' } }
        ]
    },
    {
        year: '2023',
        title: 'MONUMENTA',
        category: 'INSTALLATION',
        link: '/projects/monumenta',
        media: [
            { type: 'img', src: '/work-list/Group 50.png', position: { left: '0vw', top: '0vh' } },
            { type: 'img', src: '/work-list/Captura de pantalla 2024-07-23 a las 13.42.53 1.png', position: { right: '0vw', bottom: '0vh' } },
        ]
    },

    {
        year: '2021',
        title: 'GUAYEC',
        category: 'AUDIOVISUAL',
        link: '/projects/guayec',
        media: [
            { type: 'img', src: '/work-list/image 18.png', position: { left: '10rem', bottom: '15vh' } },
            { type: 'video', src: '/work/guayec/guayec_-_excerpt.mp4', position: { right: '0vw', top: '0vh' } ,height:"50vh" },
        ]
    },

     {
        year: '2021',
        title: 'LLORO',
        category: 'INSTALLATION',
        link: '/projects/lloro',
        media: [
            { type: 'img', src: '/work/lloro/image 20.png', position: { left: '10rem', top: '5vh' } },
            { type: 'video', src: '/work/lloro/03-Yapci-Lloro.mp4', position: { right: '5vw', bottom: '15vh' },height:"50vh" },
        ]
    },
    {
        year: '2019',
        title: 'IDENTITY',
        link: '/projects/identity',
        category: 'PHOTOGRAPHY',
        media: [
            { type: 'img', src: '/work-list/image 21.png', position: { left: '25vw', bottom: '25vh' } }
        ]
    },
    {
        year: '2018',
        title: 'I DON’T MIND',
        link: '/projects/i-dont-mind',
        category: 'AUDIOVISUAL',
        media: [
            { type: 'video', src: '/work/i-dont-mind/conver-video-two.mp4', position: { left: '0vw', top: '0vh' }, height:"65vh" },
            { type: 'img', src: '/work-list/Captura de pantalla 2024-07-30 a las 13.59.39 1.png', position: { right: '10vw', bottom: '10vh' }, width:"50vw" }
        ]
    },
    {
        year: '2018',
        title: 'RED-HOT',
        link: '/work',
        category: 'AUDIOVISUAL',
        media: [
            { type: 'img', src: '/work-list/image 22.png', position: { left: '20vw', bottom: '25vh' } },
            { type: 'img', src: '/work-list/image 23.png', position: { right: '0vw', top: '10vh' } }
        ]
    },
    {
        year: '2015',
        title: 'PERRAS Y PUTAS',
        link: '/work',
        category: 'PHOTOGRAPHY',
        media: [
            { type: 'img', src: '/work-list/image 24.png', position: { left: '0vw', bottom: '0vh' } },
        ]
    },
    // Add more projects with media as needed
])

// State for sorting
// State for sorting criterion and order
const sortCriterion = ref('year');
const sortOrder = ref('asc'); // 'asc' for ascending, 'desc' for descending

// Function to sort projects
const sortedProjects = computed(() => {
    return [...projects.value].sort((a, b) => {
        let comparison = 0;
        if (sortCriterion.value === 'year') {
            comparison = parseInt(b.year) - parseInt(a.year);
        } else if (sortCriterion.value === 'title') {
            comparison = a.title.localeCompare(b.title);
        } else if (sortCriterion.value === 'category') {
            comparison = a.category.localeCompare(b.category);
        }
        return sortOrder.value === 'asc' ? comparison : -comparison;
    });
});

function toggleSort(criterion) {
    if (sortCriterion.value === criterion) {
        sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortCriterion.value = criterion;
        sortOrder.value = 'desc'; // Default to descending order when switching criterion
    }
}

function getSortIconClass(criterion) {
    return sortCriterion.value === criterion ? (sortOrder.value === 'asc' ? 'rotate-180' : '') : '';
}

function getMediaStyle(position, width, height) {
    return {
        ...position,
        width,
        height,
        position: 'absolute'
    };
}

// Hover index tracking
const hoverIndex = ref(null)
</script>
