document.addEventListener('DOMContentLoaded', () => {
    // 1. Wrapper validation
    const wrapper = document.querySelector('.wrapper-1');
    if (!wrapper) {
        console.error('Wrapper element not found');
        return;
    }

    // setup
    let speed = 0.3;
    let currentOffset = 0;
    let totalWidth = 0;

    // Calculate total width and clone logos
    const logos = Array.from(wrapper.children);
    const wrapperWidth = wrapper.offsetWidth;

    // Calculate initial total width
    totalWidth = logos.reduce((total, logo) => {
        const style = getComputedStyle(logo);
        const width = logo.offsetWidth + parseInt(style.marginRight || 0);
        return total + width;
    }, 0);

    // Clone logos until width requirement met
    while (totalWidth < wrapperWidth * 2) {
        logos.forEach(logo => {
            const clone = logo.cloneNode(true);
            wrapper.appendChild(clone);
            const style = getComputedStyle(clone);
            totalWidth += clone.offsetWidth + parseInt(style.marginRight || 0);
        });
    }

    // Animation function
    function animate() {
        currentOffset -= speed;
        wrapper.style.transform = `translateX(${currentOffset}px)`;

        // Get first logo dimensions
        const firstLogo = wrapper.firstElementChild;
        if (firstLogo) {
            const style = getComputedStyle(firstLogo);
            const width = firstLogo.offsetWidth + parseInt(style.marginRight || 0);

            // Recycle when logo moves off screen
            if (Math.abs(currentOffset) >= width) {
                wrapper.appendChild(firstLogo);
                currentOffset += width;
                wrapper.style.transform = `translateX(${currentOffset}px)`;
            }
        }

        requestAnimationFrame(animate);
    }

    // Start animation
    animate();
});