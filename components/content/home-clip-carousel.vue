<template>
    <div class="h-[100dvh] lg:h-screen w-full">
        <canvas class="w-full h-full" id="canvas"></canvas>
        <div class="bottom-5 absolute mix-blend-difference w-full flex justify-center text-center pointer-events-auto cursor-pointer"
            @mouseenter="hideCircle = false" @mouseleave="hideCircle = true">
            <NuxtLink :to="props.projectOneLink" v-if="currentVideoIndex === 0">
                {{ props.projectOneTitle }}
            </NuxtLink>

            <NuxtLink :to="props.projectTwoLink" v-if="currentVideoIndex === 1">
                {{ props.projectTwoTitle }}
            </NuxtLink>

            <NuxtLink :to="props.projectThreeLink" v-if="currentVideoIndex === 2">
                {{ props.projectThreeTitle }}
            </NuxtLink>

            <NuxtLink :to="props.projectFourLink" v-if="currentVideoIndex === 3">
                {{ props.projectFourTitle }}
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    projectOneTitle: String,
    projectTwoTitle: String,
    projectThreeTitle: String,
    projectFourTitle: String,
    projectOneLink: String,
    projectTwoLink: String,
    projectThreeLink: String,
    projectFourLink: String,
    projectOneVideo: String,
    projectTwoVideo: String,
    projectThreeVideo: String,
    projectFourVideo: String
});

const currentVideoIndex = ref(0);
let hideCircle = useState('moveAnimationEnabled');

onMounted(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', e => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    })

    const videos = [
        document.createElement('video'),
        document.createElement('video'),
        document.createElement('video'),
        document.createElement('video')
    ];

    videos[0].src = props.projectOneVideo;
    videos[1].src = props.projectTwoVideo;
    videos[2].src = props.projectThreeVideo;
    videos[3].src = props.projectFourVideo;

    videos.forEach(video => {
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.play();
    });

    let nextVideoIndex = 1;
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    let radius = 80;
    let maxRadius = canvas.width;

    function drawFadingCircle(ctx, x, y, radius, video) {
    // Draw the video image within the circle
    const scaleX = canvas.width / video.videoWidth;
    const scaleY = canvas.height / video.videoHeight;
    const scale = Math.max(scaleX, scaleY);
    const videoX = (canvas.width / 2) - (video.videoWidth * scale / 2);
    const videoY = (canvas.height / 2) - (video.videoHeight * scale / 2);

    ctx.save();

    // Create a circular clipping path
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    // Draw the video
    ctx.drawImage(video, videoX, videoY, video.videoWidth * scale, video.videoHeight * scale);
    
    // Draw the gradient for the inner fade effect
    const gradient = ctx.createRadialGradient(x, y, radius * 0.8, x, y, radius);
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');     // Fully transparent at the center
    gradient.addColorStop(0.3, 'rgba(0, 0, 0, 0.1)'); // Very light black
    gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.3)'); // Lightly visible black
    gradient.addColorStop(0.7, 'rgba(0, 0, 0, 0.5)'); // Semi-transparent black
    gradient.addColorStop(0.85, 'rgba(0, 0, 0, 0.6)'); // More visible black
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');   // Almost fully black at the edge

    // Fill the circle with the inner gradient
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill(); // Fill the circle with the gradient

    // Draw outer blur effect
    ctx.restore(); // Restore to allow drawing the blur effect

    // Apply a blur filter before drawing the outer gradient
    ctx.filter = 'blur(30px)'; // Adjust the blur radius as needed
    ctx.globalAlpha = 0.8; // Set a global alpha for the blur effect

    // Draw a larger circle for the outer blur effect
    ctx.beginPath();
    ctx.arc(x, y, radius * 1.5, 0, Math.PI * 2); // Change multiplier for larger/smaller blur effect
    ctx.fillStyle = 'black'; // Fill color for the blur
    ctx.fill();

    // Reset the filter and globalAlpha
    ctx.filter = 'none';
    ctx.globalAlpha = 1;

    ctx.restore(); // Restore to the original state
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

        // Draw the video with a fading circular clip
        const clipVideo = videos[nextVideoIndex];
        if (clipVideo.readyState >= clipVideo.HAVE_CURRENT_DATA && hideCircle.value) {
            if (radius < maxRadius) {
                // Draw the fading circle with the video included
                drawFadingCircle(ctx, mouseX, mouseY, radius, clipVideo);
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
        hideCircle.value = false;
        canvas.addEventListener('touchmove', (e) => {
            hideCircle.value = true;
            mouseX = e.touches[0].clientX;
            mouseY = e.touches[0].clientY;
        });

        canvas.addEventListener('touchend', async (e) => {
            hideCircle.value = false;
        });
    } else {
        canvas.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
    }

    canvas.addEventListener('click', () => {
        const animationDuration = 200;
        const startTime = performance.now();

        if (window.matchMedia("(max-width: 767px)").matches) {
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
                    hideCircle.value = false;
                }
                currentVideoIndex.value = nextVideoIndex;
                nextVideoIndex = (nextVideoIndex + 1) % videos.length;
                radius = 80;
            }
        }

        animate();
    });

    draw();
});
</script>

<style>
canvas {
    display: block;
}
</style>
