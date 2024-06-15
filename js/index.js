const botoncarrito = document.querySelector("img#imgcarrito")
const botoncatalogo= document.querySelector("img#imgmarket")
const logoindex= document.querySelector("img#logoindex")

botoncarrito.addEventListener("click", ()=> {
    location.href = "./pages/checkout.html" 
})
botoncatalogo.addEventListener("click", ()=> {
    location.href = "./pages/catalogo.html" 
})
logoindex.addEventListener("click", ()=> {
    location.href = "/index.html" 
})