<template>
    <div class="h-screen w-full">
        <canvas class="w-full h-full" id="canvas"></canvas>
        <div class="bottom-5  absolute mix-blend-difference w-full flex justify-center text-center pointer-events-auto cursor-pointer" @mouseenter="hideCircle = false" @mouseleave="hideCircle = true" >
            <p v-if="currentVideoIndex === 0" >
                PARTO DE MÍ. 2022. AUDIOVISUAL
            </p>

            <p v-if="currentVideoIndex === 1">
                MONUMENTA. 2022. INSTALLATION
            </p>

            <p v-if="currentVideoIndex === 2">
                FREEDOM. 2022. AUDIOVISUAL
            </p>

            <p v-if="currentVideoIndex === 3">
                PARTO DE MÍ. 2022. INSTALLATION
            </p>

        </div>
    </div>
</template>

<script setup>
const currentVideoIndex = ref(0);
let hideCircle = useState('moveAnimationEnabled');
onMounted(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const videos = [
        document.createElement('video'),
        document.createElement('video'),
        document.createElement('video'),
        document.createElement('video')
    ];

    videos[0].src = '/videos/Guayec_30s.mp4';
    videos[1].src = '/videos/Lloro_30s.mp4';
    videos[2].src = '/videos/IDontMind_30s.mp4';
    videos[3].src = '/videos/RedHot_30s.mp4';

    videos.forEach(video => {
        video.muted = true;
        video.loop = true;
        video.play();
    });

    
    let nextVideoIndex = 1;
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    let radius = 80;
    let maxRadius = canvas.width;
  
/*     console.log(currentVideoIndex.value) */
    /* 
        const toggleButton = document.getElementById('toggleButton');
        toggleButton.addEventListener('mouseenter', () => {
            hideCircle.value = true;
        });
        toggleButton.addEventListener('mouseleave', () => {
            hideCircle.value = false;
        }); */


    function drawBlurredCircle(ctx, x, y, radius, blurWidth) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.shadowBlur = blurWidth;
        ctx.shadowColor = "rgba(128, 128, 128, 1)"; // Semi-transparent black blur
        ctx.fillStyle = "rgba(0, 0, 0, 1)";
        ctx.fill();
        ctx.clip();
        ctx.shadowBlur = 0; // Reset shadowBlur for further drawings
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the background video
        const backgroundVideo = videos[currentVideoIndex.value];
        if (backgroundVideo.readyState >= backgroundVideo.HAVE_CURRENT_DATA) {
            const scaleX = canvas.width / backgroundVideo.videoWidth;
            const scaleY = canvas.height / backgroundVideo.videoHeight;
            const scale = Math.max(scaleX, scaleY);
            const x = (canvas.width / 2) - (backgroundVideo.videoWidth * scale / 2);
            const y = (canvas.height / 2) - (backgroundVideo.videoHeight * scale / 2);
            ctx.drawImage(backgroundVideo, x, y, backgroundVideo.videoWidth * scale, backgroundVideo.videoHeight * scale);
        }

        // Draw the video with a blurred circular clip or full screen
        const clipVideo = videos[nextVideoIndex];
        if (clipVideo.readyState >= clipVideo.HAVE_CURRENT_DATA && hideCircle.value) {
            if (radius < maxRadius) {
                ctx.save();
                drawBlurredCircle(ctx, mouseX, mouseY, radius, 100); // Apply blur effect (adjust the value for blur width)

                const scaleX = canvas.width / clipVideo.videoWidth;
                const scaleY = canvas.height / clipVideo.videoHeight;
                const scale = Math.max(scaleX, scaleY);
                const x = (canvas.width / 2) - (clipVideo.videoWidth * scale / 2);
                const y = (canvas.height / 2) - (clipVideo.videoHeight * scale / 2);

                ctx.drawImage(clipVideo, x, y, clipVideo.videoWidth * scale, clipVideo.videoHeight * scale);
                ctx.restore();
            } else {
                // Draw clipVideo full screen after radius reaches max width
                const scaleX = canvas.width / clipVideo.videoWidth;
                const scaleY = canvas.height / clipVideo.videoHeight;
                const scale = Math.max(scaleX, scaleY);
                const x = (canvas.width / 2) - (clipVideo.videoWidth * scale / 2);
                const y = (canvas.height / 2) - (clipVideo.videoHeight * scale / 2);

                ctx.drawImage(clipVideo, x, y, clipVideo.videoWidth * scale, clipVideo.videoHeight * scale);
            }
        }

        requestAnimationFrame(draw);
    }





    if (window.matchMedia("(max-width: 767px)").matches) {
        // Apply mobile-specific behavior
        hideCircle.value = false;
        canvas.addEventListener('touchmove', (e) => {
            hideCircle.value = true;
            mouseX = e.touches[0].clientX;
            mouseY = e.touches[0].clientY;
        })

        canvas.addEventListener('touchend', async (e) => {
            //wait for the animation to finish
            hideCircle.value = false;
        })
    } else {
        canvas.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
    }

    canvas.addEventListener('click', () => {
        const animationDuration = 200; // 0.5 second
        const startTime = performance.now();
        if (window.matchMedia("(max-width: 767px)").matches) {
            // Apply mobile-specific behavior
            hideCircle.value = true;
        }

        function animate() {
            const currentTime = performance.now();
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / animationDuration, 1);

            radius = progress * maxRadius;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                if (window.matchMedia("(max-width: 767px)").matches) {
                    // Apply mobile-specific behavior
                    hideCircle.value = false;
                }
                currentVideoIndex.value = nextVideoIndex;
                nextVideoIndex = (nextVideoIndex + 1) % videos.length;
                radius = 80; // Reset radius for the next video
            }
        }

        animate();
    });

    draw();

})
</script>


<style>
canvas {
    display: block;
}
</style>