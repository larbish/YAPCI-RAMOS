<template>
    <div ref="container"
        class="w-full fixed top-0 min-h-screen backdrop-blur-3xl z-30 px-2 lg:px-4 bottom-0 overflow-y-auto bg-white text-black opacity-0 bg-opacity-75" :class="{ '!bg-opacity-95': darkVariant }">
        <div class="w-full relative h-full xl:pb-20 overflow-y-auto">
            <div class="relative w-full lg:grid lg:grid-cols-8 ">
                <div class="lg:col-span-5 pr-[5vw]">
                    <section class="w-full flex items-center pt-10 py-12 lg:py-16  justify-center">
                        <img src="@/assets/logo-black.svg" class="h-28 lg:h-24 2xl:h-28" alt="">
                    </section>

                    <section class="uppercase leading-[1.2] font-normal">Yapci Ramos is a visual
                        artist,
                        video
                        artist, and
                        photographer. She lives and works between Tenerife,
                        Barcelona, and New York. She trained in photography at Central Saint Martins College of Arts &
                        Design in London and in creative documentary at Universitat Pompeu Fabra in Barcelona.</section>

                    <section class="w-full lg:grid lg:grid-cols-9 gap-x-5 font-normal mt-10">
                        <article class="lg:col-span-3">
                            <h2 class="font-medium">ABOUT</h2>
                            <p class=" mt-1 lg:mt-0 leading-[1.1]">
                                She explores identity, sexuality, and territory by creating multimedia installation
                                works.
                                Her work is emotional, physical, and introspective, frequently using her own body to
                                channel
                                the taboos, rituals, and catharsis that constructs the experience of being. Ramos’s
                                projects
                                challenge the border of comfort between the body and society while engaging the
                                intricate
                                workings of both internal psychology and external expressions of identity.
                            </p>
                        </article>

                        <article class="lg:col-span-6 mt-6 lg:mt-0 leading-[1.1]">
                            <h2 class="font-medium">SELECTED EXHIBITIONS</h2>
                            <p class=" mt-1 lg:mt-0 ">
                                It is remarkable her admission at The Watermill Center, Nueva York; The Fountainhead
                                Residency, Miami; Art Omi, Nueva York; as well as the selection as resident artist in
                                Residency Unlimited 2024, New York. Ramos’s work has been exhibited in international
                                biennials, museums and galleries, such as Arts Santa Mònica, Barcelona; The Delaware
                                Contemporary, Delaware; Catinca Tabacaru Gallery, Nueva York; TEA Tenerife Espacio de
                                las
                                Artes, Tenerife; CAAM Centro Atlántico de Arte Moderno, Las Palmas de Gran Canaria;
                                Mario
                                Mauroner Gallery, Viena; EAC Espacio de Arte Contemporáneo, Montevideo; Galerie Magda
                                Danysz, Paris; Casa África, Las Palmas de Gran Canaria; CCET Centro Cultural de España,
                                Tegucigalpa; Rencontres Africaines de la Photographie, Bamako; Triennal de Angola,
                                Luanda y
                                Bienal de Honduras, Tegucigalpa, among others.
                            <div class="mt-4">
                                Reviews of her work have appeared in El País, Forbes, Paper Magazine, Wall Street
                                International Magazine, Cools, La Vanguardia, and Observer.
                            </div>
                            </p>
                        </article>
                    </section>

                    <section class="w-full lg:grid lg:grid-cols-9 gap-x-5 mt-10">
                        <div class="lg:col-span-3">
                            <a href="mailto:info@yapciramos.com" class="font-medium uppercase flex">info<span class="-mt-[1px] inline-block">@</span>yapciramos.com</a>
                        </div>
                        <div class="lg:col-span-6 hidden lg:flex items-center gap-x-10 uppercase font-medium">
                            <a href="http://www.instagram.com/yapciramos" target="_blank"
                                rel="noopener noreferrer">Instagram</a>
                            <a href="http://www.instagram.com/yapciramos" target="_blank"
                                rel="noopener noreferrer">Facebook</a>
                            <a href="http://www.instagram.com/yapciramos" target="_blank"
                                rel="noopener noreferrer">Youtube</a>
                            <a href="http://www.instagram.com/yapciramos" target="_blank"
                                rel="noopener noreferrer">LINKEDIN</a>

                        </div>
                    </section>
                </div>


                <div
                    class="lg:col-span-3 uppercase h-full  flex flex-col justify-end w-full pt-10 lg:pt-32 lg:pl-[10vw] leading-[1.2]">
                    <div>
                        <h2 class="font-medium">UPCOMING</h2>
                        <div class="flex flex-col gap-y-6 mt-1">
                            <section>
                                <h3 class="font-medium">The triad</h3>
                                <p>Instituto Cervantes, New York</p>
                                <p>3.10 – 01.12.2024</p>
                            </section>
                            <section>
                                <h3 class="font-medium">The prephotographic</h3>
                                <p>Aura Gallery, Düsseldorf</p>
                                <p>16.05 – 02.06.2024</p>
                            </section>

                            <section>
                                <h3 class="font-medium">El otro Lado</h3>
                                <p>Arts Santa Mònica, Barcelona</p>
                                <p>29.02 – 2.06.2024</p>
                            </section>
                        </div>

                        <div class="flex flex-col gap-y-3 mt-8 lg:hidden uppercase font-medium">
                            <a href="http://www.instagram.com/yapciramos" target="_blank"
                                rel="noopener noreferrer">Instagram</a>
                            <a href="http://www.instagram.com/yapciramos" target="_blank"
                                rel="noopener noreferrer">Facebook</a>
                            <a href="http://www.instagram.com/yapciramos" target="_blank"
                                rel="noopener noreferrer">Youtube</a>
                            <a href="http://www.instagram.com/yapciramos" target="_blank"
                                rel="noopener noreferrer">LINKEDIN</a>

                        </div>

                        <div class="mt-8 hidden lg:block">
                            <section>
                                <h3 class="font-medium mb-1">Credits</h3>
                                <p>WEB DESIGN: VERO SANTANA</p>
                                <p>DEVELOPERS: THE ROSE STUDIO</p>
                                <p>CODE: TEJA</p>
                            </section>
                        </div>

                        <div class="mt-12">
                            <section>
                                <h3 class="font-medium mb-1">NEWSLETTER</h3>
                                <form @submit.prevent="handleSubmit"
                                    class="relative flex items-center w-full border-b border-black">
                                    <input type="email" placeholder="EMAIL" v-model="email"
                                        class="bg-transparent placeholder:text-[#A8A8A8] pb-0.5 w-full outline-none">
                                    <FadeInComponent v-if="email && !Submitted">
                                        <button
                                            class="uppercase hover:opacity-50 transition-opacity duration-700">Confirm</button>
                                    </FadeInComponent>
                                </form>
                                <p v-if="Submitted" class="uppercase tracking-widest">You have been successfully
                                    subscribed</p>
                            </section>
                        </div>

                        <div class="mt-8 lg:hidden">
                            <section>
                                <h3 class="font-medium mb-1">Credits</h3>
                                <p>WEB DESIGN: VERO SANTANA</p>
                                <p>DEVELOPERS: THE ROSE STUDIO</p>
                                <p>CODE: TEJA</p>
                            </section>
                        </div>

                    </div>

                </div>

            </div>

            <p class=" mt-14 lg:mt-10 xl:mt-0 xl:absolute bottom-2 text-center w-full lg:text-left leading-[1.1]">

                ©2024 YAPCI RAMOS <br>
                ALL RIGHTS RESERVED
            </p>
        </div>

    </div>

    <button @click="handleClose"
        class="fixed top-2 right-2 font-medium z-30 hover:opacity-50 transition-opacity duration-700 text-black">
        CLOSE
    </button>
</template>

<script setup>
import gsap from 'gsap';
const infoState = useState('infoState')
const darkVariant = useState('darkVariant')
const container = ref(null)
const email = ref(null);
const Submitted = ref(false);

const handleSubmit = () => {
    Submitted.value = true;
    console.log(email.value);
    email.value = '';
}
onMounted(() => {

    gsap.to(container.value, {
        duration: 0.2,
        ease: 'power1.inOut',
        opacity: 1,
    })

})

const handleClose = () => {
    gsap.to(container.value, {
        duration: 0.2,
        ease: 'power1.inOut',
        opacity: 0,
    }).then(() => {
        infoState.value = false;
    })
}


</script>
