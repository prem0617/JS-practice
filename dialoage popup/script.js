let button = document.querySelector(".btn");

let popup = document.querySelector(".popup");

let close = document.querySelector(".close");

let body = document.querySelector("body");

button.addEventListener('click',()=>{
    popup.classList.add("active");
    body.style.backgroundColor="rgba(0, 0, 0, 0.1)";
    button.style.backgroundColor="rgba(0, 0, 0, 0.1)";
})

close.addEventListener('click',()=>{
    popup.classList.remove("active");
    body.style.backgroundColor="white";
    button.style.backgroundColor="white";
})