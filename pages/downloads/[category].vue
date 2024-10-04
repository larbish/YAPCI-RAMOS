<template>
    <div class="h-[100dvh] w-full overflow-x-clip bg-white relative text-black">
        <div ref="wrapper"
            class="wrapper flex overflow-x-scroll lg:overflow-x-auto h-full flex-nowrap gap-x-10 bg-white leading-[1.4]">
            <section v-for="(section, index) in filteredSections" :key="index"
                class="download-scroll-section w-fit h-full pt-56 first:pl-4 lg:first:pl-64 gap-x-10 lg:gap-x-8 lg:pl-8 flex-shrink-0 d-flex line-right  cursor-default">
                <div class="flex flex-col leading-[1.1]">
                    <p class="font-medium">{{ section.title }}</p>
                    <div
                        class=" min-w-max lg:min-w-max mt-0.5 grid grid-flow-col grid-rows-8 gap-x-10 lg:grid-rows-10 lg:grid-flow-col leading-[1.1]">
                        <a v-for="(item, idx) in section.items" target="_blank" download :href="item.path" :key="idx"
                            class="grid grid-cols-2 lg:grid-cols-5  uppercase hover:text-neutral-400 gap-x-4 cursor-pointer">
                            <p class="lg:col-span-3 leading-[1.1]">{{ item.title }}</p>
                            <p class="lg:col-span-2 leading-[1.1]">{{ item.author }}</p>
                        </a>
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

        <div class="fixed bottom-[10vh] lg:bottom-[20vh] w-full flex items-center justify-center">
            <div class="relative h-fit max-w-60 lg:max-w-fit lg:w-fit">
                <div
                    class="flex items-start text-[0.15rem] leading-[1.1] sm:leading-[1.1] sm:text-[0.14rem] 2xl:text-[0.2rem] sm:gap-x-0 2xl:leading-[1.1] lg:gap-x-0.5">
                    <ul v-for="(section, index) in filteredSections" :key="index" class="p-0 m-0">
                        <!-- Added classes to remove padding and margin -->
                        <div class="flex flex-col">
                            <p class="font-medium m-0 p-0">{{ section.title }}</p> <!-- Remove margin and padding -->
                            <div class="grid grid-rows-10 grid-flow-col gap-0 overflow-hidden"> <!-- Ensure gap is 0 -->
                                <div v-for="(item, idx) in section.items" :key="idx"
                                    class="max-w-9 whitespace-break-spaces grid gap-0 max-h-fit w-9 min-w-9 lg:min-w-fit lg:w-fit lg:max-w-fit">
                                    <p class="w-full leading-[1.1] h-min max-h-min m-0 p-0">{{ item.title }}</p>
                                    <!-- Remove margin and padding -->
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
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from "gsap";
import Draggable from "gsap/Draggable";
const progressIndicator = ref(null);
const router = useRouter()
const route = useRoute()

