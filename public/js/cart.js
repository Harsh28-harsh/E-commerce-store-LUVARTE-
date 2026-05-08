import { json } from "express"

const payBtn = document.querySelector(".checkout-btn")

payBtn.addEventListener("click" , () =>{
    fetch("/stripe-checkout" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
            items: json.parse(localStorage.getItem("cartItems"))
        }),
    })
    .then((res) => res.json())
    .then((data) => {
        if(data.url){
            window.location.href = data.url
        }else{
            console.error("Invailid url received for server" , data.url)
        }
    })
    .catch((err) => console.error(err))
    
})