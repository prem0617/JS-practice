let arrProduct = [
    {
        id:1,
        name:"Html",
        price:"1000",
        image:"html.png"
    },
    {
        id:2,
        name:"CSS",
        price:"1000",
        image:"css.png"
    },
    {
        id:3,
        name:"JavaScrpit",
        price:"1000",
        image:"js.png"
    },
    {
        id:4,
        name:"React",
        price:"1000",
        image:"react.png"
    },
    {
        id:5,
        name:"Angular",
        price:"1000",
        image:"angular.png"
    },
    {
        id:6,
        name:"Node JS",
        price:"1000",
        image:"nodejs.png"
    }
]

let product_container = document.querySelector(".product_container");

let body = document.querySelector("body");

let close = document.querySelector(".close");

let cart = document.querySelector(".add_to_cart");

let productList = document.querySelector(".product_list");

arrProduct.forEach((item,key)=>
{
    let div = document.createElement("div");
    div.classList.add("list");
    div.innerHTML=`
        <img src="${item.image}" class="img"/>
        <div class="name">${item.name}</div>
        <div>${item.price}</div>
        <button class="addToCart" onclick="addToCart(${key})">Add to Cart</button>
    `
    product_container.appendChild(div);
})

let contain = [];

function addToCart(id)
{
    if(contain[id]==null)
    {
        contain[id]=arrProduct[id];
    }
    productList.innerHTML="";
    contain.forEach((item,key)=>{
        let li = document.createElement("li");
        li.innerHTML = `
        <img src="${item.image}"/>
        <div>${item.name}</div>
        <div>${item.price}</div>
        <button">Remove</button>
    `;
    productList.appendChild(li);
    li.classList.add("list_style")

})
}



cart.addEventListener('click',()=>{
    body.classList.add("active");
})

close.addEventListener('click',()=>
{
    body.classList.remove("active");
})