const sections = ref([
    {
        title: "READS",
        items: [
            {
                title: "WHERE I COME FROM AND WHERE I BELONG",
                author: "BARBARA POLLA.pdf",
                path: "/download/READS//WHERE I COME FROM AND WHERE I BELONG. BARBARA POLLA.pdf",
            }, {
                title: "EL SILBO DE ORO",
                author: "DILLON COHEN.pdf",
                path: "/download/READS//EL SILBO DE ORO. DILLON COHEN.pdf",
            }, {
                title: "CURIOSITÉS CONTEMPORAINES",
                author: "LISA TOUBAS.pdf",
                path: "/download/READS//CURIOSITÉS CONTEMPORAINES. LISA TOUBAS.pdf",
            },
            {
                title: "TO THE GUTS OF YAPCI RAMOS",
                author: "NORA NAVARRO.pdf",
                path: "/download/READS//TO THE GUTS OF YAPCI RAMOS. NORA NAVARRO.pdf",
            }, {
                title: "THE ROOTS OF FLIGHT",
                author: "NORA NAVARRO.pdf",
                path: "/download/READS//THE ROOTS OF FLIGHT. NORA NAVARRO.pdf",
            }, {
                title: "YAPCI RAMOS, SHOW ME",
                author: "LILLY WEI.pdf",
                path: "/download/READS//YAPCI RAMOS, SHOW ME. LILLY WEI.pdf",
            }, {
                title: "GLANCES, VOICE AND BLOOD",
                author: "THE INSURRECTION OF THE BODY. IMMA PRIETO.pdf",
                path: "/download/READS//GLANCES, VOICE AND BLOOD. THE INSURRECTION OF THE BODY. IMMA PRIETO.pdf",
            },
            {
                title: "NOTHING IS TRUE, EVERYTHING IS LIVING",
                author: "CECILE BOURNE FARRELL.pdf",
                path: "/download/READS//NOTHING IS TRUE, EVERYTHING IS LIVING. CECILE BOURNE FARRELL.pdf",
            },
            {
                title: "REBIRTHING RITUAL",
                author: "NORA NAVARRO.pdf",
                path: "/download/READS//REBIRTHING RITUAL. NORA NAVARRO.pdf",
            }, {
                title: "GUAYEC",
                author: "MARINA RIBOT.pdf",
                path: "/download/READS//GUAYEC. MARINA RIBOT.pdf",
            }, {
                title: "YAPCI RAMOS",
                author: "ELYSSA GOODMAN.pdf",
                path: "/download/READS//YAPCI RAMOS. ELYSSA GOODMAN.pdf",
            }, {
                title: "YAPCI RAMOS",
                author: "SETH CLUETT.pdf",
                path: "/download/READS//YAPCI RAMOS. SETH CLUETT.pdf",
            }, {
                title: "JOURNES OF THE SELF TOWARDS OTHERS",
                author: "NORA NAVARRO.pdf",
                path: "/download/READS//JOURNES OF THE SELF TOWARDS OTHERS. NORA NAVARRO.pdf",
            }, {
                title: "AGENCY AND ACTION",
                author: "JUSTINE LUDWIG.pdf",
                path: "/download/READS//AGENCY AND ACTION. JUSTINE LUDWIG.pdf",
            }, {
                title: "PULSIONES, PREGUNTAS Y MIRADAS",
                author: "YOLANDA PERALTA.pdf",
                path: "/download/READS//PULSIONES, PREGUNTAS Y MIRADAS. YOLANDA PERALTA.pdf",
            }, {
                title: "DOBLE JEU",
                author: "LES AUTRES. JE. CATHARSIS. SIMON NJAMI.pdf",
                path: "/download/READS//DOBLE JEU. LES AUTRES. JE. CATHARSIS. SIMON NJAMI.pdf",
            }
        ]
    },
    {
        title: "PRESS",
        items: [
            {
                title: "PRESS SELECTION",
                author: "EXIBART",
                path: "/download/PRESS/PRESS SELECTION.pdf",
            },
            {
                title: "YAPCI RAMOS",
                author: "PAPER MAGAZINE",
                path: "/download/PRESS/YAPCI RAMOS. PAPER MAGAZINE.pdf",
            }, {
                title: "YAPCI RAMOS REIVINDICA LA MUJER GUANCHE",
                author: "LA VANGUARDIA",
                path: "/download/PRESS/YAPCI RAMOS REIVINDICA LA MUJER GUANCHE. LA VANGUARDIA.pdf",
            }, {
                title: "TO THE GUTS OF YAPCI RAMOS",
                author: "LA PROVINCIA",
                path: "/download/PRESS/TO THE GUTS OF YAPCI RAMOS. LA PROVINCIA.pdf",
            }, {
                title: "14 ARTISTAS CANARIAS ENTRE LAS MÁS INTERNACIONALES DE ESPAÑA",
                author: "LA PROVINCIA",
                path: "/download/PRESS/14 ARTISTAS CANARIAS ENTRE LAS MÁS INTERNACIONALES DE ESPAÑA. LA PROVINCIA.pdf",
            },
            {
                title: "POST-CONCEPTUAL ARTISTS IN THE CANARY ISLAND",
                author: "HYSTERIA",
                path: "/download/PRESS/POST-CONCEPTUAL ARTISTS IN THE CANARY ISLAND. HYSTERIA.pdf",
            }, {
                title: "YAPCI RAMOS, SHOW",
                author: "EL CULTURAL DE CANARIAS",
                path: "/download/PRESS/YAPCI RAMOS, SHOW. EL CULTURAL DE CANARIAS.pdf",
            }, {
                title: "YAPCI RAMOS MAKES ART USING HER OWN BLOOD",
                author: "FORBES",
                path: "/download/PRESS/YAPCI RAMOS MAKES ART USING HER OWN BLOOD. FORBES.pdf",
            }, {
                title: "LA MUJER AUSENTE EN EL ESPACIO PÚBLICO",
                author: "LA PROVINCIA",
                path: "/download/PRESS/LA MUJER AUSENTE EN EL ESPACIO PÚBLICO. LA PROVINCIA.pdf",
            },
            {
                title: "'LLORO', LA ÚLTIMA CREACIÓN DE YAPCI RAMOS",
                author: "RTVC",
                path: "/download/PRESS/'LLORO', LA ÚLTIMA CREACIÓN DE YAPCI RAMOS. RTVC.pdf",
            },
            {
                title: "LA MÚSICA ACOMPAÑA A YAPCI RAMOS EN LA DESPEDIDA DE MUESTRA 'MONUMENTA'",
                author: "DIARIO DE AVISOS",
                path: "/download/PRESS/LA MÚSICA ACOMPAÑA A YAPCI RAMOS EN LA DESPEDIDA DE MUESTRA 'MONUMENTA'. DIARIO DE AVISOS.pdf",
            },
            {
                title: "YAPCI RAMOS PRESENTA 'MONUMENTA' EXIBART",
                author: "pdf",
                path: "/download/PRESS/YAPCI RAMOS PRESENTA 'MONUMENTA' EXIBART.pdf",
            }, {
                title: "YAPCI RAMOS EXPONE 'MONUMENTA'",
                author: "RTVC",
                path: "/download/PRESS/YAPCI RAMOS EXPONE 'MONUMENTA'. RTVC.pdf",
            }, {
                title: "JANET BIGGS ET YAPCI RAMOS, DÉSASTRE, CADASTRE",
                author: "DE L'ART HELVÉTIQUE CONTEMPORAIN",
                path: "/download/PRESS/JANET BIGGS ET YAPCI RAMOS, DÉSASTRE, CADASTRE. DE L'ART HELVÉTIQUE CONTEMPORAIN.pdf",
            },
            {
                title: "YAPCI RAMOS PRESENTA EN TEA 'SHOW ME', SU PRIMERA EXPOSICIÓN INDIVIDUAL",
                author: "20 MINUTOS",
                path: "/download/PRESS/YAPCI RAMOS PRESENTA EN TEA 'SHOW ME', SU PRIMERA EXPOSICIÓN INDIVIDUAL. 20 MINUTOS.pdf",
            },
            {
                title: "YAPCI RAMOS EXHIBE 'WELCOME'",
                author: "CANARIAS7",
                path: "/download/PRESS/YAPCI RAMOS EXHIBE 'WELCOME'. CANARIAS7.pdf",
            }, {
                title: "UN CONCIERTO CIERRA EL JUEVES LA EXPOSICIÓN 'MONUMENTA', DE LA ARTISTA YAPCI RAMOS",
                author: "DIARIO DE AVISOS",
                path: "/download/PRESS/UN CONCIERTO CIERRA EL JUEVES LA EXPOSICIÓN 'MONUMENTA', DE LA ARTISTA YAPCI RAMOS. DIARIO DE AVISOS.pdf",
            },
            {
                title: "LAS MEJORES EXPOSICIONES DEL 2021",
                author: "LA PROVINCIA",
                path: "/download/PRESS/LAS MEJORES EXPOSICIONES DEL 2021. LA PROVINCIA.pdf",
            }, {
                title: "YAPCI RAMOS PARTICIPA EN FLUX 2021",
                author: "LA PROVINCIA",
                path: "/download/PRESS/YAPCI RAMOS PARTICIPA EN FLUX 2021. LA PROVINCIA.pdf",
            }, {
                title: "NUEVE \"MENCEYAS' CONQUISTAN LA ERMITA DE SAN MIGUEL DE MANOS DE YAPCI RAMOS",
                author: "EL DIA",
                path: "/download/PRESS/NUEVE \"MENCEYAS' CONQUISTAN LA ERMITA DE SAN MIGUEL DE MANOS DE YAPCI RAMOS. EL DIA.pdf",
            },
            {
                title: "EL LLANTO LIBRE DE YAPCI RAMOS",
                author: "EL DIA",
                path: "/download/PRESS/EL LLANTO LIBRE DE YAPCI RAMOS. EL DIA.pdf",
            }, {
                title: "YAPCI RAMOS, SHOW ME",
                author: "STUDIO INTERNATIONAL",
                path: "/download/PRESS/YAPCI RAMOS, SHOW ME. STUDIO INTERNATIONAL.pdf",
            }, {
                title: "GALLERIES GET IT RIGHT, NYC'S NOT-TO-MISS SPRING EXHIBITIONS ARE ALL FEMALE",
                author: "OBSERVER",
                path: "/download/PRESS/GALLERIES GET IT RIGHT, NYC'S NOT-TO-MISS SPRING EXHIBITIONS ARE ALL FEMALE. OBSERVER.pdf",
            },
            {
                title: "YAPCI RAMOS",
                author: "COOLS",
                path: "/download/PRESS/YAPCI RAMOS. COOLS.pdf",
            }, {
                title: "EL PERPETUO MOVIMIENTO DE YAPCI RAMOS",
                author: "EL PAÍS",
                path: "/download/PRESS/EL PERPETUO MOVIMIENTO DE YAPCI RAMOS. EL PAÍS.pdf",
            },
            {
                title: "PARIR Y RENACER DE YAPCI RAMOS EN EL SANTA MÒNICA DE BARCELONA",
                author: "LA PROVINCIA",
                path: "/download/PRESS/PARIR Y RENACER DE YAPCI RAMOS EN EL SANTA MÒNICA DE BARCELONA . LA PROVINCIA.pdf",
            },
            {
                title: "ESCULTURA DEL MENCEY EN CARNE Y HUESO",
                author: "EL DIA",
                path: "/download/PRESS/ESCULTURA DEL MENCEY EN CARNE Y HUESO. EL DIA.pdf",
            }, {
                title: "LES FEMMES CRÈVENT L'ÉCRAN À LA GALERIE DANYSZ",
                author: "",
                path: "/download/PRESS/LES FEMMES CRÈVENT L'ÉCRAN À LA GALERIE DANYSZ.pdf",
            },
            {
                title: "PERRAS Y PUTAS",
                author: "WALL STREET INTERNATIONAL MAGAZINE",
                path: "/download/PRESS/PERRAS Y PUTAS. WALL STREET INTERNATIONAL MAGAZINE.pdf",
            }, {
                title: "LAS MUJERES GUANCHES CONQUISTAN EL CENTRO DE AGUERE A TRAVÉS DE LA OBRA DE YAPCI RAMOS",
                author: "",
                path: "/download/PRESS/LAS MUJERES GUANCHES CONQUISTAN EL CENTRO DE AGUERE A TRAVÉS DE LA OBRA DE YAPCI RAMOS.pdf",
            },
            {
                title: "PHOTOGRAPHER YAPCI RAMOS FOCUSES ON SEX WORKERS AND STRAY",
                author: "BLOUIN ARTINFO",
                path: "/download/PRESS/PHOTOGRAPHER YAPCI RAMOS FOCUSES ON SEX WORKERS AND STRAY. BLOUIN ARTINFO.pdf",
            }
        ]
    },
    {
        title: "OTHERS",
        items: [
            {
                title: "YAPCI RAMOS CV",
                author: "BLOUIN ARTINFO.pdf",
                path: "/download/OTHERS",
            }

        ]
    },
    {
        title: "CATALOGUES",
        items: [
            {
                title: "YAPCI RAMOS: SHOW ME, KNOW US, WELCOME HER",
                author: "",
                path: "https://www.amazon.es/Yapci-Ramos-Show-Know-Welcome/dp/8417434100",
            },
            {
                title: "CURATING AND THE LEGACIES OF COLONIALISM IN CONTEMPORARY IBERIA CARLOS GARRIDO & BRUNO LEITAO",
                author: "",
                path: "https://press.uchicago.edu/ucp/books/book/distributed/C/bo185830710.html",
            },
            {
                title: "EL IRIS DE LUCY CAAM",
                author: "",
                path: "http://www.puvill.com/book/el-iris-de-lucy/297360",
            },
            {
                title: "ARTISTAS POST-CONCEPTUALES EN CANARIAS, 2000-2017 CAAM",
                author: "",
                path: "https://caam.net/publicacion/f-artistas-post-conceptuales-en-canarias-2000-2017/",
            },
            {
                title: "PROME ENCUENTRO ARTE CONTEMPORANEO DI CARIBE 2011-2012 ARUBA",
                author: "",
                path: "https://lmpublishers.nl/product/encuentro-arte-contemporaneo-di-caribe/",
            },
        ]
    },
    {
        title: "DOSSIERS",
        items: [
            {
                title: "Guayec",
                author: "",
                path: "/download/DOSSIERS/YapciRamos_Guayec_Dossier.pdf",
            }, {
                title: "Monumenta",
                author: "",
                path: "/download/DOSSIERS/YapciRamos_Monumenta_Dossier.pdf",
            }, {
                title: "Parto",
                author: "",
                path: "/download/DOSSIERS/YapciRamos_Parto_Dossier.pdf",
            }
        ]
    }
]);

