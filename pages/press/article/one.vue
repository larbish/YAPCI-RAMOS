<template>
    <div class="w-full bg-white min-h-screen">
        <article class="hidden lg:flex flex-col w-full">
            <div class="flex justify-between w-full">
                <div class="w-[33.6%]">
                    <img src="@/assets/images/press-image-one.png" class="w-full object-cover" alt="">
                    <img src="@/assets/images/press-image-two.png" class="w-full object-cover" alt="">
                    <img src="@/assets/images/press-image-three.png" class="w-full object-cover" alt="">

                    <p class="mt-16 text-center lg:text-left lg:mt-64 pl-2 pb-1 leading-[1.3] text-black">
                        ©2024 YAPCI RAMOS <br>
                        ALL RIGHTS RESERVED
                    </p>
                </div>
                <div class="w-[33.5%]">
                    <img src="@/assets/images/press-image-four.png" class="w-full object-cover" alt="">
                    <img src="@/assets/images/press-image-five.png" class="w-full object-cover" alt="">
                </div>
            </div>

            <div class="fixed top-0 w-full flex justify-center">
                <div class="w-[33.03%] h-screen flex flex-col bg-white text-black overflow-y-auto no-scrollbar"
                    data-lenis-prevent>
                    <div
                        class="w-full flex flex-col items-center sticky lg:pt-36 2xl:pt-48 pb-8 top-0 bg-custom-gradient">
                        <h3 class="uppercase font-medium">La Provincia</h3>
                        <div class="flex w-full px-2 justify-between items-center mt-1">
                            <div class="min-w-fit">
                                <img src="@/assets/icons/chevron-left.svg" class="h-5" alt="">
                            </div>
                            <div class="w-full">
                                <h2
                                    class="lg:text-xl 2xl:text-2xl font-serif font-light text-center uppercase !leading-none px-10 arizona-font">
                                    Parir y renacer de Yapci Ramos en el Santa Mònica de Barcelona
                                </h2>
                                <p class="uppercase text-center">BY NORA NAVARRO. MARCH 2th, 2024</p>
                            </div>
                            <div class="min-w-fit">
                                <img src="@/assets/icons/chevron-right.svg" class="h-5" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="space-y-4 px-1.5 lg:mt-4 2xl:mt-10 leading-[1.3]">
                        <p v-for="(paragraph, index) in textContent" :key="index">
                            {{ paragraph }}
                        </p>
                    </div>

                    <div class="font-medium uppercase px-1.5 mt-6 pb-10">
                        <button>DOWNLOAD ARTICLE</button>
                    </div>
                </div>
            </div>
        </article>

        <article class="lg:hidden text-black">
            <div class="w-full flex flex-col items-center sticky pt-36 top-0 pb-10 bg-custom-gradient ">
                <h3 class="uppercase font-medium">La Provincia</h3>
                <div class="flex w-full px-3 justify-between items-center mt-1.5">
                    <div class="min-w-fit">
                        <img src="@/assets/icons/chevron-left.svg" class="h-6 sm:h-10" alt="">
                    </div>
                    <div class="w-full px-2.5 mt-1">
                        <h2
                            class="text-2xl sm:text-3xl px-4 font-serif font-light text-center uppercase leading-[1] arizona-font">
                            Parir y renacer de Yapci Ramos en el Santa Mònica de Barcelona
                        </h2>
                        <p class="uppercase lg:text-base 2xl:text-lg text-center mt-4">BY NORA NAVARRO. MARCH 2th, 2024
                        </p>
                    </div>
                    <div class="min-w-fit">
                        <img src="@/assets/icons/chevron-right.svg" class="h-6 sm:h-10" alt="">
                    </div>
                </div>
            </div>

            <div class="space-y-3 px-2.5 mt-10 leading-[1.3]">
                <p v-for="(paragraph, index) in textContent" :key="index">
                    {{ paragraph }}
                </p>
            </div>

            <div class="font-medium uppercase px-1.5 mt-6 pb-10">
                <button>DOWNLOAD ARTICLE PDF</button>
            </div>
            <div class="flex flex-col w-full mt-1">
                <img src="@/assets/images/press-image-one.png" class="w-full object-cover" alt="">
                <img src="@/assets/images/press-image-two.png" class="w-full object-cover" alt="">
                <img src="@/assets/images/press-image-three.png" class="w-full object-cover" alt="">
                <img src="@/assets/images/press-image-four.png" class="w-full object-cover" alt="">
                <img src="@/assets/images/press-image-five.png" class="w-full object-cover" alt="">
            </div>
            <p class="mt-8 text-center lg:text-left lg:mt-64 pl-2 pb-6 leading-[1.3] text-black">
                ©2024 YAPCI RAMOS <br>
                ALL RIGHTS RESERVED
            </p>
        </article>
        <div ref="triggerElement" class="h-0.5 absolute bottom-0 w-full"></div> <!-- Trigger element at the bottom -->
    </div>

    <Flash v-if="displayFlash" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const triggerElement = ref(null);
