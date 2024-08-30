<template>
    <div class="w-full text-black">
        <div class="w-full h-[82.59vh] relative overflow-clip cursor-none">
            <video @click="toggleFullScreen" src="@/assets/images/Guayec_WorkPage.mp4"
                class="h-full pointer-events-auto w-full object-cover" muted loop autoplay playsinline></video>
            <p v-show="moveAnimationEnabled" ref="cursor" class="absolute top-10 z-10 font-medium pointer-events-none">
                WATCH VIDEO</p>
        </div>

        <div class="w-full flex items-start">
            <div class="w-[40.31%]">
                <img src="@/assets/images/image-four.png" class="w-full" alt="">
            </div>

            <div class="w-[28.33%] p-3">
                <h2 class="font-medium uppercase">
                    MONUMENTA. nueve encarnaciones <br> guanches
                </h2>

                <p class="font-light mt-3">In 'Monumenta. Nine Guanche Incarnations', I aim to give visibility to the
                    forgotten Guanche woman and question the ways in which the pre-colonial past is represented from a
                    contemporary perspective. Through the observation of various monuments, I undertake a historical
                    analysis to resolve the enigmas underlying the underrepresentation of these subaltern identities.
                </p>

                <p class="font-light mt-3"> Guanche women held active roles in the communities of pre-Hispanic Tenerife.
                    With colonialism, the
                    aboriginal society came to be regulated by patriarchal premises that perpetuated certain narratives
                    while obscuring others, leading to a collective amnesia of the otherness. Through an artistic,
                    historical, and social investigation, I developed nine identities inspired by the landscapes of each
                    of the ancient demarcations.

                </p>
            </div>
        </div>

        <div class="w-[84.38%]">
            <img src="@/assets/images/image-five.png" class="w-full" alt="">
        </div>

        <div class="flex justify-between">
            <div class="ml-2 w-[23.54%]">
                <img src="@/assets/images/image-seven.png" class="w-full" alt="">
            </div>
            <div class="w-[59.53%]">
                <img src="@/assets/images/image-six.png" class="w-full" alt="">
            </div>
        </div>

        <div class="flex items-start">
            <div class="w-[40.57%]">
                <img class="w-full" src="@/assets/images/image-eight.png" alt="">
            </div>
            <p class="p-1 lg:pl-2">MUSEO DE LA NATURALEZA Y ARQUEOLOGÍA, 2022. TENERIFE. NINE 3D PRINTED SCULPTURES AND
                SOUND</p>
        </div>

        <div class="flex items-start">
            <div class="w-[40.57%] p-3">
                <div class="w-[69.98%]">
                    <h2 class="font-medium uppercase">MONUMENTA. nueve encarnaciones <br> guanches</h2>

                    <p>
                        In 'Monumenta. Nine Guanche Incarnations', I aim to give visibility to the forgotten Guanche
                        woman and question the ways in which the pre-colonial past is represented from a contemporary
                        perspective. Through the observation of various monuments, I undertake a historical analysis to
                        resolve the enigmas underlying the underrepresentation of these subaltern identities.

                    </p>
                    <p class="mt-3">
                        Guanche women held active roles in the communities of pre-Hispanic Tenerife. With colonialism,
                        the aboriginal society came to be regulated by patriarchal premises that perpetuated certain
                        narratives while obscuring others, leading to a collective amnesia of the otherness. Through an
                        artistic, historical, and social investigation, I developed nine identities inspired by the
                        landscapes of each of the ancient demarcations.
                    </p>

                </div>
            </div>
            <div class="w-[59.79%]">
                <img class="w-full" src="@/assets/images/image-ten.png" alt="">
            </div>
        </div>

        <div class="flex items-end">
            <div class="w-[55.0%]">
                <img class="w-full" src="@/assets/images/image-nine.png" alt="">
            </div>
            <div class="w-[44.95%]">
                <img src="@/assets/images/image-eleven.png" class="w-full" alt="">
            </div>

        </div>

        <div class="flex items-start mt-20">
            <div class="w-[55.0%] pl-4">
                <h2 class="font-medium">CREDITS</h2>
                <div class="grid grid-cols-2 uppercase mt-3">
                    <div>
                        <p class="hover:text-gray-500 transition-colors duration-300"><span
                                class="font-medium">Title.</span> Monumenta. Nine Guanche Incarnations</p>
                        <p class="hover:text-gray-500 transition-colors duration-300"><span
                                class="font-medium">Artist.</span> Yapci Ramos</p>
                        <p class="hover:text-gray-500 transition-colors duration-300"><span
                                class="font-medium">Assistance.</span> Marina Ribot, María Vila, and Iris Verge</p>
                        <p class="hover:text-gray-500 transition-colors duration-300"><span
                                class="font-medium">Craftsmanship.</span> Taller Afoche (Pedro Benítez Reyes and Isabel
                            Padrón Herrera) David Guijarro</p>
                        <p class="hover:text-gray-500 transition-colors duration-300"><span class="font-medium">Design
                                and Sewing.</span> Gina Berenguer Barnils</p>
                        <p class="hover:text-gray-500 transition-colors duration-300"><span class="font-medium">Makeup
                                and Hairstyling.</span> Bárbara Mattel</p>
                        <p class="hover:text-gray-500 transition-colors duration-300"><span class="font-medium">Studio
                                Photography.</span> Enric Badrinas</p>
                        <p class="hover:text-gray-500 transition-colors duration-300"><span
                                class="font-medium">Technical Support.</span> Simone Orso</p>
                        <p class="hover:text-gray-500 transition-colors duration-300"><span
                                class="font-medium">Transportation.</span> Loyter</p>
                        <p class="hover:text-gray-500 transition-colors duration-300"><span
                                class="font-medium">Exhibition Setup.</span> Alfonso Delgado and the MUNA</p>
                        <p class="hover:text-gray-500 transition-colors duration-300"><span
                                class="font-medium">Texts.</span> Nora Navarro</p>
                    </div>

                    <div>
                        <p class="hover:text-gray-500 transition-colors duration-300"><span class="font-medium">3D
                                Scanning.</span> LABS3D</p>
                        <p class="hover:text-gray-500 transition-colors duration-300"><span class="font-medium">3D
                                Digital Craftsmanship.</span> Daniela Bazzi and Maria Vilaseca</p>
                        <p class="hover:text-gray-500 transition-colors duration-300"><span class="font-medium">3D
                                Digital Printing.</span> Manuel Román Camacho</p>
                        <p class="hover:text-gray-500 transition-colors duration-300"><span class="font-medium">Voice
                                Accompaniment.</span> LAVOZDETARA</p>
                        <p class="hover:text-gray-500 transition-colors duration-300"><span class="font-medium">Voice
                                and Sound.</span> Yapci Ramos</p>
                        <p class="hover:text-gray-500 transition-colors duration-300"><span class="font-medium">Sound
                                Editing and Mastering.</span> Picnic Sound Studio</p>
                        <p class="hover:text-gray-500 transition-colors duration-300"><span class="font-medium">3D
                                Simulation.</span> Adolf Alcañiz</p>
                        <p class="hover:text-gray-500 transition-colors duration-300"><span
                                class="font-medium">Technical Support.</span> Simone Orso</p>
                        <p class="hover:text-gray-500 transition-colors duration-300"><span
                                class="font-medium">Transportation.</span> Loyter</p>
                        <p class="hover:text-gray-500 transition-colors duration-300"><span
                                class="font-medium">Exhibition Setup.</span> Alfonso Delgado and the MUNA</p>
                        <p class="hover:text-gray-500 transition-colors duration-300"><span
                                class="font-medium">Texts.</span> Nora Navarro</p>
                    </div>
                </div>
            </div>
            <div class="w-[44.95%]">
                <h2 class="font-medium">DOWNLOADS</h2>

                <div class="mt-3">
                    <p class="hover:text-gray-500 transition-colors duration-300">CATALOGUE</p>
                    <p class="hover:text-gray-500 transition-colors duration-300">3D VIDEOS</p>
                    <p class="hover:text-gray-500 transition-colors duration-300">BROCHURE</p>
                </div>
            </div>
        </div>
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
            console.log(`Error attempting to enable full-screen mode: ${err.message}`);
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