const navLinks = ["ALL", "READS", "PRESS", "CATALOGUES", "DOSSIERS"];
const wrapper = ref(null);
const dragProxy = ref(null);

const filteredSections = computed(() => {
    // Redirect to '/downloads' if no category is specified or if the category is 'ALL'
    if (!route.params.category || route.params.category.toUpperCase() === 'ALL') {
        router.push('/downloads');
        return []; // Return an empty array to avoid further processing
    }

    // Normalize route categories: replace dashes with spaces and convert to uppercase
    const selectedCategories = route.params.category
        .split('_')
        .map(category => category.replace('-', ' ').toUpperCase()); // Convert dashes to spaces and to uppercase

    // Normalize section titles: replace dashes with spaces and convert to uppercase
    return sections.value.filter(section =>
        selectedCategories.includes(section.title.replace('-', ' ').toUpperCase()) // Convert dashes to spaces and to uppercase
    );
});


const isSelected = (category) => {
    const categories = route.params.category
        ?.split('_')
        .map(cat => cat.toLowerCase()) || []; // Convert route categories to lowercase
    return categories.includes(category.toLowerCase()); // Convert the category argument to lowercase
};


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



if (import.meta.client) { gsap.registerPlugin(ScrollTrigger, Draggable); }

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
onMounted(async () => {


});

</script>



<style>
::selection {
    color: white;
    background-color: red;
}
</style>