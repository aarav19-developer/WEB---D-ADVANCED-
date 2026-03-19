// const btn = document.getElementById("btn");
// const text = document.getElementById("text")

// btn.addEventListener("click",()=>{
//     text.textContent="button was clicked!"
// })

// const box = document.getElementById("box").style.color = "yellow";
// console.log(box)

// const button = document.getElementById("button")

// button.addEventListener("click",function() {
//     const newitem = document.createElement("li");
//     newitem.textContent= "bread";

//     const list = document.getElementById("list");
//     // list.appendChild(newitem)
//     list.removeChild(newitem)
// })

// const button = document.getElementById("startbtn")
// button.addEventListener("click", function(){
//     alert("button is clicked")
// })


// const startbtn = document.getElementById("startbtn")
// const stopbtn = document.getElementById("stopbtn")

// function showmessage(){
//     alert("button is clicked")
// }
// startbtn.addEventListener("click",showmessage);

// stopbtn.addEventListener("click",function(){
//     startbtn.removeEventListener("click",showmessage)
// });

// console.log("first message");

// setTimeout(()=>{
//     console.log("second message")
// }, 2000);

// console.log("third message")

// setInterval(() => {
//     console.log("repeating message")
// }, 1000);

// function first(){
//     second()
//     console.log("first")
// }
// function second(){
//    third()
//    console.log("second")
// }
// function third(){
//     console.log("third")
// }
// first()

// function delay(ms){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(`action complete after ${ms} ms`)
//         },ms)
//     });
// }

// console.log("starting delay...");
// delay(5000).then((message)=>{
//     console.log(message);
// });

// function first(){
//   second();
// }

// function second(){
//   console.log("Hello");
// }

// first();