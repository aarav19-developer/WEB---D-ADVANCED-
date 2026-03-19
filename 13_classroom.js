const pro = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Payment Done");
    },5000)
})


async function getData() {
    const res = await pro;
    console.log(res);
    console.log("Dashboard Acces");
}


async function getData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let json = await response.json()
    console.log(json)
}