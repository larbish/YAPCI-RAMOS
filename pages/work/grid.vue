<template>
    <div class="text-black w-full pt-44 bg-white">
        <div class="px-2 lg:px-40 flex uppercase tracking-wide items-center gap-x-3 sticky top-44 text-white mix-blend-difference ">
            <NuxtLink to="/work">List</NuxtLink>
            <NuxtLink to="/work/grid" class="border-b border-spacing-0  border-white">Grid</NuxtLink>
        </div>

        <div class="w-full hidden lg:block">
            <div class="w-full flex mt-14">
                <section class="flex items-start w-full">
                    <NuxtLink to="/projects/parto"
                        class="flex flex-col cursor-pointer w-[40.31%] min-w-[40.31%] hover:text-gray-400 transition-colors duration-300">
                        <img src="/work/parto/Parto_019.png" class="w-full max-w-full min-w-full pr-[1px]"
                            alt="">
                        <p class="pl-2.5">PARTO. 2024. INSTALLATION</p>
                    </NuxtLink>

                    <NuxtLink to="/projects/identity"
                        class="flex flex-col cursor-pointer w-[29.27%] min-w-[29.27%] hover:text-gray-400 transition-colors duration-300">
                        <img src="@/assets/images/grid-image-two.png" class="w-full max-w-full min-w-full pr-[1px]"
                            alt="">
                        <p class="pl-2.5">IDENTITY. 2019. AUDIOVISUAL</p>
                    </NuxtLink>

                    <NuxtLink to="/projects/monumenta"
                        class="flex flex-col cursor-pointer w-[30.26%] min-w-[30.26%] hover:text-gray-400 transition-colors duration-300">
                        <img src="@/assets/images/grid-image-one.png" class="w-full max-w-full min-w-full pr-[1px]"
                            alt="">
                        <p class="pl-2.5">MONUMENTA. 2022. INSTALLATION</p>
                    </NuxtLink>
                </section>
            </div>

            <div class="w-full flex mt-10">
                <section class="flex items-start w-full">
                    <NuxtLink to="/projects/red-hot"
                        class="flex flex-col cursor-pointer w-[24.6%] min-w-[24.6%] hover:text-gray-400 transition-colors duration-300">
                        <img src="@/assets/images/grid-image-four.png" class="w-full max-w-full min-w-full pr-[1px]"
                            alt="">
                        <p class="pl-2.5">RED-HOT. 2018. AUDIOVISUAL</p>
                    </NuxtLink>
                    <NuxtLink to="/projects/lloro"
                        class="flex flex-col cursor-pointer w-[75.2%] min-w-[75.2%] hover:text-gray-400 transition-colors duration-300">
                        <!--      <img src="@/assets/images/grid-image-five.png" class="w-full max-w-full min-w-full pr-[1px]"
                            alt=""> -->
                        <video src="@/assets/images/Video_IdontMind_WorkPage.mp4" muted loop autoplay
                            playsinline></video>
                        <p class="pl-2.5">LLORO. 2021. AUDIOVISUAL - INSTALLATION</p>
                    </NuxtLink>

                </section>
            </div>
            <div class="w-full flex mt-10">
                <section class="flex items-start w-full">
                    <NuxtLink to="/projects/i-dont-mind"
                        class="flex flex-col cursor-pointer w-[40.3%] min-w-[40.3%] hover:text-gray-400 transition-colors duration-300">
                        <img src="@/assets/images/grid-image-six.png" class="w-full max-w-full min-w-full pr-[1px]"
                            alt="">
                        <p class="pl-2.5">I DON’T MIND. 2018. AUDIOVISUAL</p>
                    </NuxtLink>
                    <NuxtLink to="/projects/guayec"
                        class="flex flex-col cursor-pointer w-[59.6%] min-w-[59.6%] hover:text-gray-400 transition-colors duration-300">
                        <img src="@/assets/images/grid-image-seven.png" class="w-full max-w-full min-w-full pr-[1px]"
                            alt="">
                        <p class="pl-2.5">GUAYEC. 2021. AUDIOVISUAL</p>
                    </NuxtLink>

                </section>
            </div>

            <div class="w-full flex mt-10">
                <section class="flex items-start w-full">
                    <NuxtLink to="/projects/perras-y-putas"
                        class="flex flex-col cursor-pointer w-[40.3%] min-w-[42.3%] hover:text-gray-400 transition-colors duration-300">
                        <img src="/work-list/image 24.png" class="w-full max-w-full min-w-full pr-[1px]"
                            alt="">
                        <p class="pl-2.5">PERRAS Y PUTAS. 2015. PHOTOGRAPHY</p>
                    </NuxtLink>
                </section>
            </div>
           <!--  <div class="w-full flex mt-10">
                <section class="flex items-start w-full">
                    <NuxtLink
                        class="flex flex-col cursor-pointer w-[55.05%] min-w-[55.05%] hover:text-gray-400 transition-colors duration-300">
                        <img src="@/assets/images/grid-image-eight.png" class="w-full max-w-full min-w-full pr-[1px]"
                            alt="">
                        <p class="pl-2.5">MONUMENTA. 2022. INSTALLATION</p>
                    </NuxtLink>
                    <NuxtLink
                        class="flex flex-col cursor-pointer w-[44.79%] min-w-[44.79%] hover:text-gray-400 transition-colors duration-300">
                        <img src="@/assets/images/grid-image-nine.png" class="w-full max-w-full min-w-full pr-[1px]"
                            alt="">
                        <p class="pl-2.5">MONUMENTA. 2022. INSTALLATION</p>
                    </NuxtLink>

                </section>
            </div> -->
        </div>


        <div class="w-full  lg:hidden">
            <div class="w-full flex mt-14">
                <section class="grid grid-cols-2 items-start w-full gap-y-10 ">
                    <NuxtLink to="/projects/parto" class="flex flex-col cursor-pointer w-full hover:text-gray-400 transition-colors duration-300">
                        <img src="@/assets/images/grid-image-res-three.png" class="w-full max-w-full min-w-full pr-[1px]"
                            alt="">
                        <p class="pl-2.5">PARTO. 2024. INSTALLATION</p>
                    </NuxtLink>

                    <NuxtLink to="/projects/identity" class="flex flex-col cursor-pointer w-full hover:text-gray-400 transition-colors duration-300">
                        <img src="@/assets/images/grid-image-res-two.png" class="w-full max-w-full min-w-full pr-[1px]"
                            alt="">
                        <p class="pl-2.5">IDENTITY. 2019. AUDIOVISUAL</p>
                    </NuxtLink>

                    <NuxtLink to="/projects/monumenta" class="flex flex-col cursor-pointer w-full hover:text-gray-400 transition-colors duration-300">
                        <img src="@/assets/images/grid-image-res-one.png"
                            class="w-full max-w-full min-w-full pr-[1px]" alt="">
                        <p class="pl-2.5">MONUMENTA. 2022. INSTALLATION</p>
                    </NuxtLink>

                    <NuxtLink to="/projects/red-hot" class="flex flex-col cursor-pointer w-full hover:text-gray-400 transition-colors duration-300">
                        <img src="@/assets/images/grid-image-res-four.png" class="w-full max-w-full min-w-full pr-[1px]"
                            alt="">
                        <p class="pl-2.5">RED-HOT. 2018. AUDIOVISUAL</p>
                    </NuxtLink>

                    <NuxtLink to="/projects/lloro"
                        class="flex flex-col cursor-pointer w-full col-span-2 hover:text-gray-400 transition-colors duration-300">
                        <img src="@/assets/images/grid-image-res-five.png" class="w-full max-w-full min-w-full pr-[1px]"
                            alt="">
                        <p class="pl-2.5">LLORO. 2021. AUDIOVISUAL - INSTALLATION</p>
                    </NuxtLink>

                    <NuxtLink to="/projects/i-dont-mind" class="flex flex-col cursor-pointer w-full hover:text-gray-400 transition-colors duration-300">
                        <img src="@/assets/images/grid-image-res-six.png" class="w-full max-w-full min-w-full pr-[1px]"
                            alt="">
                        <p class="pl-2.5">I DON’T MIND. 2018. AUDIOVISUAL</p>
                    </NuxtLink>

                    <NuxtLink to="/projects/guayec" class="flex flex-col cursor-pointer w-full hover:text-gray-400 transition-colors duration-300">
                        <img src="@/assets/images/grid-image-res-seven.png"
                            class="w-full max-w-full min-w-full pr-[1px]" alt="">
                        <p class="pl-2.5">GUAYEC. 2021. AUDIOVISUAL</p>
                    </NuxtLink>

                    <NuxtLink to="/projects/perras-y-putas" class="flex flex-col cursor-pointer w-full hover:text-gray-400 transition-colors duration-300">
                        <img src="/work-list/image 24.png" class="w-full max-w-full min-w-full pr-[1px]"
                            alt="">
                        <p class="pl-2.5">PERRAS Y PUTAS. 2015. PHOTOGRAPHY</p>
                    </NuxtLink>
                </section>

            </div>
        </div>



        <p class=" mt-16 text-center lg:text-left lg:mt-64 pl-2 pb-1 ">

            ©2024 YAPCI RAMOS <br>
            ALL RIGHTS RESERVED
        </p>
    </div>
</template>

<script setup lang="ts">

</script>
