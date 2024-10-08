<template>
    <div class="w-full text-black bg-white pt-40 min-h-screen pb-20 relative">
        <ul class="grid grid-cols-2 lg:grid-cols-9 2xl:grid-cols-10 px-2 gap-x-2 2xl:gap-y-4">
            <li v-for="(item, index) in items" :key="index" @mouseenter="toggleImage(index)" @click="handleClick(index)"
                @touchstart="handleTouch(index)" class="relative uppercase h-60 max-h-fit overflow-clip tracking-[1.1] leading-[1.1] cursor-pointer">
                <!-- Conditionally render NuxtLink based on touch state -->
                <template v-if="isMobile && item.visible && item.tappedOnce">
                    <NuxtLink :to="item.link" class="relative block h-full">
                        <img :src="item.image" class="w-full absolute top-0 left-0" :alt="item.title">
                    </NuxtLink>
                </template>
                <template v-else>
                    <div class="relative block h-full">
                        <div v-show="!item.visible">
                            <h2 class="font-medium">{{ item.title }}</h2>
                            <div class="mt-0.5 leading-[1.1]">
                                <p>{{ item.description }}</p>
                                <p>{{ item.date }}</p>
                                <p>{{ item.text }}</p>
                            </div>
                        </div>
                        <img v-show="item.visible" :src="item.image" class="w-full absolute top-0 left-0"
                            :alt="item.title">
                    </div>
                </template>
            </li>
        </ul>

        <p class="mt-16 text-center lg:text-left lg:mt-10 pl-2 pb-1 leading-[1.1] absolute bottom-0">
            ©2024 YAPCI RAMOS <br>
            ALL RIGHTS RESERVED
        </p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const contentQuery = await queryContent('press', 'article').find();
//console.log(contentQuery);



const router = useRouter();
const items = ref(contentQuery
    .map((item) => {
        return {
            title: item.title,
            description: item.description,
            date: item.date,
            text: item.text,
            image: item.image,
            visible: false,
            link: item._path,
            tappedOnce: false
        };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sorting right after mapping
);

//console.log(items.value);



const isMobile = ref(false);
const tappedItemIndex = ref(null);

onMounted(async () => {
    // Detect if the device is mobile
    isMobile.value = /Mobi|Android/i.test(navigator.userAgent);
});

const toggleImage = (index) => {
    if (!isMobile.value) {
        items.value[index].visible = !items.value[index].visible;
        items.value[index].tappedOnce = false;
    }
};

const handleTouch = (index) => {
    if (tappedItemIndex.value === index) {
        // Second tap on the same item
        items.value[index].tappedOnce = true;
        router.push(items.value[index].link); // Navigate to the link using router
    } else {
        // First tap
        items.value[index].visible = !items.value[index].visible;
        items.value[index].tappedOnce = false;
        tappedItemIndex.value = index;
    }
};

const handleClick = (index) => {
    if (!isMobile.value) {
        router.push(items.value[index].link); // Navigate to the link using router
    }
};
</script>
