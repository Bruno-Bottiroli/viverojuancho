
const IVA = 1.21
let nombre=""
let total=0
const carrito=[]


const plantas=[{codigo: 1, nombre: "Philodendron imperial", precio: 4900, stock: 3},
                       {codigo: 2, nombre: "Philodendron sanguineo", precio: 6000, stock: 2},
                       {codigo: 3, nombre: "Monstera Adansonii", precio: 3000, stock: 2},
                       {codigo: 4, nombre: "Pilea", precio: 1500, stock: 4},
                       {codigo: 5, nombre: "Alocacia Amazonica", precio: 400, stock: 3},
                       {codigo: 6, nombre: "Clepia", precio: 2800, stock: 2},
                       {codigo: 7, nombre: "Syngonium chocolate", precio: 3800, stock: 2},
                       {codigo: 8, nombre: "Peperomia", precio: 2800, stock: 3},
]


function buscarplanta(codigo) {
    let plantaseleccionada = plantas.find((planta)=> planta.codigo === codigo )
    return plantaseleccionada
}

function comprar() {
    let codigo = prompt("Ingresa codigo de planta: ")
    let plantaelegida = buscarplanta(parseInt(codigo))

   
    if (plantaelegida === undefined) {
        alert(" se encontró la planta elegida.")
    } else {
        carrito.push(plantaelegida)
        alert(plantaelegida.nombre + " se agregó al carrito.")
        let respuesta = confirm("¿Deseas elegir otra planta?")
        if (respuesta === true) {
            comprar()
        } else {
            const shop = new Compra(carrito)
            let subtotal = shop.obtenerSubtotal()
            console.log("El costo total de la compra es de $ ", subtotal)  

        }
}
}


function financiar(nrocuotas){
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
    }
    
    console.log('El total es:', total);

    let respuestafinanciar= confirm("Quiere financiar?")
    if (respuestafinanciar== true){
        nrocuotas= prompt("Cuantas cuotas quiere hacer?")
        let financiado= total/nrocuotas
        alert("El pago se hara en " + nrocuotas + " cuotas. Cada una de $" + financiado)
    }
}
comprar()
financiar()