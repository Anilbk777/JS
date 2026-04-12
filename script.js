// var username = "Anil";



// var a = 12;
// a = "hello"
// let b = 11;
// b = 12

// var v;
// let l;

// const pi = 3.14


// // console.log(nm)
// // let nm = "NM "

// // let x =1;

// // {
// //     let x = 2;
// //     console.log("inside bolck ",x)
// // }
// // console.log("outside block (golbal block)",x);


// function abc(){
//     var aa = "meow inside the function"
// }

// if(true){
//     var cat = "Meow"
// }

// // console.log(aa)
// // console.log(cat)

// const name = "Anil";
// const city ="Pokhara";

// let age;
// age = 24;


// let marks = 80;

// let grade = marks >= 80 ? "A" : marks >=70? "B": marks >= 60? "C": "D";

// console.log(grade);

// let a = 10;
// console.log(a++)
// console.log(a++)
// console.log(a)


// for (let i = 1; i <= 50; i++){
//     console.log(i)
// }

// let i = 1
// while (i <=50){
//     console.log(i)
//     i++
// }

// let i = 11;

// do{
//     console.log(i);
//     i++;
// } 
// while (i<2)


// function table(n){
//     for (let i = 1; i <=10; i++){
//         console.log(`${n} X ${i} = ${n * i}`)
//     }
// }
// table(5)

// let total = 0
// function sum(n){

//     for (let i = 1; i<=n; i++){
//         total += i
//     }
//     return total
// }

// console.log(sum(5))


// function table(){
//     for (let i = 1; i <=100; i++){
//         if (i%3 === 0 && i%5 === 0){
//             console.log(i)
//         }
//     }
// }
// table()

// for (let i = 1; i < 101; i++){
//     if(i %7===0){
//         break
//     }
//     console.log(i)
// }



// function abcd(func){
//     // return function (){
//     //     console.log("inside the function")
//     // }
//     func();
// }

// abcd(function (){ console.log("passing function as an argument.")})

// a(2,3);

// let a = (x,y)=>{
//     console.log(`sum of ${x} and ${y}  is ${x+y}`);
// }

// a(2,3);

// function a(x,y){
//     console.log(`sum of ${x} and ${y}  is ${x+y}`);
// }


// function abcd(val){
//     val();
// }

// let x = function(){
//     console.log("heyyyy from x");
// }
// abcd(x)


// function bmi(weight, height){
//     return weight / (height ** 2)
// }

// console.log(bmi(69,1.7).toFixed(2))


// function discountCalculator(discount){
//     return function(price){
//         return price - price * (discount / 100);
//     }
// }

// let discounter = discountCalculator(10);
// console.log(discounter(200));

// let twenty = discountCalculator(20);
// console.log(twenty(200));


// let arr = new Array();
// arr = [1,2,3,4,5];


// a2 = [32,5,6,72,7,1];

// new_a2 = a2.sort((a,b)=> a-b);

// console.log(a2)


// let arr = [32,5,6,72,7,1];

// arr.forEach(function(val){
//     console.log(val + 2);
// });


// let new_arr = arr.map((val)=>{ return val * 2})
// console.log(new_arr)

// let filtered_arr = arr.filter((val)=>{if (val > 10) return true});
// console.log(filtered_arr)

// let ans = new_arr.reduce((accumalutor, val)=> {return accumalutor + val},0);
// console.log(ans)


// let fruits = ["apple","banana","watermelon"];
// fruits[1] = "Kiwi"
// console.log(fruits)

// let arr = [1,2,3,4,5];
// let new_arr = arr.map(function(val){ return val **2});
// console.log(new_arr)

// let a = [1,2];
// let b = [3,4];

// let ab = [...a, ...b];


// console.log(ab);

// let a = [100,20,3];
// console.log(a.sort());


// let role = "admin";
// let  obj = {
//     name : "Anil",
//     age : 24,
//     address : {
//         city : "Pokhara",
//         postal_code : 33770
//     },
//     [role] : "ANIL BK"
// };

// let {city} = obj?.address
// let {name} = obj

// for (let key in obj){
//     console.log(obj[key]);
// }