const displayFlash = ref(false);
const textContent = ref([
    "Los procesos artísticos entrañan un viaje de germinación, imaginación y alumbramiento para inaugurar un horizonte, igual que el cuerpo en proceso de gestación de ideas, de preguntas o de vida da a luz a un camino inexplorado. En este juego de paralelismos y posibilidades en torno al deseo de Puig Punyet, que plantea una reflexión múltiple y diversa sobre los umbrales de la conciencia y el impulso inconsciente de trascender la realidad, bajo las distintas miradas y lenguajes creativos de diez artistas contemporáneos. En esta línea, Ramos crea un microcosmos instalativo que gravita sobre los cuestionamientos del deseo y la maternidad en tres estadios vitales de la edad adulta, marcados por el deseo sexual, el deseo de ser madre y el deseo de ser libre.",
    "«En Parto construyo una alegoría sobre el proceso de cuestionar, expulsar y desemba- razarme de la carga de este ideario social en torno a la maternidad para poder abrir paso hacia otros horizontes», explica la artista, quien subraya que esta pieza «aborda temas que cada vez están más presentes en el debate social y feminista».",
    "Pero en el último tramo del cerco, Ramos inventa su propio parto o punto de partida, donde traza un nuevo umbral o línea de expulsión simbólica desde la entraña, para engendrar todos los caminos posibles renaciendo dentro de sí misma. «La vida pasa y sigue. Me apropio de mi cuerpo. Disfruto de mi libertad», declama la artista en el clip promocional de la obra.",
    "Y es que, para la artista, Parto explora dudas y temores «que atraviesan a muchas mujeres de mi generación y que se recontextualizan en un momento histórico de cambio de parádigmas en relación con las nociones de maternidad y fecundidad». En este sentido, Ramos destaca aspectos",
    "como «el descenso generalizado de la capacidad de compromiso en un contexto marcado por un creciente individualismo y, por otro lado, por una precariedad cada vez mayor como consecuencia del neoliberalismo y la falta de políticas de conciliación».",
    "Como sucede en el conjunto de la obra de Ramos, sus distintas piezas se interrelacionan e interpelan como un juego de matrioskas que imprimen nuevas capas de significado a su microcosmos artístico. Por ejemplo, Parto alberga resonancias de la obra Red-Hot (2018), una videoinstalación artística que la artista inauguró en la Galería Catinca Tabacaru de Nueva York, en la que inscribe en la pared de mármol de su ducha una serie de palabras y preguntas como un ritual escrito con la tinta de su sangre menstrual. Y poco más de un lustro después, Parto nace como un nuevo ejercicio de desnudez que nombra los tabúes femininos mediante una formalización estética cruda, directa, y de una gran potencia visual y sanadora.",
    "Por tanto, esa naturaleza interrogante y al mismo tiempo visceral, que acontece en las coordenadas del territorio, el cuerpo y el deseo, con el predominio del color rojo sobre blanco, conecta ambas piezas a trávés del tiempo y del espacio para mostrar la esencia de lo humano en el proceso de desnudarse. Como un paso que encierra una continuidad: Parir para renacer."
]);

// Intersection Observer to trigger flash effect when element is in view
onMounted(() => {
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
});

// Function to be triggered when intersection happens
function triggerFunction() {
    //.log('Triggered!');
    displayFlash.value = true;
    setTimeout(() => {
        displayFlash.value = false;
    }, 100);
}

</script>



<style scoped>
.arizona-font {
    font-family: 'ABC Arizona Serif';
}
</style>