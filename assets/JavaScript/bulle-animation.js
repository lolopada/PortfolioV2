const FlightPath1 = {
    curviness: 1,
    autoRotate: false,
    values: [
        {x: 0, y: 0},          
        {x: 8, y: -95},       
        {x: -10, y: -190},     
        {x: 7, y: -300},      
        {x: -9, y: -420},     
        {x: 6, y: -560},      
        {x: -8, y: -720},     
        {x: 10, y: -900},     
        {x: -7, y: -1100},    
        {x: 9, y: -1300},     
        {x: -5, y: -1400},    
        {x: 0, y: -1500}      
    ]
};

const FlightPath2 = {
    curviness: 1,
    autoRotate: false,
    values: [
        {x: 0, y: 0},
        {x: -9, y: -95},
        {x: 10, y: -190},
        {x: -8, y: -300},
        {x: 7, y: -420},
        {x: -6, y: -560},
        {x: 8, y: -720},
        {x: -10, y: -900},
        {x: 9, y: -1100},
        {x: -7, y: -1300},
        {x: 5, y: -1400},
        {x: 0, y: -1500}
    ]
};

const FlightPath3 = {
    curviness: 1,
    autoRotate: false,
    values: [
        {x: 0, y: 0},
        {x: 10, y: -95},
        {x: -8, y: -190},
        {x: 9, y: -300},
        {x: -7, y: -420},
        {x: 8, y: -560},
        {x: -6, y: -720},
        {x: 7, y: -900},
        {x: -9, y: -1100},
        {x: 8, y: -1300},
        {x: -5, y: -1400},
        {x: 0, y: -1500}
    ]
};

const FlightPath4 = {
    curviness: 1,
    autoRotate: false,
    values: [
        {x: 0, y: 0},
        {x: -7, y: -95},
        {x: 9, y: -190},
        {x: -10, y: -300},
        {x: 8, y: -420},
        {x: -7, y: -560},
        {x: 6, y: -720},
        {x: -8, y: -900},
        {x: 10, y: -1100},
        {x: -9, y: -1300},
        {x: 5, y: -1400},
        {x: 0, y: -1500}
    ]
};

const FlightPath5 = {
    curviness: 1,
    autoRotate: false,
    values: [
        {x: 0, y: 0},
        {x: 8, y: -95},
        {x: -10, y: -190},
        {x: 9, y: -300},
        {x: -8, y: -420},
        {x: 7, y: -560},
        {x: -6, y: -720},
        {x: 9, y: -900},
        {x: -7, y: -1100},
        {x: 8, y: -1300},
        {x: -5, y: -1400},
        {x: 0, y: -1500}
    ]
};
const tween = new TimelineLite();

tween.add([
    TweenLite.to(".bulle-para1", 6.5, {
        bezier: FlightPath1,
        scale: 1.4,
        ease: Power1.easeInOut
    }),
    TweenLite.to(".bulle-para1-bis", 6.2, {
        bezier: FlightPath1,
        scale: 1.7,
        ease: Power1.easeInOut
    }),
    TweenLite.to(".bulle-para2", 7, {
        bezier: FlightPath2,
        scale: 2,
        ease: Power1.easeInOut
    }),
    TweenLite.to(".bulle-para3", 7.5, {
        bezier: FlightPath3,
        scale: 1.8,
        ease: Power1.easeInOut
    }),
    TweenLite.to(".bulle-para4", 7, {
        bezier: FlightPath4,
        scale: 1.9,
        ease: Power1.easeInOut
    }),
    TweenLite.to(".bulle-para5", 7.3, {
        bezier: FlightPath5,
        scale: 2,
        ease: Power1.easeInOut
    })
]);