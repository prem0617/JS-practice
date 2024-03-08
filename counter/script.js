let count=0;
let answer = document.querySelector(".answer");

let increment = document.querySelector(".plus");

let decrement = document.querySelector(".minus");

let jump = document.querySelector("#number");

let reset = document.querySelector(".reset");

increment.addEventListener('click',()=>{
    let number = parseInt(jump.value);
    count = count+number;
    answer.innerText=count;
})


decrement.addEventListener('click',()=>{
    let number = parseInt(jump.value);
    count = count-number;   
    answer.innerHTML=count;
})

reset.addEventListener('click',()=>
{
    answer.innerHTML=0;
    count=0;
})