// let obj1 = {"hello":"world", ...obj}
// console.log(obj1)
// let deepcopy = structuredClone(obj)
// deepcopy.address.postal_code = 34500


// const user = {
//     "first-name" : "anil",
//     address : {
//         city : "Pokhara",
//         "postal-code" : 33770
//     },
    
// };

// let {"first-name": firstName} = user;
// console.log(user)

// let {"postal-code": postalCode} = user.address;

// let courses = {
//     title : "JavaScript",
//     duration : "4 weeks"
// };

// Object.entries(courses).forEach((val) => {
//     console.log(val[0] + ": " + val[1]);
// });


// let aa = document.getElementById("aa");
// console.log(aa);

// let a1 = document.querySelector("h1")
// console.dir(a1)

// let a2 = document.querySelectorAll("h1")
// a2[1]["textContent"] = "This is HTML, CSS and JAVASCRIPT";


// let image = document.querySelector("img")
// image.setAttribute("src","https://plus.unsplash.com/premium_photo-1683129807314-95150b5c3fb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8")



// console.log(image.getAttribute("src"))

// image.removeAttribute("src")


// let p = document.createElement("p")
// p.textContent = "This is a paragraph content added from js."

// document.querySelector("div").append(p)

// let a = document.querySelector("#aa");
// // console.dir(a);\

// a.classList.add("new_class")

// a.textContent = "Welcome to Sheryians"


// let all = document.querySelectorAll("li")
// all.forEach((val)=>{
//     console.log(val.textContent)
// })


// let b = document.querySelector("body")
// let new_img = document.createElement("img")

// new_img.setAttribute("src","https://plus.unsplash.com/premium_photo-1683129807314-95150b5c3fb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8")

// b.prepend(new_img)


// console.log(true+false);

// let li = document.querySelector("li");
// ul.removeChild("li")
// console.dir(ul);
// let li = document.querySelector("li");
// console.log(ul.removeChild(li));

// li.style.backgroundColor = "red";

// let li = document.querySelectorAll("ul li:nth-child(2n)");
// console.log(li);

// li.forEach((ele)=>{
//     ele.classList.add("highlight");
// });

// let span = document.querySelector("span");
// function dblclick(){
//     span.style.color = "Red";
// }
// span.addEventListener("mousemove",dblclick);
// // span.removeEventListener("mousemove", dblclick);


// let inp = document.querySelector("input");
// inp.addEventListener("input",function(ent){
//     if (ent.data !== null){
//         console.log(ent.data);
//     }
// })

// let device = document.querySelector("#device");

// let select = document.querySelector("select")

// select.addEventListener("change",function(dtls){
//     // console.log(dtls);
//     // console.log(dtls.target.value);
//     d =dtls.target.value;
//     device.textContent = `${d} device selected`
// });

// let main = document.querySelector("#main");


// window.addEventListener("keydown",function(detls){
//     // console.log(detls.key);
//     if (detls.key ===" "){
//         main.textContent = "SPACE";

//     }
//     else{
//         main.textContent = detls.key;
//     }
// });

// let btn = document.querySelector("#btn")
// let fileinp = document.querySelector("#inp")

// btn.addEventListener("click",function(detls){
//     // console.log(detls);
//     fileinp.click();
// })

// fileinp.addEventListener("change",function(detls){

//  const file_name = detls.target.files[0]

//  if (file_name){
//     btn.textContent = file_name.name
    
//  }

// })



// let form = document.querySelector("form")
// let main = document.querySelector("#main")
// let inputs = document.querySelectorAll("input")

// form.addEventListener("submit",function(detls){
//     detls.preventDefault()

//     // console.log(inputs[0].value)

//     let card = document.createElement("div")
//     card.classList.add("card")
//     let profile = document.createElement("div")
//     profile.classList.add("profile")

//     let img = document.createElement("img")
//     img.setAttribute("src",inputs[0].value)

//     profile.appendChild(img)
//     img.classList.add("img")

//     let h2 = document.createElement("h2")
//     h2.textContent= inputs[1].value
//     let h3 = document.createElement("h3")
//     h3.textContent= inputs[2].value
//     let p = document.createElement("p")
//     p.textContent = inputs[3].value

