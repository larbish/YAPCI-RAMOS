<template>
  <div class="text-xs  lg:text-[10px] 2xl:text-xs text-white w-full relative bg-white leading-[121.43%]">
    <NuxtPage></NuxtPage>
    <Header></Header>
    <AppInfo v-if="infoState"></AppInfo>

  </div>
</template>

<script setup>
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Draggable from 'gsap/Draggable';
const infoState = useState('infoState', () => false)
const moveAnimationEnabled = useState('moveAnimationEnabled', () => true)

if (import.meta.client) { gsap.registerPlugin(ScrollTrigger, Draggable); }


/* onMounted(() => {
  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
        console.log(e)
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
}) */



</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  overscroll-behavior: none;
  width: 100%;
  font-family: "HelveticaNowText", sans-serif;
}

html.lenis,
html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-smooth iframe {
  pointer-events: none;
}

::selection {
  color: white;
  background-color: red;
}

strong {
  font-weight: 500;
}
</style>
