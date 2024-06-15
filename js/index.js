const botoncarrito = document.querySelector("img#imgcarrito")

function iracheckout(){
    location.href="./pages/checkout.html"
}
function botoncarro(){
    if (carrito.length > 0){
        botoncarrito.addEventListener("click", iracheckout())
    }
}