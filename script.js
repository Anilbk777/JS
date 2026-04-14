function createToaster(config){
    return function(str){
        let parent = document.querySelector(".parent")
        let div = document.createElement("div");
        
        div.className =`inline-block ${config.theme ==="dark" ? "bg-gray-800 text-white" : "bg-gray-800 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none `
        div.textContent=str

        parent.appendChild(div)
        parent.classList.add("fixed")
        if (config.positionX !== "left" && config.positionY !== "top"){
            parent.className += ` ${config.positionX === "right" ? "right-5" : "left-5"} ${config.positionY === "bottom" ? "bottom-5" : "top-5"}`

        }
        
        setTimeout(()=>{
            parent.removeChild(div)
        }, config.duration * 1000)

    }
};


let toaster = createToaster({
    positionX:"right",
    positionY:"bottom",
    theme:"dark",
    duration:3,

});

toaster("Hello");

setTimeout(()=>{
    toaster("This is a second notification")
}, 2000);
