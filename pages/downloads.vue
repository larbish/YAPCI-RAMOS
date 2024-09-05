<template>
    <div class="h-screen w-full overflow-x-clip">
      <div class="wrapper flex h-full flex-nowrap">
        <section class="section w-screen h-full bg-white flex-shrink-0 d-flex line-right">
          text
        </section>
  
        <section class="section w-screen h-full bg-black flex-shrink-0 d-flex line-right">
          text
        </section>
  
        <section class="section w-60 h-full bg-red-500 flex-shrink-0 d-flex">text</section>
        <section class="section w-96 h-full bg-white flex-shrink-0 d-flex line-right">
          text
        </section>
      </div>
  
      <div class="hidden absolute drag-proxy"></div>
    </div>
  </template>
  
  <script setup>
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import Draggable from "gsap/Draggable";
  
  gsap.registerPlugin(ScrollTrigger, Draggable);
  
  onMounted(() => {
    const sections = gsap.utils.toArray("section");
    let maxWidth = 0;
  
    const getMaxWidth = () => {
      maxWidth = 0;
      sections.forEach((section) => {
        maxWidth += section.offsetWidth;
      });
    };
    getMaxWidth();
    ScrollTrigger.addEventListener("refreshInit", getMaxWidth);
  
    let scrollTween = gsap.to(sections, {
      x: () => `-${maxWidth - window.innerWidth}`,
      ease: "none",
    });
  
    let horizontalScroll = ScrollTrigger.create({
      animation: scrollTween,
      trigger: ".wrapper",
      pin: true,
      scrub: true,
      end: () => `+=${maxWidth}`,
      invalidateOnRefresh: true,
    });
  
    const setSectionColor = (section, color) => {
      gsap.to(section, {
        backgroundColor: color,
        duration: 0.3,
        overwrite: "auto",
      });
    };
  
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "right center",
        end: "right center",
        onEnter: () => setSectionColor(section, "red"),
        onLeave: () => setSectionColor(section, ""),
        onEnterBack: () => setSectionColor(section, "red"),
        onLeaveBack: () => setSectionColor(section, ""),
      });
    });
  
    let dragRatio = maxWidth / (maxWidth - window.innerWidth);
  
    var drag = Draggable.create(".drag-proxy", {
      trigger: ".wrapper",
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
  });
  </script>
  