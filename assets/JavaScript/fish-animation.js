const fish1Path = {
    curviness: 1.7,
    autoRotate: true,
    values: [
        {x:"0vw", y:"10.5vh"},
        {x:"15vw", y:"20.5vh"},
        {x:"30vw", y:"34.5vh"},
        {x:"15vw", y:"45vh"},
        {x:"30vw", y:"60vh"},
        {x:"40vw", y:"57vh"},
        {x:"55vw", y:"40vh"},
        {x:"80vw", y:"58vh"},
        {x:"70vw", y:"67vh"},
        {x:"75vw", y:"43vh"},
        {x:"90vw", y:"40vh"},
        {x:"120vw", y:"55vh"}
    ]
};

const fish2Path = {
    curviness: 1.7,
    autoRotate: true,
    values: [
        {x:"10vw", y:"0vh"},
        {x:"15vw", y:"10vh"},
        {x:"25vw", y:"-23vh"},
        {x:"38vw", y:"-30vh"},
        {x:"44vw", y:"-48vh"},
        {x:"37vw", y:"-57vh"},
        {x:"26vw", y:"-46vh"},
        {x:"21vw", y:"-36vh"},
        {x:"23vw", y:"-30vh"},
        {x:"36vw", y:"-30vh"},
        {x:"45vw", y:"-25vh"},
        {x:"50vw", y:"-18vh"},
        {x:"58vw", y:"-7vh"},
        {x:"78vw", y:"-10vh"},
        {x:"87vw", y:"-23vh"},
        {x:"84vw", y:"-40vh"},
        {x:"74vw", y:"-34vh"},
        {x:"79vw", y:"-26vh"},
        {x:"100vw", y:"-31vh"},
        {x:"120vw", y:"-55vh"}
    ]
};

const tweenFish = new TimelineLite();

tweenFish.add([
    TweenLite.to(".fish-1", 8, {
        bezier: fish1Path,
        ease: Power1.easeInOut
    }),
    TweenLite.to(".fish-2", 11, {
        bezier: fish2Path,
        ease: Power1.easeInOut
    })
]);
