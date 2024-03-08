let initialBalance = 1000;
let login=0;

let content = document.querySelector(".content_container");

let pin = document.querySelector("#password");

let submit =document.querySelector(".submit");

let yes = document.querySelector(".hideYes");

let no = document.querySelector(".hideNo");

let checkBalance = document.querySelector(".check"); 

let withdrad = document.querySelector(".withdraw"); 

let deposite = document.querySelector(".deposite");

let logout = document.querySelector(".logout");

let p = document.createElement("p");

submit.addEventListener('click',()=>
{
    
    let ans = parseInt(pin.value);
    
    if(ans===1234)
    {
        login=1;
        p.innerHTML=("Login successful.")
        content.appendChild(p);
    }
    else
    {
        p.innerHTML=("Invalid PIN. Please try again.");
        content.appendChild(p);
    }

})
checkBalance.addEventListener('click',()=>{
    if(login===1)
    {
        yes.classList.remove("yes");
        no.classList.remove("no");
        p.innerHTML=`Your balance is $${initialBalance}`;
        content.appendChild(p);
    }
})
let depositeValue = 0;

withdrad.addEventListener('click',()=>{
    if(login===1)
    {
        withdradValue = prompt("Enter the amount to deposit:");
        let number = parseInt(withdradValue);
        if(initialBalance-number<0)
        {
            p.innerHTML="Invalid amount or insufficient balance. Please try again."
        }
        else
        {
            initialBalance=initialBalance-number;
            p.innerHTML=`Withdrawn $${number}. Your new balance is $${initialBalance}`
        }
    }
})

deposite.addEventListener('click',()=>{
    if(login===1)
    {
        depositeValue = prompt("Enter the amount to deposit:");
        let number = parseInt(depositeValue);
        initialBalance=initialBalance+number;
        p.innerHTML=`Deposited $${number}. Your new balance is $${initialBalance }`
    }
})

logout.addEventListener('click',()=>
{
    if(login===1)
    {
        p.innerHTML="Logged out successfully.";
        initialBalance=1000;
    }
})