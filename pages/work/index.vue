<template>
    <div class="text-black px-2 w-full pt-44 min-h-screen relative">
        <div class="lg:px-40 flex uppercase tracking-wide items-center gap-x-3 relative">
            <NuxtLink to="/work" class="border-b border-black ">List</NuxtLink>
            <NuxtLink to="/work/grid">Grid</NuxtLink>
        </div>

        <div class="w-full font-medium flex lg:px-40 mt-14">
            <h2 class=" w-14 min-w-14 lg:w-64 flex items-center">YEAR <img src="@/assets/icons/chevron-down.svg"
                    alt="chevron down"></h2>
            <h2 class="w-[45vw] min-w-[45vw] lg:w-[30vw] lg:min-w-[30vw] flex items-center">PROJECT<img
                    src="@/assets/icons/chevron-down.svg" alt="chevron down"></h2>
            <h2 class=" w-[full] flex items-center">CATEGORY<img src="@/assets/icons/chevron-down.svg"
                    alt="chevron down"></h2>
        </div>
        <div class="lg:px-40 flex font-normal w-full flex-col mt-4 z-10 mix-blend-hard-light">
            <div @mouseenter="projectOneHover = true" @mouseleave="projectOneHover = false"
                class="w-full flex hover:text-[#D9D9D9] hover:cursor-pointer">
                <h2 class="w-14 lg:w-64">2024</h2>
                <h2 class="w-[45vw] min-w-[45vw] lg:w-[30vw] lg:min-w-[30vw]">MONUMENTA. <span
                        class="hidden lg:inline">NUEVE ENCARNACIONES GUANCHES</span> </h2>
                <h2 class="w-[full]">INSTALLATION</h2>
            </div>
            <div @mouseenter="projectTwoHover = true" @mouseleave="projectTwoHover = false"
                class="w-full flex hover:text-[#D9D9D9] hover:cursor-pointer">
                <h2 class="w-14 lg:w-64">2023</h2>
                <h2 class="w-[45vw] min-w-[45vw] lg:w-[30vw] lg:min-w-[30vw]">FREEDOM</h2>
                <h2 class="w-[full]">AUDIOVISUAL</h2>
            </div>

            <div @mouseenter="projectThreeHover = true" @mouseleave="projectThreeHover = false"
                class="w-full flex hover:text-[#D9D9D9] hover:cursor-pointer">
                <h2 class="w-14 lg:w-64">2022</h2>
                <h2 class="w-[45vw] min-w-[45vw] lg:w-[30vw] lg:min-w-[30vw]">PARTO</h2>
                <h2 class="w-[full]">INSTALLATION</h2>
            </div>

            <div class="w-full flex hover:text-[#D9D9D9] hover:cursor-pointer">
                <h2 class="w-14 lg:w-64">2022</h2>
                <h2 class="w-[45vw] min-w-[45vw] lg:w-[30vw] lg:min-w-[30vw]">MONUMENTA</h2>
                <h2 class="w-[full]">INSTALLATION</h2>
            </div>

            <div class="w-full flex hover:text-[#D9D9D9] hover:cursor-pointer">
                <h2 class="w-14 lg:w-64">2022</h2>
                <h2 class="w-[45vw] min-w-[45vw] lg:w-[30vw] lg:min-w-[30vw]">FREEDOM</h2>
                <h2 class="w-[full]">AUDIOVISUAL</h2>
            </div>
            <div class="w-full flex hover:text-[#D9D9D9] hover:cursor-pointer">
                <h2 class="w-14 lg:w-64">2022</h2>
                <h2 class="w-[45vw] min-w-[45vw] lg:w-[30vw] lg:min-w-[30vw]">PARTO</h2>
                <h2 class="w-[full]">INSTALLATION</h2>
            </div>
            <div class="w-full flex hover:text-[#D9D9D9] hover:cursor-pointer">
                <h2 class="w-14 lg:w-64">2021</h2>
                <h2 class="w-[45vw] min-w-[45vw] lg:w-[30vw] lg:min-w-[30vw]">MONUMENTA</h2>
                <h2 class="w-[full]">INSTALLATION</h2>
            </div>
            <div class="w-full flex hover:text-[#D9D9D9] hover:cursor-pointer">
                <h2 class="w-14 lg:w-64">2021</h2>
                <h2 class="w-[45vw] min-w-[45vw] lg:w-[30vw] lg:min-w-[30vw]">FREEDOM</h2>
                <h2 class="w-[full]">AUDIOVISUAL</h2>
            </div>
            <div class="w-full flex hover:text-[#D9D9D9] hover:cursor-pointer">
                <h2 class="w-14 lg:w-64">2020</h2>
                <h2 class="w-[45vw] min-w-[45vw] lg:w-[30vw] lg:min-w-[30vw]">PARTO</h2>
                <h2 class="w-[full]">INSTALLATION</h2>
            </div>
        </div>
        <video v-if="projectOneHover" src="@/assets/images/Guayec_WorkPage.mp4"
            class="aspect-auto h-[60vh] fixed bottom-0 right-0 -z-10" alt="" autoplay playsinline muted loop />


        <img v-if="projectOneHover" src="@/assets/images/GROUP-50.png"
            class="aspect-auto min-w-fit fixed left-0 top-0 -z-10" alt="">

        <img v-if="projectTwoHover" src="@/assets/images/image7.png"
            class="aspect-auto h-[60vh] fixed bottom-10 left-[20vw] -z-10" alt="">

        <img v-if="projectThreeHover" src="@/assets/images/project-3.png"
            class="aspect-auto h-[60vh] fixed top-0 left-0 -z-10" alt="">

        <img v-if="projectThreeHover" src="@/assets/images/project-3-2.png"
            class="aspect-auto min-w-fit fixed right-[10vw] bottom-10 -z-10">
    </div>
</template>

<script setup lang="ts">
const projectOneHover = ref(false)
const projectTwoHover = ref(false)
const projectThreeHover = ref(false)
</script>
