const carrito = JSON.parse(localStorage.getItem("carritoCompras")) ?? []
const divContenedor = document.getElementById("divContenedor")
const btncompra= document.querySelectorAll(".btn-comprar")
const btncarrito= document.querySelector("#imgcarrito")
const botonesAgregar = document.querySelectorAll("button.add-to-cart")

function iracheckout(){
    location.href="../pages/checkout.html"
}
function botoncarro(){
    if (carrito.length > 0){
        btncarrito.addEventListener("click", iracheckout())
    }
}


function retornarCardHTML(producto){
    return `
                <div class="col-3 pt-4">
                    <div class="col-12 img-car imagen imagencard"> 
                        <img src="${producto.imagen}" alt="">
                    </div>
                    <div class="col-12 fondoverde green bordercard p-2">
                        <div class="col-12 text-white ps-3">
                            <h2 class="fs-1 nombre">${producto.nombre}</h2>
                        </div>
                        <div class="col-12 text-white ps-3">
                            <p>esta es una plantita</p>
                        </div>
                        <div class="row justify-content-between">
                            <div class="col-4 d-flex align-items-center text-white ps-3 pt-1">
                                <p class="precio ps-3 align-items-center fs-3">$${producto.precio}</p>
                            </div>
                            <div class="col-6 d-flex justify-content-end pe-5">
                                <button class="btn-comprar align-self-end" id="${producto.codigo}">Agregar</button>
                            </div> 
                        </div>          
                    </div>      
                </div>
            `
}
function retornarCardError() {
    return `<div class="div-card-error">
                <h2>Se ha producido un error</h2>
                <h3>Intenta nuevamente en unos instantes...🤦🏻‍♂️</h3>
            </div>`
} 

function cargarProductos(){
    if (productos.length > 0) {
        divContenedor.innerHTML = ""
        productos.forEach((producto)=> {
            divContenedor.innerHTML += retornarCardHTML(producto)
        })
        activarEventosClick()
    } else {
        divContenedor.innerHTML = retornarCardError()
    }
}


function activarEventosClick() {
    const botonesAgregar = document.querySelectorAll("button.btn-comprar")

    if (botonesAgregar.length > 0) {
        botonesAgregar.forEach((boton)=> {
            boton.addEventListener("click", ()=> {
                const productoSeleccionado = productos.find((producto)=> producto.codigo == boton.id)
                carrito.push(productoSeleccionado)
                localStorage.setItem("carritoCompras", JSON.stringify(carrito))
            })
        })
    }
}
cargarProductos(productos)
