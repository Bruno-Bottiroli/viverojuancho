
const carrito = JSON.parse(localStorage.getItem("carritoCompras")) ?? []
const divContenedor = document.getElementById("divContenedor")
const comprarcarrito = document.querySelector("button#comprarcarrito")
const importeTotalCarrito = document.querySelector("#importeTotalCarrito")
const URLproductos= "../js/productos.json"

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
        let montoTotalCarrito = carrito.reduce((acc, prod) => acc + prod.precio, 0);
        return montoTotalCarrito;
    } else {
        return 0;
    }
}


function actualizarImporteTotalCarrito() {
    const total = calcularTotalCarrito();
    importeTotalCarrito.textContent = `$ ${total.toLocaleString("es-AR")}`;
}

function retornartabla(carrito) {
    return `
        <tr>
            <td class="imagen-carrito">
                <img class="imagen-carrito" src="${carrito.imagen}" alt="">
            </td>
            <td class="fs-1 nombretabla">${carrito.nombre}</td>
            <td class="fs-1">$ ${carrito.precio}</td>
            <td class="quitar-carrito" title="Clic para quitar del carrito">
                <button id="${carrito.codigo}" class="quitarcompra">Quitar</button>
            </td>
        </tr>
    `;
}

function cargartabla() {
    divContenedor.innerHTML = "";
    if (carrito.length > 0) {
        carrito.forEach((producto) => {
            divContenedor.innerHTML += retornartabla(producto);
        });
        actualizarImporteTotalCarrito(); 
        activarEventosClick();
    } else {
        divContenedor.innerHTML = "<p>El carrito está vacío.</p>";
        importeTotalCarrito.textContent = "$ 0";
    }
}

comprarcarrito.addEventListener("click", () => {
    Swal.fire({
        icon: 'success',
        title: 'Compra exitosa',
        text: 'Tu compra se ha realizado con éxito',
        showConfirmButton: true
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("carritoCompras");
            carrito.length = 0;
            cargartabla();
        }
    });
});

function activarEventosClick() {
    const botonesquitar = document.querySelectorAll("button.quitarcompra");

    botonesquitar.forEach((boton) => {
        boton.addEventListener("click", () => {
            const index = carrito.findIndex((producto) => producto.codigo == boton.id);
            if (index !== -1) {
                carrito.splice(index, 1);
                localStorage.setItem("carritoCompras", JSON.stringify(carrito));
                cargartabla();
            }
        });
    });
}

cargartabla();