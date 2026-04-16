const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
})
function firstPageAnim(){
    let t1 = gsap.timeline();

    t1.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease:"expo.inOut"
    })
    .to(".boundingelem",{
        y:0,
        ease:"expo.inOut",
        duration:1.5,
        stagger:.2,
        delay:-1

    })
    .from("#hero-footer",{
        y:-10,
        opacity:0,
        duration:1.5,
        ease:"expo.inOut",
        delay:-1

    })

}
firstPageAnim()

function circleMouseFollower(){
    window.addEventListener("mousemove",(detls)=>{
        // console.log(detls)
        document.querySelector(".mini-circle").style.transform = `translate(${detls.clientX}px, ${detls.clientY}px)`
    })
}
circleMouseFollower()


document.querySelectorAll(".elem").forEach(function(elem){
    let rotate = 0
    let diffrot = 0
    
    elem.addEventListener("mouseenter", (e)=>{
        let diff = e.clientY - elem.getBoundingClientRect().top
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            top: diff - 175,
            left: e.clientX - 175,
            duration: 0.3
        })
    })
    
    elem.addEventListener("mousemove", (dets)=>{
        let diff =  dets.clientY - elem.getBoundingClientRect().top
        
        gsap.to(elem.querySelector("h1"),{
            opacity:0.3,
            x:30,
            duration:0.3
        })

        diffrot = dets.clientX - rotate
        rotate = dets.clientX
        gsap.to(elem.querySelector("img"),{
            ease:"power1.out",
            top:diff - 175,
            left : dets.clientX - 175,
            duration: 0.5,
            rotate:gsap.utils.clamp(-20, 20, diffrot)
        })
    })
    
    elem.addEventListener("mouseleave", ()=>{
        gsap.to(elem.querySelector("h1"),{
            opacity:0.7,
            x:0,
            duration:0.3
        })

        gsap.to(elem.querySelector("img"),{
            opacity:0,
            duration: 0.5
        })
    })
})