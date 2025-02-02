const isMobile3 = window.innerWidth <= 800;

const move_text_path = {
    curviness: 0,
    autoRotate: false,
    values: [
        { opacity: 0 },
        { opacity: 1 },
        { opacity: 1 },
        { opacity: 0 , top: "0%", transform : "rotate(-5deg)"}
    ]
};

const move_logo_1_path = {
    curviness: 0,
    autoRotate: false,
    values: [
        { marginLeft: "2vw"},
        { marginLeft: "2vw"},
        { marginLeft: "2vw"},
        { marginLeft: "-80vw"}
    ]
};

const move_logo_2_path = {
    curviness: 0,
    autoRotate: false,
    values: [
        { marginLeft: "2vw"},
        { marginLeft: "2vw"},
        { marginLeft: "2vw"},
        { marginLeft: "120vw"}
    ]
};


const tween3 = new TimelineLite();
const textElement = document.querySelector('.section-text-a-propos-de-moi-1');
const logoElement1 = document.querySelector('.logo-banniere-1');
const logoElement2 = document.querySelector('.logo-banniere-2');

tween3
    .to(textElement, 1.2, {
        left: move_text_path.values[1].left,
        opacity: move_text_path.values[1].opacity,
        ease: Power1.easeOut
    })
    .to(logoElement1, 0.8, {
        marginLeft: move_logo_1_path.values[0].marginLeft,
        ease: Power1.easeOut
    }, "-=1.2") 
    .to(logoElement2, 0.8, {
        marginLeft: move_logo_2_path.values[0].marginLeft,
        ease: Power1.easeOut
    }, "-=1.2")
    .to(textElement, 1, {
        left: move_text_path.values[2].left,
        opacity: move_text_path.values[2].opacity,
        ease: Power1.easeInOut
    })
    .to(logoElement1, 1, {
        marginLeft: move_logo_1_path.values[1].marginLeft,
        ease: Power1.easeInOut
    }, "-=1") 
    .to(logoElement2, 1, {
        marginLeft: move_logo_2_path.values[1].marginLeft,
        ease: Power1.easeInOut
    }, "-=1")
    .to(textElement, 0.8, {
        left: move_text_path.values[3].left,
        opacity: move_text_path.values[3].opacity,
        top: move_text_path.values[3].top,
        transform: move_text_path.values[3].transform,
        ease: Power1.easeIn
    })
    .to(logoElement1, 0.8, {
        marginLeft: move_logo_1_path.values[3].marginLeft,
        ease: Power1.easeIn
    }, "-=0.8")
    .to(logoElement2, 0.8, {
        marginLeft: move_logo_2_path.values[3].marginLeft,
        ease: Power1.easeIn
    }, "-=0.8"); 

const controller2 = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: ".section-para",
    duration: isMobile3 ? 1100 : 1500,
    triggerHook: isMobile3 ? -0.2 : 0,
    reverse: true
})
    .setTween(tween3)
    //.addIndicators({name: "text-animation",colorTrigger: "blue",colorStart: "blue",colorEnd: "blue"})
    .addTo(controller2);