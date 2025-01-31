const fish1Path = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x:"15vw", y:0},
        {x:"17vw", y:"7vh"},
        {x:"19vw", y:"14vh"}, 
        {x:"19vw", y:"21vh"}, 
        {x:"21vw", y:"30vh"},
        {x:"23vw", y:"35vh"},
        {x:"25vw", y:"40vh"},
        {x:"28vw", y:"45vh"}
    ]
};




const tweenFish = new TimelineLite();

tweenFish.add(
    TweenLite.to(".fish-1", 4, {
        delay:0,
        bezier: fish1Path,
        ease: Power1.easeInOut
    })
);
