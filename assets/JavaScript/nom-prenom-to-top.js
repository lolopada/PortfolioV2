// Créer une timeline principale
const nomAnimation = new TimelineLite({
    paused: false // L'animation démarre automatiquement
});

// Animation pour S
nomAnimation.from("#S-nom", 1.0, {
    x: -300,
    y: -60,
    rotation: -45,
    opacity: 0,
    transformOrigin: "center center",
    ease: Power1.easeOut
});

// Animation pour A
nomAnimation.from("#A-nom", 1.0, {
    x: -200,
    y: 230,
    rotation: 95,
    opacity: 0,
    transformOrigin: "center center",
    ease: Power1.easeOut
}, "-=1.2"); // Commence 0.1s après le début de l'animation précédente

// Animation pour I
nomAnimation.from("#I-nom", 1.0, {
    x: -100,
    y: -180,
    rotation: 120,
    opacity: 0,
    transformOrigin: "center center",
    ease: Power1.easeOut
}, "-=1.1");

// Animation pour N
nomAnimation.from("#N-nom", 1.0, {
    x: 70,
    y: 200,
    rotation: -120,
    opacity: 0,
    transformOrigin: "center center",
    ease: Power1.easeOut
}, "-=1.0");

// Animation pour T
nomAnimation.from("#T-nom", 1.0, {
    x: 80,
    y: -200,
    rotation: 110,
    opacity: 0,
    transformOrigin: "center center",
    ease: Power1.easeOut
}, "-=0.9");

// Animation pour O
nomAnimation.from("#O-nom", 1.0, {
    x: 100,
    y: 160,
    rotation: -30,
    opacity: 0,
    transformOrigin: "center center",
    ease: Power1.easeOut
}, "-=0.9");

// Animation pour N-bis
nomAnimation.from("#N-bis-nom", 1.0, {
    x: 270,
    y: -70,
    rotation: 105,
    opacity: 0,
    transformOrigin: "center center",
    ease: Power1.easeOut
}, "-=0.8");

// Animation pour le prénom
["L", "O", "I", "C"].forEach((letter, index) => {
    nomAnimation.from(`#${letter}-prenom`, 1.3, {
        y: 200,
        x: (index - 1.5) * 20, // Décalage progressif sur l'axe X
        opacity: 0,
        transformOrigin: "center center",
        ease: Power1.easeOut
    }, `-=${1.2 - (0.1 * index)}`);
});









const isMobile = window.innerWidth <= 800;

const move_S_nom_path = {
    curviness: 0,
    autoRotate: false,
    values: [
        { left: isMobile ? "1vw" : "1vw", top: "1vw" }
    ]
};

const move_A_nom_path = {
    curviness: 0,
    autoRotate: false,
    values: [
        { left: isMobile ? "6.8vw" : "4.8vw", top: "1vw" }
    ]
};

const move_I_nom_path = {
    curviness: 0,
    autoRotate: false,
    values: [
        { left: isMobile ? "15vw" : "9.6vw", top: "1vw" }
    ]
};

const move_N_nom_path = {
    curviness: 0,
    autoRotate: false,
    values: [
        { left: isMobile ? "16.6vw" : "10.6vw", top: "1vw" }
    ]
};

const move_T_nom_path = {
    curviness: 0,
    autoRotate: false,
    values: [
        { left: isMobile ? "24vw" : "15vw", top: "1vw" }
    ]
};

const move_O_nom_path = {
    curviness: 0,
    autoRotate: false,
    values: [
        { left: isMobile ? "31.1vw" : "19.1vw", top: "1vw" }
    ]
};

const move_N_bis_nom_path = {
    curviness: 0,
    autoRotate: false,
    values: [
        { left: isMobile ? "41.8vw" : "26.8vw", top: "1vw" }
    ]
};

const move_L_prenom_path = {
    curviness: 0,
    autoRotate: false,
    values: [
        { left: isMobile ? "1vw" : "1vw", top: isMobile ? "14vw" : "10vw" }
    ]
};

const move_O_prenom_path = {
    curviness: 0,
    autoRotate: false,
    values: [
        { left: isMobile ? "6.3vw" : "4.5vw", top: isMobile ? "14vw" : "10vw" }
    ]
};

const move_I_prenom_path = {
    curviness: 0,
    autoRotate: false,
    values: [
        { left: isMobile ? "17vw" : "12.5vw", top: isMobile ? "14vw" : "10vw" }
    ]
};

const move_C_prenom_path = {
    curviness: 0,
    autoRotate: false,
    values: [
        { left: isMobile ? "18.7vw" : "13.5vw", top: isMobile ? "14vw" : "10vw" }
    ]
};


const tween2 = new TimelineLite();

tween2
    .add([
        TweenLite.to("#S-nom", 1, {
            bezier: move_S_nom_path,
            ease: Power1.easeInOut
        }),
        TweenLite.to("#A-nom", 1, {
            bezier: move_A_nom_path,
            ease: Power1.easeInOut
        }),
        TweenLite.to("#I-nom", 1, {
            bezier: move_I_nom_path,
            ease: Power1.easeInOut
        }),
        TweenLite.to("#N-nom", 1, {
            bezier: move_N_nom_path,
            ease: Power1.easeInOut
        }),
        TweenLite.to("#T-nom", 1, {
            bezier: move_T_nom_path,
            ease: Power1.easeInOut
        }),
        TweenLite.to("#O-nom", 1, {
            bezier: move_O_nom_path,
            ease: Power1.easeInOut
        }),
        TweenLite.to("#N-bis-nom", 1, {
            bezier: move_N_bis_nom_path,
            ease: Power1.easeInOut
        }),

        TweenLite.to("#L-prenom", 1, {
            bezier: move_L_prenom_path,
            ease: Power1.easeInOut
        }),
        TweenLite.to("#O-prenom", 1, {
            bezier: move_O_prenom_path,
            ease: Power1.easeInOut
        }),
        TweenLite.to("#I-prenom", 1, {
            bezier: move_I_prenom_path,
            ease: Power1.easeInOut
        }),
        TweenLite.to("#C-prenom", 1, {
            bezier: move_C_prenom_path,
            ease: Power1.easeInOut
        })
    ], 0);

const controller1 = new ScrollMagic.Controller();

const scene1 = new ScrollMagic.Scene({
    triggerElement: ".start-nom-to-top-animation",
    duration: 600,           // Use percentage-based duration
    triggerHook: 0.5,          // Trigger in middle of viewport
    reverse: true              // Allow reverse animation
})
.setTween(tween2)
.addIndicators({name: "S movement"})
.addTo(controller1);