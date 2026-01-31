// console.log("This could be better")
// console.log(!![]) 
// console.log([]==[]) 
// console.log({}=={})
// console.log([] === []) 
// console.log("1"-1)
// console.log("1"+1)
// // console.log(" "1" + 1")
// console.log([1,2]+[3,4])
// console.log([]+{})
// console.log({}+[])
// console.log(0.1 + 0.2 == 0.3)
// console.log(0.1 + 0.2 === 0.3)


// TYPES OF FUNCTION:-

// 1. Regular function:
function sample(){
    console.log("hello 19");
}
sample()

// The above function with return statement:
function samp(){
    return "hello 19";
}
console.log(samp());


// 2. Arrow function:
const sam = () => console.log("DEAR ZINDAGI")
sam()


// 3. Callback function:
function S(callback){
    console.log("TESTING");
    callback()
}
function demo(){
    console.log(demo)
}
S(demo)  

// 4. First class function:-   we can treat a variasble as a function.
                            // we can pass a function as an argument inside another function.
                            // we can return a function from a function.
function test(){
    return function test2(){
        console.log("test2");
        return function test3(){
            console.log("test3")
        }
    }
}
// test()()()
// or 
let value = test()
let value1 = value()
value1()

// 5. Higher Order Function:
 // map, filter, reduce

// 6. Anonomous Function: The function which does not have any name.
setTimeout(()){

}

//7. Self Invoking function(IIFE): To obtain data provacy and to call a function immidiately affter the function scope. 
(fucntion(){
    

})()
