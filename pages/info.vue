<template>
    <div ref="container"
        class="w-full fixed top-0 min-h-screen backdrop-blur-3xl z-30 px-2 lg:px-4 bottom-0 overflow-y-auto bg-white text-black opacity-0 bg-opacity-75"
        :class="{ '!bg-opacity-95': darkVariant }">
        <div class="w-full relative h-full xl:pb-20 overflow-y-auto">
            <div class="relative w-full lg:grid lg:grid-cols-8 ">
                <div class="lg:col-span-5 pr-[5vw]">
                    <section class="w-full flex items-center pt-10 py-12 lg:py-16  justify-center">
                        <img src="@/assets/logo-black.svg" class="h-28 lg:h-24 2xl:h-28" alt="">
                    </section>

                    <section class="uppercase leading-[1.2] font-normal">
                        <slot name="main-description"></slot>
                    </section>

                    <section class="w-full lg:grid lg:grid-cols-9 gap-x-5 font-normal mt-10">
                        <article class="lg:col-span-3">
                            <h2 class="font-medium">ABOUT</h2>
                            <p class=" mt-1 lg:mt-0 leading-[1.1]">
                                <slot name="about"></slot>
                            </p>
                        </article>

                        <article class="lg:col-span-6 mt-6 lg:mt-0">
                            <h2 class="font-medium">SELECTED EXHIBITIONS</h2>
                            <p class=" mt-1 lg:mt-0 leading-[1.1] ">
                                <slot name="exhibitions"></slot>
                            </p>
                        </article>
                    </section>

                    <section class="w-full lg:grid lg:grid-cols-9 gap-x-5 mt-10">
                        <div class="lg:col-span-3">
                            <a href="mailto:info@yapciramos.com" class="font-medium uppercase flex">info<span
                                    class="-mt-[1px] inline-block">@</span>yapciramos.com</a>
                        </div>
                        <div class="lg:col-span-6 hidden lg:flex items-center gap-x-10 uppercase font-medium">
                            <a href="http://www.instagram.com/yapciramos" target="_blank"
                                rel="noopener noreferrer">Instagram</a>
                            <a href="https://vimeo.com/yapciramos" target="_blank" rel="noopener noreferrer">Vimeo</a>
                            <a href="https://es.wikipedia.org/wiki/Yapci_Ramos" target="_blank"
                                rel="noopener noreferrer">Wikipedia</a>

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
                                <p>3.10 – 15.01.2025</p>
                            </section>

                            <section>
                                <h3 class="font-medium">HORIZONTES COMPARTIDOS</h3>
                                <p>LA HABANA</p>
                                <p>15.11 - 18.02.2025</p>
                            </section>

                            <section>
                                <h3 class="font-medium">KINEMA IKON</h3>
                                <p>ARAD PHILARMONIC, ROMANIA</p>
                                <p>18.11 - 19.11.2025</p>
                            </section>
                        </div>

                        <div class="flex flex-col gap-y-3 mt-8 lg:hidden uppercase font-medium">
                            <a href="http://www.instagram.com/yapciramos" target="_blank"
                                rel="noopener noreferrer">Instagram</a>
                            <a href="https://vimeo.com/yapciramos" target="_blank" rel="noopener noreferrer">Vimeo</a>
                            <a href="https://es.wikipedia.org/wiki/Yapci_Ramos" target="_blank"
                                rel="noopener noreferrer">Wikipedia</a>

                        </div>

                        <div class="mt-8 hidden lg:block">
                            <section>
                                <h3 class="font-medium mb-1">Credits</h3>
                                <p>WEB DESIGN: VERO SANTANA</p>
                                <p>DEVELOPERS: THE ROSE STUDIO</p>
                                <p>CODE: TEJA BHARATH</p>
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
                                <p v-if="Submitted" class="uppercase ">You have been successfully
                                    subscribed</p>
                            </section>
                        </div>

                        <div class="mt-8 lg:hidden">
                            <section>
                                <h3 class="font-medium mb-1">Credits</h3>
                                <p>WEB DESIGN: VERO SANTANA</p>
                                <p>DEVELOPERS: THE ROSE STUDIO</p>
                                <p>CODE: TEJA BHARATH</p>
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

const handleSubmit = async () => {
    Submitted.value = true;
    /*   console.log(email.value); */
    //send a GET request and use query to the server api.dunceco.online/send-email

    const response = await $fetch(`https://api.dunceco.online/send-email?email=${email.value}`)
    console.log(response);
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
