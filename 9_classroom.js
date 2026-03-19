function handleclick(){
    const button=document.getElementById("btn");
    button.textContent="clicked";
    const head=document.getElementById("ui");
    head.style.color="red";


    const image=document.createElement("img");
    image.setAttribute("src","https://krmangalam.edu.in/_next/image?url=%2Fkrmuniversity.webp&w=1200&q=75")
    image.setAttribute("alt","K.R Mangalam");
    document.getElementById("img").append(image);

    

    const head2=document.getElementById("yt");
    head2.textContent="click toh kiya nahi"
    document.getElementById("yt").append("head2")

}