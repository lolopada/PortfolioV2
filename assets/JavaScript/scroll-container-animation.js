// Initialize controller
const controller_scroll = new ScrollMagic.Controller();

// Create timeline for scroll container animation
const scrollAnimation = new TimelineLite();

// Device detection
function isMobilescroll() {
    return window.innerWidth <= 768;
}

// Smooth scroll function
function smoothScroll(target, duration) {
    const offset = isMobilescroll() ? 870 : 1050;
    const targetPosition = target + offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing function
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Add smooth scroll functionality with offset
document.querySelector('.scroll-container a').addEventListener('click', function(e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    if (targetSection) {
        smoothScroll(targetSection.offsetTop, 2000); // 2000ms duration
    }
});

// Add animation to timeline
scrollAnimation
    .to('.scroll-container', 1, {
        opacity: 0,
        y: 20,
        ease: Power1.easeInOut,
        onStart: function() {
            document.querySelector('.scroll-container').style.visibility = 'visible';
        },
        onComplete: function() {
            if (this.progress() === 1) {
                document.querySelector('.scroll-container').style.visibility = 'hidden';
            }
        },
        onReverseComplete: function() {
            document.querySelector('.scroll-container').style.visibility = 'visible';
        }
    });

// Create scene and add to controller
const scrollScene = new ScrollMagic.Scene({
    triggerElement: "#first-section",
    triggerHook: 0.6,
    duration: 150,
    reverse: true
})
.setTween(scrollAnimation)
.addTo(controller_scroll);







// Initialize controller
const controller_scroll2 = new ScrollMagic.Controller();

// Create timeline for scroll container animation
const scrollAnimation2 = new TimelineLite();

// Add smooth scroll functionality for second container
document.querySelector('.scroll-container-2 a').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Get target section more specifically
    const targetSection = document.querySelector(this.getAttribute('href'));
    console.log('Target section:', targetSection);
    
    if (targetSection) {
        // Calculate proper offset including any headers or fixed elements
        const headerOffset = isMobilescroll() ? 170 : 200; // Adjust these values as needed
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        smoothScroll(offsetPosition, 2000); // 2000ms duration
    } else {
        console.error('Target section not found');
    }
});

scrollAnimation2
    .to('.scroll-container-2', 0.5, {
        autoAlpha: 1,
        y: 0,
        ease: Power1.easeInOut,
    })
    .to('.scroll-container-2', 0.5, {
        autoAlpha: 0.5,
        y: 10,
        ease: Power1.easeInOut
    })
    .to('.scroll-container-2', 0.5, {
        autoAlpha: 0,
        y: 20,
        ease: Power1.easeInOut
    });

// Create scene for second section
const scrollScene2 = new ScrollMagic.Scene({
    triggerElement: ".section-1",
    triggerHook: isMobilescroll() ? -0.2 : 0,
    duration: isMobilescroll() ? 1100 : 1700,
    reverse: true
})
.setTween(scrollAnimation2)
.addTo(controller_scroll2);





// pour le scroll 3 

const scrollAnimation3 = new TimelineLite();

document.querySelector('.scroll-container-3 a').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Get target section more specifically
    const targetSection = document.querySelector(this.getAttribute('href'));
    console.log('Target section:', targetSection);
    
    if (targetSection) {
        // Calculate proper offset including any headers or fixed elements
        const headerOffset = isMobilescroll() ? 2000 : 2000; // Adjust these values as needed
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        smoothScroll(offsetPosition, 2000); // 2000ms duration
    } else {
        console.error('Target section not found');
    }
});


scrollAnimation3
    .to('.scroll-container-3', 0.5, {
        autoAlpha: 1,
        y: 0,
        ease: Power1.easeInOut,
    })
    .to('.scroll-container-3', 0.5, {
        autoAlpha: 0.5,
        y: 10,
        ease: Power1.easeInOut
    })
    .to('.scroll-container-3', 0.5, {
        autoAlpha: 0,
        y: 20,
        ease: Power1.easeInOut
    });

const scrollScene3 = new ScrollMagic.Scene({
    triggerElement: ".section-1",
    triggerHook: isMobilescroll() ? -0.2 : 0,
    duration: isMobilescroll() ? 1100 : 1700,
    reverse: true
})
.setTween(scrollAnimation3)
.addTo(controller_scroll2);