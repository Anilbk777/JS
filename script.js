// function createToaster(config){
//     return function(str){
//         let parent = document.querySelector(".parent")
//         let div = document.createElement("div");
        
//         div.className =`inline-block ${config.theme ==="dark" ? "bg-gray-800 text-white" : "bg-gray-800 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none `
//         div.textContent=str

//         parent.appendChild(div)
//         parent.classList.add("fixed")
//         if (config.positionX !== "left" && config.positionY !== "top"){
//             parent.className += ` ${config.positionX === "right" ? "right-5" : "left-5"} ${config.positionY === "bottom" ? "bottom-5" : "top-5"}`

//         }
        
//         setTimeout(()=>{
//             parent.removeChild(div)
//         }, config.duration * 1000)

//     }
// };


// let toaster = createToaster({
//     positionX:"right",
//     positionY:"bottom",
//     theme:"dark",
//     duration:3,

// });

// toaster("Hello");

// setTimeout(()=>{
//     toaster("This is a second notification")
// }, 2000);


// function fetchProfile(username, cb){
//     setTimeout(()=>{
//         console.log(username)
//         cb({username})
//     },3000)
// }

// fetchProfile("anil",(fetchedData)=>{
//     console.log("this is the fethced data from using callback: ",fetchedData.username)
// })

let pr = new Promise((resolve, reject)=>{
    let num= Math.floor(Math.random()*10)
  
    setTimeout(()=>{
    if (num <=5){
        resolve(`this is resolved  ${num}`)
    }
    else{
        reject(`This is **rejected**  ${num}`)
    }
    },1000)
})


pr.then((val)=>{
    console.log("Resolved : ",val)
}).catch((message)=>{
console.log("Rejected : ",message)
})
