document.addEventListener('DOMContentLoaded', () => {
    console.log('logo-banner-animation.js loaded');
    const wrapper = document.querySelector('.wrapper-1');
    if (!wrapper) {
        console.log('Wrapper not found');
        return;
    }
    const logos = Array.from(wrapper.children);
    console.log(`Number of logos: ${logos.length}`);

    let speed = 0.3; // pixels per frame
    let currentOffset = 0;

    // Calculate total width of logos
    const wrapperWidth = wrapper.offsetWidth;
    let totalLogosWidth = logos.reduce((total, logo) => {
        const style = getComputedStyle(logo);
        return total + logo.offsetWidth + parseInt(style.marginRight);
    }, 0);

    // Clone additional logos if needed
    while (totalLogosWidth < wrapperWidth) {
        logos.forEach(logo => {
            const clone = logo.cloneNode(true);
            wrapper.appendChild(clone);
            totalLogosWidth += logo.offsetWidth + parseInt(getComputedStyle(logo).marginRight);
        });
    }

    // Clone les logos pour assurer un défilement continu
    logos.forEach(logo => {
        const clone = logo.cloneNode(true);
        wrapper.appendChild(clone);
    });

    function animate() {
        currentOffset -= speed;
        wrapper.style.transform = `translateX(${currentOffset}px)`;

        // Obtenir la largeur du premier logo incluant la marge droite
        const firstLogo = wrapper.children[0];
        const firstLogoStyle = getComputedStyle(firstLogo);
        const firstLogoWidth = firstLogo.offsetWidth + parseInt(firstLogoStyle.marginRight);

        // Lorsque le premier logo a complètement disparu à gauche
        if (Math.abs(currentOffset) >= firstLogoWidth) {
            wrapper.appendChild(firstLogo);
            currentOffset += firstLogoWidth;
            wrapper.style.transform = `translateX(${currentOffset}px)`;
        }

        requestAnimationFrame(animate);
    }

    animate();
});