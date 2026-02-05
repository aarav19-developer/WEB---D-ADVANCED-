const para = document.getElementsByTagName("p");

// for(let i = 0;i<para.length; i++){
//     para[i].style.color="red"
// }

// for(let i = 0;i<para.length; i++){
//     if (i%2 == 0){
//         para[i].style.color = "red"
//     }
//     else{
//         para[i].style.color = "green"
//     }
// }
// para[3].style.fontWeight = "bold"
// }


const par = document.querySelectorAll("p");
console.log(par)

par.forEach((par, index) => {
    if (index % 2 === 0) {
        par.style.color = "green"
    }
    else {
        par.style.color = "RED"
    }
})
para[3].style.fontWeight = "bold"

// textcontent
// innertext
// innerhtml { all html tag work in this}

const newpara = document.createElement("p");
newpara.textcontent = "This is a dynamically created paragraph"
console.log(newpara)

document.getElementById("content").append(newpara);

const image = document.createElement("img");
image.setAttribute("scr", "http:127.0.0.1:5500/8_classroom.html")

image.setAttribute("alt", "html page");

document.getElementById("gallery").append(image);