//     card.appendChild(profile)
//     card.appendChild(h2)
//     card.appendChild(h3)
//     card.appendChild(p)

//     main.appendChild(card)

//     form.reset()
// })


// let aa = document.querySelector("#aa");


// aa.addEventListener("mouseover",function(ent){
//     aa.style.backgroundColor = "yellow"
// })

// aa.addEventListener("mouseout",function(ent){

//     aa.style.backgroundColor = 'blue'
// })



// window.addEventListener("mousemove",function(ent){
//     aa.style.top = ent.clientY +"px"
//     aa.style.left = ent.clientX +"px"
// })


// let text = document.querySelector("#text");
// let count = document.querySelector("#count");

// text.addEventListener("keyup", () => {
//     let length = text.value.length;
//     count.textContent = `${length} characters`;
// });


// let parent = document.querySelector("#parent");
// let child = document.querySelector("#child");

// // child.addEventListener("click",()=>{
// //     console.log("Child chicked");
// // });

// parent.addEventListener("click",()=>{
//     console.log("Parent clicked.");
// });

// let ul = document.querySelector("ul");

// ul.addEventListener("click",(ent)=>{
//     console.log(ent.target);
//     ent.target.classList.toggle("lt");

// });

// let form = document.querySelector(".form")
// let nm = document.querySelector("#name")

// form.addEventListener("submit", function(evnt){
//     evnt.preventDefault()
    
//     if (nm.value.length <= 2){
//         document.querySelector(".hide").style.display = "initial"
//     }
//     else{
//         document.querySelector(".hide").style.display = "none"

//     }
// })

// let form = document.querySelector("#form");
// let email = document.querySelector("#email");
// let password = document.querySelector("#password");
// let result = document.querySelector("#resultMessage");

// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;


// form.addEventListener("submit",function(evnt){
//     evnt.preventDefault();

//      // hide previous result
//     result.style.display = "none";

//     document.querySelectorAll(".error").forEach((el) => {
//     el.textContent = "";
// });
//     let emailAns = emailRegex.test(email.value);
//     let passwordAns = passwordRegex.test(password.value);
//     let isValid = true

//     if (!emailAns){
//         document.querySelector("#emailError").textContent = "Invalid email"
//         isValid = false
//     }
//     if (!passwordAns){
//         document.querySelector("#passwordError").textContent = "Weak password"
//         isValid = false
//     }

//     if (isValid){
//         result.textContent = "Everything is correct.";
//         result.style.display = "block";
//     }
// });


// function clearError(input) {
//     let field = input.parentElement;
//     let error = field.querySelector(".error");

//     error.textContent = "";
// }

// email.addEventListener("input", function(){
//     if (emailRegex.test(email.value)){
//         clearError(email);
//     }
// });
// password.addEventListener("input", function(){
//     if (passwordRegex.test(password.value)){
//         clearError(password);
//     }
// });




// // let st = setInterval(() => {
// //     console.log("Hello world");
// // }, 5000);

// // setTimeout(() => {
// //     clearInterval(st);
// // }, 20000); // stop after 20 seconds


// // let count = 10;

// // let interval = setInterval(function(){
// //     if (count >=0){
// //         console.log(count);
// //         count--;
// //     }
// //     else clearInterval(interval);
// // },1000);

// let container = document.querySelector(".container");
// let ty = document.querySelector("#ty");

// setTimeout(function(){
//     container.style.display = "none";
//     ty.style.display = "block";
    
// }, 5000);

// const user = {name:"Anil",age:24}

// localStorage.setItem("user",JSON.stringify(user))
// const parsed = JSON.parse(localStorage.getItem("user"))

// console.log(parsed)

// 4. Write a function isEmpty(value) that checks if a given value is null , undefined , or "" .
function isEmpty(value){
    if (value === null){
        console.log("Null")
        return false
    }
    else if (value === undefined){
        console.log("Undefined")
        return false
    }
    else if (value === ""){
        console.log("Empty string")
        return false
    }
    else{
        console.log(`Given value is ${value}.`)
        return true
    }
}
// isEmpty("")



