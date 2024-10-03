<script setup>
import emblaCarouselVue from 'embla-carousel-vue'

const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true })
const props = defineProps({
    slideSpeed: {
        type: String,
        default: '2000'
    }
})

onMounted(() => {
    if (emblaApi.value) {
        setInterval(() => {
            emblaApi.value.scrollNext()
        }, parseInt(props.slideSpeed))
    }
})
</script>

<template>
    <div class="embla" ref="emblaRef">
        <div class="embla__container">
            <slot></slot>
        </div>
    </div>
</template>


<style >
  .embla {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
  }
  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }
</style>
