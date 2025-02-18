const isMobile2 = window.innerWidth <= 800;

function createTitleAnimation(titleElement) {
    const move_title_path = {
        curviness: 0,
        autoRotate: false,
        values: [
            { right: isMobile2 ? "7vw" : "8vw", top: isMobile2 ? "20vh" : "5vw", opacity:1 },
            { right: isMobile2 ? "7vw" : "8vw", top: isMobile2 ? "20vh" : "5vw", opacity:1  },
            { right: isMobile2 ? "-70vw" : "15vw", top: isMobile2 ? "-10vw" : "-10vw", opacity:0  }
        ]
    };

    const tween = new TimelineLite();
    tween
        .to(titleElement, 0.7, {
            right: move_title_path.values[0].right,
            top: move_title_path.values[0].top,
            opacity: move_title_path.values[0].opacity,
            ease: Power1.easeInOut
        })
        .to(titleElement, 1, {
            right: move_title_path.values[1].right,
            top: move_title_path.values[1].top,
            opacity: move_title_path.values[1].opacity,
            ease: Power1.easeInOut
        })
        .to(titleElement, 1, {
            right: move_title_path.values[2].right,
            top: move_title_path.values[2].top,
            opacity: move_title_path.values[2].opacity,
            ease: Power1.easeInOut
        });

    return tween;
}

const controller = new ScrollMagic.Controller();

document.querySelectorAll('.title-section').forEach((title, index) => {
    const scene = new ScrollMagic.Scene({
        triggerElement: title.closest('.section-para'),
        duration: isMobile2 ? 1100 : 1500,
        triggerHook: isMobile2 ? -0.2 : 0,
        reverse: true
    })
    .setTween(createTitleAnimation(title))
    .setPin(title.closest('.section-para'))
    //.addIndicators({name: `title-section-${index}`,colorTrigger: "red",colorStart: "red",colorEnd: "red"})
    .addTo(controller);
});