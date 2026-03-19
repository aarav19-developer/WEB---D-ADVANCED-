// function pro(num){
//     return new Promise( (res,rej)=>{
//         setTimeout(()=>{
//             console.log(num);
//             res();
//         },1000)
// })
// }
// pro(1)
//     .then(()=> pro(2))
//     .then(()=> pro(3))
//     .then(()=> pro(4))
//     .then(()=> pro(5))

// const pro = new Promise( (res,rej)=>{
//     setTimeout(()=>{
//             res("promise resolved")
//         },3000)
// })


// function getData(){
//     pro.then(x=>console.log(x));
//     console.log("after promise")
// }
// getData()


// why async and await exist?

// 1. To avoid promise chaining
// 2. To execute the async code properly without confusion


// #. async function always return a promise
// async function getData(){
//     return "async intro";

// }
// console.log(getData())



// #. await use inside a async function.
// #. await uses infront of the promise

// Await: it causes the async function until a promise returns a result


const pro = new Promise( (res,rej)=>{
    setTimeout(()=>{
            res("promise resolved")
        },5000)
})

async function getData(){
    const res = await pro;
    console.log(res)
    console.log("after promise")

}
getData()


// FETCH API

// fetch('https://jsonplaceholder.typicode.com/todos/1')  #it returns a promise, if the link is correct then promise resolved
//       .then(response => response.json())  # json() converts to js object and return a promise.
//       .then(json => console.log(json))


// using async and await:

// async function getData(){
//     try{
//         let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         let json = await response.json()
//         console.log(json)
//     } catch (err){
//         console.error(err)
//     }
// }
// getData()


// Fetch weather data:


async function getData(city){
    const api_key = ""
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let data = await response.json()
        console.log(data)

        console.log("city temp", data.main.temp )

    } catch (err){
        console.error(err)
    }
}
getData("gurugram")

