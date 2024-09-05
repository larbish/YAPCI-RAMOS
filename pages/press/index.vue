<template>
    <div class="w-full text-black bg-white pt-40">
        <ul class="grid grid-cols-2 lg:grid-cols-9 2xl:grid-cols-10 px-2 gap-x-2 2xl:gap-y-4">
            <li v-for="(item, index) in items" :key="index" @mouseenter="toggleImage(index)"
                class="relative uppercase h-60 max-h-fit overflow-clip tracking-[1.1]">
                <NuxtLink :to="item.link" class="relative block h-full">
                    <div v-show="!item.visible">
                        <h2 class="font-medium">{{ item.title }}</h2>
                        <div class="mt-0.5 leading-[1.1]">
                            <p>{{ item.description }}</p>
                            <p>{{ item.date }}</p>
                            <p>{{ item.text }}</p>
                        </div>
                    </div>

                    <img v-show="item.visible" :src="item.image" class="w-full absolute top-0 left-0" :alt="item.title">
                </NuxtLink>
            </li>
        </ul>

        <p class=" mt-16 text-center lg:text-left lg:mt-64 pl-2 pb-1 leading-[1.1]">
            ©2024 YAPCI RAMOS <br>
            ALL RIGHTS RESERVED
        </p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
    { title: 'STUDIO INTERNATIONAL', description: 'Yapci Ramos: Show Me', date: 'AUGUST, 2024', text: 'TEXT BY LOREM IPSUM', image: '/images/image-four.png', visible: false, link: '/press/article/one' },
    { title: 'GALLERY EXHIBIT', description: 'Abstract Visions', date: 'SEPTEMBER, 2024', text: 'TEXT BY JOHN DOE', image: '/images/image-nine.png', visible: false, link: '/press/article/one' },
    { title: 'MODERN ART SHOWCASE', description: 'Colors of Emotion', date: 'JULY, 2024', text: 'TEXT BY JANE SMITH', image: '/images/image-four.png', visible: false, link: '/press/article/one' },
    { title: 'ARTISTIC EXPRESSIONS', description: 'Shadows and Light', date: 'OCTOBER, 2024', text: 'TEXT BY ALICE BROWN', image: '/images/image-five.png', visible: false, link: '/press/article/one' },
    { title: 'URBAN LANDSCAPES', description: 'City Dreams', date: 'NOVEMBER, 2024', text: 'TEXT BY MARK JONES', image: '/images/image-four.png', visible: false, link: '/press/article/one' },
    { title: 'CONTEMPORARY MASTERS', description: 'The Human Form', date: 'JUNE, 2024', text: 'TEXT BY EMILY DAVIS', image: '/images/image-eight.png', visible: false, link: '/press/article/one' },
    { title: 'NATURE\'S PALETTE', description: 'Green Reflections', date: 'MAY, 2024', text: 'TEXT BY WILLIAM TAYLOR', image: '/images/image-four.png', visible: false, link: '/press/article/one' },
    { title: 'TIMELESS BEAUTY', description: 'Classic Sculptures', date: 'APRIL, 2024', text: 'TEXT BY SARAH WILSON', image: '/images/image-five.png', visible: false, link: '/press/article/one' },
    { title: 'CULTURAL JOURNEYS', description: 'Global Inspirations', date: 'MARCH, 2024', text: 'TEXT BY MICHAEL MARTIN', image: '/images/image-nine.png', visible: false, link: '/press/article/one' },
    { title: 'HISTORICAL PERSPECTIVES', description: 'Art Through Ages', date: 'FEBRUARY, 2024', text: 'TEXT BY LUCY MOORE', image: '/images/image-five.png', visible: false, link: '/press/article/one' },
    { title: 'IMPRESSIONIST DELIGHTS', description: 'Brushstrokes of Time', date: 'JANUARY, 2024', text: 'TEXT BY ANTHONY CLARK', image: '/images/image-four.png', visible: false, link: '/press/article/one' },
    { title: 'CONTEMPORARY CULTURE', description: 'Modern Myths', date: 'DECEMBER, 2023', text: 'TEXT BY SOPHIA LEE', image: '/images/image-five.png', visible: false, link: '/contemporary-culture' },
    { title: 'ARCHITECTURAL WONDERS', description: 'Structures of Future', date: 'NOVEMBER, 2023', text: 'TEXT BY DAVID HARRIS', image: '/images/image-four.png', visible: false, link: '/press/article/one' },
    { title: 'PHOTOGRAPHY EXHIBIT', description: 'Frozen Moments', date: 'OCTOBER, 2023', text: 'TEXT BY RACHEL WHITE', image: '/images/image-eleven.png', visible: false, link: '/press/article/one' },
    { title: 'SURREALISM UNVEILED', description: 'Dreamscapes', date: 'SEPTEMBER, 2023', text: 'TEXT BY CHRIS WALKER', image: '/images/image-four.png', visible: false, link: '/press/article/one' },
    { title: 'FINE ART RETROSPECTIVE', description: 'Masterpieces Revisited', date: 'AUGUST, 2023', text: 'TEXT BY OLIVIA THOMPSON', image: '/images/image-five.png', visible: false, link: '/press/article/one' },
    { title: 'ART AND IDENTITY', description: 'Portraits of Self', date: 'JULY, 2023', text: 'TEXT BY BENJAMIN SCOTT', image: '/images/image-four.png', visible: false, link: '/press/article/one' },
    { title: 'MYSTIC LANDSCAPES', description: 'Scenes of Wonder', date: 'JUNE, 2023', text: 'TEXT BY AMY GREEN', image: '/images/image-five.png', visible: false, link: '/press/article/one' },
    { title: 'THE ABSTRACT REALM', description: 'Beyond the Ordinary', date: 'MAY, 2023', text: 'TEXT BY MATTHEW CARTER', image: '/images/image-four.png', visible: false, link: '/press/article/one' },
    { title: 'ART OF THE FUTURE', description: 'Visions Ahead', date: 'APRIL, 2023', text: 'TEXT BY ELIZA ADAMS', image: '/images/image-five.png', visible: false, link: '/press/article/one' },
    { title: 'PAINTING THE PAST', description: 'Historical Narratives', date: 'MARCH, 2023', text: 'TEXT BY JASON ANDERSON', image: '/images/image-four.png', visible: false, link: '/press/article/one' }
]);

const toggleImage = (index) => {
    items.value[index].visible = !items.value[index].visible;
};
</script>
