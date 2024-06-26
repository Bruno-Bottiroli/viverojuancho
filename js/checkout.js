
const carrito = JSON.parse(localStorage.getItem("carritoCompras")) ?? []
const divContenedor = document.getElementById("divContenedor")
const comprarcarrito = document.querySelector("button#comprarcarrito")
const importeTotalCarrito = document.querySelector("importeTotalCarrito")

const botoncarrito = document.querySelector("img#imgcarrito")
const botoncatalogo= document.querySelector("img#imgmarket")
const logoindex= document.querySelector("img#logoindex")
const botonquitar= document.querySelectorAll(".quitarcompra")

botoncarrito.addEventListener("click", ()=> {
    location.href = "../pages/checkout.html" 
})
botoncatalogo.addEventListener("click", ()=> {
    location.href = "../pages/catalogo.html" 
})
logoindex.addEventListener("click", ()=> {
    location.href = "/index.html" 
})

function calcularTotalCarrito() {
    if (carrito.length > 0) {
        let montoTotalCarrito = carrito.reduce((acc, prod)=> acc + prod.precio, 0)
        montoTotalCarrito.textContent = `$ ${montoTotalCarrito.toLocaleString("es-AR")}`
    }
}



function retornartabla(carrito){
    return `
                <tr>
                    <td class="imagen-carrito">
                    <img class="imagen-carrito" src="${carrito.imagen}" alt="">
                    </td>
                    <td class="fs-1 nombretabla">${carrito.nombre}</td>
                    <td class="fs-1">$ ${carrito.precio}</td>
                    <td class="quitar-carrito" title="Clic para quitar del carrito">
                    <button id=${carrito.codigo} class="quitarcompra">Quitar</button>
                    </td>
                </tr>`
}

function cargartabla(){
    divContenedor.innerHTML = ""
    if (carrito.length > 0) {
        carrito.forEach((carrito)=> {
            divContenedor.innerHTML += retornartabla(carrito)
        })
        retornartabla(carrito);
        activarquitarboton()
        calcularTotalCarrito()
    } 
}



comprarcarrito.addEventListener("click", ()=> {
    divContenedor.innerHTML = ""
    localStorage.removeItem("carritoCompras")
    carrito.length = 0
})

function activarquitarboton(){
    if (botonquitar.length > 0) {
        botonquitar.forEach((boton)=> {
            boton.addEventListener("click", ()=> {
                const productoparaquitar = productos.find((producto)=> producto.codigo == boton.id)
                localStorage.removeItem(productoparaquitar)
            })
        })
}
}

cargartabla()