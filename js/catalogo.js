const URLproductos = "../js/productos.json";
let productos = []; 
const carrito = JSON.parse(localStorage.getItem("carritoCompras")) ?? [];
const divContenedor = document.getElementById("divContenedor");
const btncompra = document.querySelectorAll(".btn-comprar");
const btncarrito = document.querySelector("#imgcarrito");
const botonesAgregar = document.querySelectorAll("button.add-to-cart");
const numerocarrito= document.querySelector("#carrototal");
const botoncarrito = document.querySelector("img#imgcarrito");
const botoncatalogo = document.querySelector("img#imgmarket");
const logoindex = document.querySelector("img#logoindex");

botoncarrito.addEventListener("click", () => {
    location.href = "../pages/checkout.html";
});
botoncatalogo.addEventListener("click", () => {
    location.href = "../pages/catalogo.html";
});
logoindex.addEventListener("click", () => {
    location.href = "/index.html";
});

function obtenerproductos() {
    fetch(URLproductos)
        .then((response) => response.json())
        .then((datos) => {
            productos = datos; 
            cargarProductos();
        })
        .catch((error) => {
            console.error("Error al obtener productos:", error);
            divContenedor.innerHTML = retornarCardError();
        });
}

function cargarProductos() {
    if (productos.length > 0) {
        divContenedor.innerHTML = "";
        productos.forEach((producto) => {
            divContenedor.innerHTML += retornarCardHTML(producto);
        });
        activarEventosClick();
    } else {
        divContenedor.innerHTML = retornarCardError();
    }
}

function filtrarProductosPorNombre(nombre) {
    const productosFiltrados = productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
    divContenedor.innerHTML = "";
    if (productosFiltrados.length > 0) {
        productosFiltrados.forEach((producto) => {
            divContenedor.innerHTML += retornarCardHTML(producto);
        });
        activarEventosClick(); // Asegúrate de activar eventos de clic después de cargar productos filtrados
    } else {
        divContenedor.innerHTML = "<p>No se encontraron productos.</p>";
    }
}

const inputBusqueda = document.getElementById("inputBusqueda");
inputBusqueda.addEventListener("input", (event) => {
    const textoBusqueda = event.target.value.trim();
    if (textoBusqueda.length > 0) {
        filtrarProductosPorNombre(textoBusqueda);
    } else {
        cargarProductos();
    }
});

function activarEventosClick() {
    const botonesAgregar = document.querySelectorAll("button.btn-comprar");
    if (botonesAgregar.length > 0) {
        botonesAgregar.forEach((boton) => {
            boton.addEventListener("click", () => {
                const productoSeleccionado = productos.find(
                    (producto) => producto.codigo == boton.id
                );
                carrito.push(productoSeleccionado);
                localStorage.setItem("carritoCompras", JSON.stringify(carrito));
                actualizarContadorCarrito(); 
            });
        });
    }
}

function actualizarContadorCarrito() {
    numerocarrito.textContent = `Productos en el carrito: ${carrito.length}`;
}

function retornarCardHTML(producto) {
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
                        <button class="buttonbl btn-comprar align-self-end" id="${producto.codigo}">Agregar</button>
                    </div> 
                </div>          
            </div>      
        </div>
    `;
}

function retornarCardError() {
    return `<div class="div-card-error">
                <h2>Se ha producido un error</h2>
                <h3>Intenta nuevamente.</h3>
            </div>`;
}

// Inicializar contador del carrito al cargar la página
actualizarContadorCarrito();
obtenerproductos();
