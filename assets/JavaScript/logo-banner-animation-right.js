document.addEventListener('DOMContentLoaded', () => {
    console.log('logo-banner-animation.js loaded');
    const wrapper = document.querySelector('.wrapper-2');
    if (!wrapper) {
        console.log('Wrapper not found');
        return;
    }
    const logos = Array.from(wrapper.children);
    console.log(`Number of logos: ${logos.length}`);

    let speed = 0.3; 
    let currentOffset = 0;

    logos.forEach(logo => {
        const clone = logo.cloneNode(true);
        wrapper.appendChild(clone);
    });

    function animate() {
        currentOffset += speed; 
        wrapper.style.transform = `translateX(${currentOffset}px)`;

        const lastLogo = wrapper.children[wrapper.children.length - 1];
        const lastLogoStyle = getComputedStyle(lastLogo);
        const lastLogoWidth = lastLogo.offsetWidth + parseInt(lastLogoStyle.marginRight);

        if (currentOffset >= lastLogoWidth) {
            const firstLogo = wrapper.children[0];
            wrapper.insertBefore(lastLogo, firstLogo);
            currentOffset -= lastLogoWidth;
            wrapper.style.transform = `translateX(${currentOffset}px)`;
        }

        requestAnimationFrame(animate);
    }

    animate();
});