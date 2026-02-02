const profile = document.getElementById("profile");
profile.style.backgroundColor= "#f5f5f5";
profile.style.padding = "15px";
profile.style.textAlign = "center"

const highlight = document.getElementsByClassName("important");
console.log(highlight.length)
for(let i = 0; i<highlight.length;i++){
highlight[i].style.color="red";
highlight[i].style.fontSize="22px";
}


