const botoncarrito = document.querySelector("img#imgcarrito")
const botoncatalogo= document.querySelector("img#imgmarket")
const logoindex= document.querySelector("img#logoindex")
const numerocarrito= document.querySelector("#totalcarro")
const carrito = JSON.parse(localStorage.getItem("carritoCompras")) ?? []
const catalogo= document.querySelector("div#catalogo")

botoncarrito.addEventListener("click", ()=> {
    location.href = "./pages/checkout.html" 
})
botoncatalogo.addEventListener("click", ()=> {
    location.href = "./pages/catalogo.html" 
})
logoindex.addEventListener("click", ()=> {
    location.href = "/index.html" 
})

catalogo.addEventListener("click", ()=>{
    location.href = "./pages/catalogo.html"
})

numerocarrito.addEventListener("click", ()=> {
    location.href= "./pages/checkout.html"
})
function actualizarcarro() {
    numerocarrito.textContent = carrito.length; 
}
actualizarcarro();