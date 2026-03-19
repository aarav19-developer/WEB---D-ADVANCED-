// PROMISES:-


//  Promises : used to manage asynchronous code effective better than callback HtmlElement And advantage are 
//  easy to manage the getComputedStyle , easy to manage the codes , easy to debugger , code rediability is good.
 



// function pro() {
//     return new Promise ((res,rej)=>{
//         let a=10;
//         if(a>50){
//             res();
//         }
//         else {
//             rej()
//         }
//     })
// }

// pro()
// .then(()=> console.log("Promise Resolved"))
// .catch(()=> console.log("Promise Rejected"))
// .finally(()=> console.log("Inside Finally"))



// Example 1
// console.log("a");
// setTimeout(()=>{
//     console.log("b")
// },5000);
// setTimeout(()=>{
//     console.log("c")
// },3000);
// setTimeout(()=>{
//     console.log("d")
// },2000);

// console.log("e")




// Example 2
console.log("a");
setTimeout(()=>{
    console.log("b")
},0);
Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("e") 