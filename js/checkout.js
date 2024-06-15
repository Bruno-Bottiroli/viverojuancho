
const carrito = JSON.parse(localStorage.getItem("carritoCompras")) ?? []
const divContenedor = document.getElementById("divContenedor")
const comprarcarrito = document.querySelector("button#comprarcarrito")

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
                    <td class="fs-1">$ ${carrito.precio.toLocaleString("es-AR")}</td>
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
    } 
}
function activarquitarboton() {
    const botonquitar = document.querySelectorAll("button.quitarcompra")

    if (botonquitar.length > 0) {
        botonquitar.forEach((boton)=> {
            boton.addEventListener("click", ()=> {
                const productoSeleccionado = carrito.find((carrito)=> carrito.codigo == boton.id)
                carrito= carrito.filter((carrito)=>{
                    return carrito !== productoSeleccionado
                }
                )
                
                localStorage.removeItem("carritoCompras", JSON.stringify(carrito))
            })
        })
    }
}
cargartabla()
comprarcarrito.addEventListener("click", ()=> {
    divContenedor.innerHTML = ""
    localStorage.removeItem("carritoCompras")
    carrito.length = 0 // redireccionar al usuario a HOME.
})