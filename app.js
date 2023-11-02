const wrapper=document.querySelector(".sliderWrapper");
const menu=document.querySelectorAll(".menu");
const products=[
    {
        id:1,
        title:"AIR FORCE",
        price: 119,
        colors: [
            {
                code:"Black",
                img:"./img/air.png",
            },
            {
                code:"darkblue",
                img:"./img/air2.png",
            },
        ],
    },
    {
        id:2,
        title:"AIR JORDAN",
        price: 149,
        colors: [
            {
                code:"lightgray",
                img:"./img/jordan.png",
            },
            {
                code:"green",
                img:"./img/jordan2.png",
            },
        ],
    },
    {
        id:3,
        title:"BLAZER",
        price: 109,
        colors: [
            {
                code:"lightgray",
                img:"./img/blazer.png",
            },
            {
                code:"green",
                img:"./img/blazer2.png",
            },
        ],
    },
    {
        id:4,
        title:"CARTER",
        price: 129,
        colors: [
            {
                code:"black",
                img:"./img/crater.png"
            },
            {
                code:"ligtgray",
                img:"./img/crater2.png",
            },
        ],
    },
    {
        id:5,
        title:"Hippie",
        price: 99,
        colors: [
            {
                code:"gray",
                img:"./img/hippie.png",
            },
            {
                code:"black",
                img:"./img/hippie2.png",
            },
        ],
    },
]
  let choosenProduct=products[0];
  const currentProductImg= document.querySelector(".productImg");
  const currentProductTitle= document.querySelector(".productTitle");
  const currentProductPrice= document.querySelector(".productPrice");
  const currentProductColors= document.querySelectorAll(".color");
  const currentProductSizes= document.querySelectorAll(".size");

menu.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        wrapper.style.transform= `translateX(${-100*index}vw)`;

        choosenProduct=products[index];
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;
    
        //assing new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
          });
    })
});
currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
      currentProductImg.src = choosenProduct.colors[index].img;
    });
  });
  currentProductSizes.forEach((size, index)=>{
    size.addEventListener('click',()=>{
        currentProductSizes.forEach((size,index)=>{
            size.style.backgroundColor="white";
            size.style.color="black";
        });   
        size.style.backgroundColor="black";
        size.style.color="white";
    });
  });
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
productButton.addEventListener("click", () => {
    payment.style.display = 'flex';
});

close.addEventListener("click", () => {
    payment.style.display = 'none';
});


  