const buy_btn =document.getElementById("buy-btn") ;
const thanks_msg = document.getElementById("thanks-msg");

// console.log("Hello")

buy_btn.onclick=()=>{
    thanks_msg.style.display="block" ;
    buy_btn.style.display="none" ;
}
