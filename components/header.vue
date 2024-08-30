<template>
    <div v-if="!darkVariant"
        class="w-full flex flex-col gap-y-2 items-center justify-center absolute top-0 py-4 mix-blend-difference ">
        <NuxtLink @mouseenter="moveAnimationEnabled = false" @mouseleave="moveAnimationEnabled = true" to="/">
            <img src="@/assets/logo-white.svg" class=" w-36 xl:w-28 2xl:w-36 cursor-pointer" alt="">
        </NuxtLink>

        <div class="w-fit flex items-center font-medium gap-x-6 mt-4 lg:mt-6 brightness-90  uppercase justify-center">
            <NuxtLink @mouseenter="moveAnimationEnabled = false" @mouseleave="moveAnimationEnabled = true" to="/work">
                Work</NuxtLink>
            <NuxtLink @mouseenter="moveAnimationEnabled = false" @mouseleave="moveAnimationEnabled = true" to="/press">Press
            </NuxtLink>
            <NuxtLink @mouseenter="moveAnimationEnabled = false" @mouseleave="moveAnimationEnabled = true" to="/">
                Downloads</NuxtLink>
            <button @mouseenter="moveAnimationEnabled = false" @mouseleave="moveAnimationEnabled = true"
                class="uppercase" @click="infoState = true">Info</button>
        </div>


    </div>


    <div v-if="darkVariant"
        class="w-full flex flex-col gap-y-2 items-center justify-center absolute top-0 py-4 z-30 pointer-events-none">

        <NuxtLink @mouseenter="moveAnimationEnabled = false" @mouseleave="moveAnimationEnabled = true"
            class="pointer-events-auto" to="/">
            <img src="@/assets/logo-black.svg" class=" w-36 xl:w-28 2xl:w-36 cursor-pointer" alt="">
        </NuxtLink>

        <div
            class="w-fit flex items-center font-medium text-black gap-x-6 mt-4 lg:mt-6 brightness-90 mix-blend-luminosity uppercase justify-center">
            <NuxtLink @mouseenter="moveAnimationEnabled = false" @mouseleave="moveAnimationEnabled = true"
                class="pointer-events-auto" to="/work">
                Work</NuxtLink>
            <NuxtLink @mouseenter="moveAnimationEnabled = false" @mouseleave="moveAnimationEnabled = true"
                class="pointer-events-auto" to="/press">Press
            </NuxtLink>
            <NuxtLink @mouseenter="moveAnimationEnabled = false" @mouseleave="moveAnimationEnabled = true"
                class="pointer-events-auto" to="/">
                Downloads</NuxtLink>
            <button @mouseenter="moveAnimationEnabled = false" @mouseleave="moveAnimationEnabled = true"
                class="uppercase pointer-events-auto" @click="infoState = true">Info</button>
        </div>
    </div>
</template>

<script setup lang="ts">
const infoState = useState('infoState')
const moveAnimationEnabled = useState('moveAnimationEnabled')
const route = useRoute()
const router = useRouter()
const darkVariant = useState('darkVariant', () => false)

onMounted(() => {
    if (route.path == '/' || route.path.toLocaleLowerCase() == '/projects/monumenta') darkVariant.value = false
    else darkVariant.value = true
})

watchEffect(() => {
    if (route.path == '/') darkVariant.value = false
    else darkVariant.value = true
})
</script>
