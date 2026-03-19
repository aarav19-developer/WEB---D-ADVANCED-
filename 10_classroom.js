
document.getElementById("Button1")
.addEventListener("click",()=>{
    const col = document.getElementById("Heading");
    col.style.color = "red"

    const button = document.getElementById("Button1");
    button.textContent = "Click Kyo Kiya"

    const new_para = document.createElement("h2")
    new_para.textContent = "Mat Kar Click";
    console.log(new_para)

    const image = document.createElement("img")
    image.setAttribute("src" , "https://media.makeameme.org/created/i-said-dont-9d8dfdf6a3.jpg")
    image.setAttribute("Alt","Krmu");



    document.getElementById("content").append(new_para);
    document.getElementById("content").append(image);

})



// document.getElementById("content").append(new_para);