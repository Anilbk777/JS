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