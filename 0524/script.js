// const container = document.querySelector(".container");
// console.log(container);
// const divArray = document.querySelectorAll("div");
// divArray.forEach((div)=>console.log(div));

const cardArray = document.querySelectorAll(".namecard");
cardArray.forEach((card)=>{
    card.addEventListener("click", ()=>{
        console.log(card);
    })
})
// 좋지 않은 코드
// cardArray[0].addEventListener("click",()=>{
//     console.log(cardArray[0]);
// })