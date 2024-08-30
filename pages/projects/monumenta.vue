<template>
    <div class="w-full overflow-x-clip">
        <div ref="container" class="w-full h-full relative flex overflow-clip">
            <section @click="activeSection = 0" ref="sectionOne" class="w-full relative min-w-10 overflow-x-clip">
                <div ref="sectionOneWrapper" class="min-w-[calc(100vw-40px)] h-fit">
                    <SectionOne></SectionOne>
                </div>
            </section>
            <section @click="activeSection = 1" ref="sectionTwo"
                class="border-l-gray-500 border-l absolute left-[calc(100%-80px)] min-w-[calc(100%-80px)] bg-white bg-opacity-70  backdrop-blur-3xl z-10">
                <div @click="activeSection = 1" class="relative">
                    <div ref="sectionTwoWrapper" class="h-fit">
                        <SectionTwo></SectionTwo>
                    </div>
                    <button class=" -left-3 top-10 rotate-90 absolute h-fit text-black ">
                        <span class="block z-[1000]">PROCESS</span>
                    </button>
                </div>
            </section>

            <section @click="activeSection = 2" ref="sectionThree"
                class="border-l-gray-500 border-l absolute left-[calc(100%-40px)] min-w-[calc(100%-80px)] bg-white bg-opacity-70 backdrop-blur-2xl z-10">
                <div @click="activeSection = 2" class="relative">
                    <div ref="sectionThreeWrapper" class="h-fit">
                        <SectionThree></SectionThree>
                    </div>
                    <button
                        class=" -left-5 top-12 rotate-90 absolute h-fit text-black z-[1000] hover:opacity-50">INSPIRATION</button>
                </div>
            </section>

        </div>
    </div>
</template>

<script setup>
import gsap from 'gsap';
import SectionOne from '@/components/monumenta/section-one.vue';
import SectionTwo from '@/components/monumenta/section-two.vue';
import SectionThree from '@/components/monumenta/section-three.vue';
const darkVariant = useState('darkVariant')
const container = ref(null);
const sectionOne = ref(null);
const sectionTwo = ref(null);
const sectionThree = ref(null);
const sectionOneWrapper = ref(null);
const sectionTwoWrapper = ref(null);
const sectionThreeWrapper = ref(null);
const activeSection = ref(0);

const expandedWidth = ref(null);
const collapsedWidth = 40;
/* 
onMounted(() => {
    expandedWidth.value = container.value.clientWidth - 80;
    updateSections();
    window.addEventListener('resize', updateSections);
}); */

onMounted(() => {
    /*   if (activeSection.value == 0) {
          darkVariant.value = false
          gsap.to(sectionOne.value, {
              minWidth: container.value.clientWidth - 80 + 'px',
              width: container.value.clientWidth - 80 + 'px',
              duration: 0.7,
          })
  
          gsap.to(sectionTwo.value, {
              left: container.value.clientWidth - 80 + 'px',
              duration: 0.7,
          })
  
  
          gsap.to(sectionThree.value, {
              left: container.value.clientWidth - 40 + 'px',
              duration: 0.7,
          })
      }
  
      if (activeSection.value == 1) {
          darkVariant.value = true
          gsap.to(sectionOne.value, {
              minWidth: container.value.clientWidth - 40 + 'px',
              width: container.value.clientWidth - 40 + 'px',
              duration: 0.7,
          })
  
          gsap.to(sectionTwo.value, {
              left: 40 + 'px',
              duration: 0.7,
          })
  
  
          gsap.to(sectionThree.value, {
              left: container.value.clientWidth - 40 + 'px',
              duration: 0.7,
          })
      }
  
      if (activeSection.value == 2) {
          darkVariant.value = true
          gsap.to(sectionOne.value, {
              minWidth: container.value.clientWidth - 0 + 'px',
              width: container.value.clientWidth - 0 + 'px',
              duration: 0.7,
          })
  
          gsap.to(sectionTwo.value, {
              left: 40 + 'px',
              duration: 0.7,
          })
  
          gsap.to(sectionThree.value, {
              left: 80 + 'px',
              duration: 0.7,
          })
      } */
})

watch(activeSection, () => {

    if (activeSection.value == 0) {
        gsap.to(container.value, {
            height: sectionOneWrapper.value.scrollHeight + 'px',
        })
        darkVariant.value = false
        gsap.to(sectionOne.value, {
            minWidth: container.value.clientWidth - 80 + 'px',
            width: container.value.clientWidth - 80 + 'px',
            duration: 0.7,
        })

        gsap.to(sectionTwo.value, {
            left: container.value.clientWidth - 80 + 'px',
            duration: 0.7,
        })


        gsap.to(sectionThree.value, {
            left: container.value.clientWidth - 40 + 'px',
            duration: 0.7,
        })
    }

    if (activeSection.value == 1) {
        darkVariant.value = true
        gsap.to(container.value, {
            height: sectionTwoWrapper.value.scrollHeight + 'px',
        })
        gsap.to(sectionOne.value, {
            minWidth: container.value.clientWidth - 40 + 'px',
            width: container.value.clientWidth - 40 + 'px',
            duration: 0.7,
        })

        gsap.to(sectionTwo.value, {
            left: 40 + 'px',
            duration: 0.7,
        })


        gsap.to(sectionThree.value, {
            left: container.value.clientWidth - 40 + 'px',
            duration: 0.7,
        })
    }

    if (activeSection.value == 2) {
        darkVariant.value = true
        gsap.to(container.value, {
            height: sectionThreeWrapper.value.scrollHeight + 'px',
        })
        gsap.to(sectionOne.value, {
            minWidth: container.value.clientWidth - 0 + 'px',
            width: container.value.clientWidth - 0 + 'px',
            height:sectionOneWrapper.value.scrollHeight + 'px',
            duration: 0.7,
        })

        gsap.to(sectionTwo.value, {
            left: 40 + 'px',
            width: container.value.clientWidth - 40 + 'px',
            duration: 0.7,
        })

        gsap.to(sectionThree.value, {
            left: 80 + 'px',
            duration: 0.7,
        })
    }
})

const updateSections = () => {
    expandedWidth.value = container.value.clientWidth - 80;



    /*     const sections = [sectionOne, sectionTwo, sectionThree];
        sections.forEach((section, index) => {
            gsap.to(section.value, {
                minWidth: activeSection.value === index ? expandedWidth.value + 'px' : collapsedWidth + 'px',
                width: activeSection.value === index ? expandedWidth.value + 'px' : collapsedWidth + 'px',
                duration: 0.2,
            });
        }); */
};

watch(activeSection, updateSections);
</script>
