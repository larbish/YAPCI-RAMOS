<template>
    <div class="w-full text-black">
        <div class="w-full h-[82.59vh] relative overflow-clip cursor-none ">
            <video @click="toggleFullScreen" @mouseenter="moveAnimationEnabled = true"
                @mouseleave="moveAnimationEnabled = false" src="public/work/parto/cover-video.mp4"
                class="h-full pointer-events-auto w-full object-cover" muted loop autoplay playsinline></video>
            <p v-show="moveAnimationEnabled" ref="cursor"
                class="absolute top-10  font-medium pointer-events-none mix-blend-difference text-white">
                WATCH VIDEO</p>
        </div>

        <div class="w-full flex items-start">
            <div class="w-[82%] p-3 leading-[1.1]">
                <h2 class=" uppercase font-medium">
                    Parto. INSTALLATION
                </h2>

                <p class="mt-3 font-normal">In Parto, I create an allegory that explores the process of questioning,
                    shedding, and liberating oneself from the societal ideologies surrounding motherhood to pave the way
                    for alternative perspectives. This concept is materialized through the construction of a symbolic
                    and immersive corridor that gradually narrows, leading to “the other side.” It reflects three stages
                    marked by sexual desire, the yearning for motherhood, and the pursuit of freedom, covering the age
                    range of 35 to 46. This installation delves into topics that are increasingly prominent in social
                    and feminist discourse, resonating with many women of my generation. These issues are
                    recontextualized within a historical moment undergoing a paradigm shift regarding perceptions of
                    motherhood and fertility. The work acknowledges the widespread decline in the willingness to commit,
                    influenced by growing individualism, coupled with the challenges posed by neoliberalism and the
                    absence of supportive policies for work-life balance. 
                </p>
            </div>
        </div>

        <div class="flex justify-between">
            <div class="ml-2 w-[39.27%]">
                <img src="/work/parto/Parto_008.jpg" class="w-full" alt="">
                <p>ARTS SANTA MÒNICA</p>
            </div>
            <div class="w-[60.73%]">
                <img src="public/work/parto/1MDeulofeu_YRamos-mi jueves 2.jpg" class="w-full" alt="">
            </div>
        </div>

        <div class="flex items-start mt-10">
            <div class="w-[70.05%]">
                <img class="w-full" src="/work/parto/2243fs.png" alt="">
            </div>

            <div class="w-[29.95%]">
                <img src="/work/parto/Parto_029.jpg" class="w-full" alt="">
            </div>
        </div>

        <div class="flex items-start p-3">
            <div class="w-[40.57%] ">
                <div class="w-[69.98%] leading-[1.1]">

                    <p class="mt-3">
                        The artistic processes involve a journey of germination, imagination, and birth to inaugurate a
                        horizon, much like the body in the process of gestating ideas, questions, or life gives birth to
                        an unexplored path. In this play of parallels and possibilities around the desire for creation
                        or procreation, the piece ‘Parto’ is constructed. 



                    </p>
                    <p class="mt-3">
                        Nora Navarro / Cultural Writer 
                    </p>

                </div>
            </div>
            <div class="w-[59.79%]">
    <!--            <video src="/work/parto/Parto_Yapci_Ramos__V1-0003.mp4" class="w-full object-cover" muted loop autoplay playsinline></video> -->
                <img src="/work/parto/Parto_019.png" class="w-full" alt="">
            </div>
        </div>

        <div class="w-full p-3">
            <img src="/work/parto/Parto_026.jpg" class="w-full" alt="">
        </div>

        <div class="flex items-start">
            <div class="w-[60.59%]">
                <video src="/work/parto/Parto_Yapci_Ramos__V1-0003.mp4" class="w-full" muted loop autoplay playsinline></video>
            </div>
            <div class="w-[39.41%]">
                <img src="/work/parto/Parto_057.jpg" class="w-full" alt="">
            </div>

        </div>

        <div class="flex items-start mt-20">
            <div class="w-[55.0%] pl-4">
                <h2 class="font-medium">CREDITS</h2>
                <div class="grid grid-cols-2 gap-x-2 uppercase mt-3 leading-[1.3]">
                    <div>
                        <p class="hover:text-gray-500 transition-colors duration-300 cursor-pointer"><span
                                class="font-medium">Title.</span> Monumenta. Nine Guanche Incarnations</p>
                        <p class="hover:text-gray-500 transition-colors duration-300 cursor-pointer"><span
                                class="font-medium">Artist.</span> Yapci Ramos</p>
                        <p class="hover:text-gray-500 transition-colors duration-300 cursor-pointer"><span
                                class="font-medium">Assistance.</span> Marina Ribot, María Vila, and Iris Verge</p>
                        <p class="hover:text-gray-500 transition-colors duration-300 cursor-pointer"><span
                                class="font-medium">Craftsmanship.</span> Taller Afoche (Pedro Benítez Reyes and Isabel
                            Padrón Herrera) David Guijarro</p>
                        <p class="hover:text-gray-500 transition-colors duration-300 cursor-pointer"><span
                                class="font-medium">Design
                                and Sewing.</span> Gina Berenguer Barnils</p>
                        <p class="hover:text-gray-500 transition-colors duration-300 cursor-pointer"><span
                                class="font-medium">Makeup
                                and Hairstyling.</span> Bárbara Mattel</p>
                        <p class="hover:text-gray-500 transition-colors duration-300 cursor-pointer"><span
                                class="font-medium">Studio
                                Photography.</span> Enric Badrinas</p>
                        <p class="hover:text-gray-500 transition-colors duration-300 cursor-pointer"><span
                                class="font-medium">Technical Support.</span> Simone Orso</p>
                        <p class="hover:text-gray-500 transition-colors duration-300 cursor-pointer"><span
                                class="font-medium">Transportation.</span> Loyter</p>
                        <p class="hover:text-gray-500 transition-colors duration-300 cursor-pointer"><span
                                class="font-medium">Exhibition Setup.</span> Alfonso Delgado and the MUNA</p>
                        <p class="hover:text-gray-500 transition-colors duration-300 cursor-pointer"><span
                                class="font-medium">Texts.</span> Nora Navarro</p>
                    </div>

                    <div>
                        <p class="hover:text-gray-500 transition-colors duration-300 cursor-pointer"><span
                                class="font-medium">3D
                                Scanning.</span> LABS3D</p>
                        <p class="hover:text-gray-500 transition-colors duration-300 cursor-pointer"><span
                                class="font-medium">3D
                                Digital Craftsmanship.</span> Daniela Bazzi and Maria Vilaseca</p>
                        <p class="hover:text-gray-500 transition-colors duration-300 cursor-pointer"><span
                                class="font-medium">3D
                                Digital Printing.</span> Manuel Román Camacho</p>
                        <p class="hover:text-gray-500 transition-colors duration-300 cursor-pointer"><span
                                class="font-medium">Voice
                                Accompaniment.</span> LAVOZDETARA</p>
                        <p class="hover:text-gray-500 transition-colors duration-300 cursor-pointer"><span
                                class="font-medium">Voice
                                and Sound.</span> Yapci Ramos</p>
                        <p class="hover:text-gray-500 transition-colors duration-300 cursor-pointer"><span
                                class="font-medium">Sound
                                Editing and Mastering.</span> Picnic Sound Studio</p>
                        <p class="hover:text-gray-500 transition-colors duration-300 cursor-pointer"><span
                                class="font-medium">3D
                                Simulation.</span> Adolf Alcañiz</p>
                        <p class="hover:text-gray-500 transition-colors duration-300 cursor-pointer"><span
                                class="font-medium">Technical Support.</span> Simone Orso</p>
                        <p class="hover:text-gray-500 transition-colors duration-300 cursor-pointer"><span
                                class="font-medium">Transportation.</span> Loyter</p>
                        <p class="hover:text-gray-500 transition-colors duration-300 cursor-pointer"><span
                                class="font-medium">Exhibition Setup.</span> Alfonso Delgado and the MUNA</p>
                        <p class="hover:text-gray-500 transition-colors duration-300 cursor-pointer"><span
                                class="font-medium">Texts.</span> Nora Navarro</p>
                    </div>
                </div>
            </div>
            <div class="w-[44.95%]">
                <h2 class="font-medium">DOWNLOADS</h2>

                <div class="mt-3 leading-[1.3]">
                    <p class="hover:text-gray-500 transition-colors duration-300 cursor-pointer">CATALOGUE</p>
                    <p class="hover:text-gray-500 transition-colors duration-300 cursor-pointer">3D VIDEOS</p>
                    <p class="hover:text-gray-500 transition-colors duration-300 cursor-pointer">BROCHURE</p>
                </div>
            </div>
        </div>

        <p class=" mt-16 text-center lg:text-left lg:mt-64 pl-2 pb-1 leading-[1.1]">

            ©2024 YAPCI RAMOS <br>
            ALL RIGHTS RESERVED
        </p>
    </div>
</template>

<script setup>
import gsap from 'gsap';
const moveAnimationEnabled = useState('moveAnimationEnabled')
const cursor = ref(null);

const handleMouseMove = (e) => {
    gsap.to(cursor.value, {
        duration: 0,
        x: e.clientX - 40,
        y: e.clientY - 40,
    });
};

const toggleFullScreen = (event) => {
    const videoElement = event.currentTarget;
    if (!document.fullscreenElement) {
        videoElement.requestFullscreen().catch(err => {
            /*           console.log(`Error attempting to enable full-screen mode: ${err.message}`); */
        });
    }
};


onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove);
});
</script>
