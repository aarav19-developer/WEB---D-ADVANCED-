// DOM( Document Oject Model):-

// Concept-1:

// .getElementById:
const heading = document.getElementById("myheading");
console.log(heading);

heading.style.color ="green"
heading.style.backgroundColor="yellow"
heading.textContent="hello Dear Zindagi"

// .getElementsByClassName:
var subHeading = document.getElementsByClassName("sub-heading");
console.log(subHeading);

for(let i =0;i< subHeading.length;i++){
    subHeading[i].style.color="red";
    subHeading[i].style.backgroundColor="yellow";
}

// .querySelector:
const content = document.querySelector("#content p");
console.log(content);

content.style.fontSize = "40px"

