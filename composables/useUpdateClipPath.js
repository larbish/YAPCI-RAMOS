import { gsap } from "gsap"

const applyWillChange = (element) => {
    element.style.willChange = 'clip-path';
}

const removeWillChange = (element) => {
    element.style.willChange = 'auto';
}

export const useUpdateClipPath = (x, y, overlayElement, updateType) => {
    if (updateType == 'move') {
        applyWillChange(overlayElement.value)
        gsap.to(overlayElement.value, {
            duration: 0,
            css: {
                clipPath: `circle(80px at ${x}% ${y}%)`
            },
        })

        removeWillChange(overlayElement.value)
    }

    if (updateType == 'click') {
        gsap.to(overlayElement.value, {
            duration: 1,
            css: {
                clipPath: `circle(200% at ${x}% ${y}%)`
            },
        })
    }

    if (updateType == 'disable') {
        gsap.to(overlayElement.value, {
            duration: 0.01,
            css: {
                clipPath: `circle(0% at ${x}% ${y}%)`
            },
        })
    }

}