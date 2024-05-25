
/*
const IVA = 1.21
let nombre=""
let total=0
const carrito=[]
function preguntarnombre(){
    let=nombre=prompt("Ingrese su nombre")
        while(nombre==null || nombre=="" || nombre=="."){
            console.warn("Ingrese un nombre valido.")
            let=nombre=prompt("Ingrese su nombre:")
        }
}
    

function saludar(){
    console.log("Bienvenido", nombre.trim(), "👋👋!")
    console.log("Que desea comprar? puede consultar nuestra lista de productos.")
}

preguntarnombre()
saludar()

class Producto {
    constructor(id, nombre, importe, stock, categoria) {
        this.id = parseInt(id)
        this.nombre = nombre
        this.importe = parseInt(importe)
        this.stock = parseInt(stock)
        this.categoria = categoria
    }
    
    comprar(cantidad) {
        if (cantidad > 0 && cantidad <= this.stock) {
            this.stock = this.stock - cantidad
        } else {
            console.error("Debes informar un valor óptimo para las unidades vendidas.")
        }
        
        let subtotal = (this.importe) * cantidad*IVA;
        total= total+subtotal
        return console.log("El total a pagar con impuestos es:",total);
    }
}

const cordatum= new Producto (1, "cordatum", 4200, 1)
const tierranegra= new Producto (6, "tierra negra", 2500, 15)
const fertilizantes= new Producto(9, "fertilizante", 3500, 15)
const vermiculita= new Producto(7,"vermiculita", 2000, 10)
const perlita= new Producto(8, "perlita", 2000, 20)
const lirio=new Producto(3, "lirio de la paz", 3500, 5)
const alocasia=new Producto(1, "alocasia", 4000, 7)
const narizpayaso=new Producto(2, "nariz de payaso", 3000, 5)
const sansevieria=new Producto(4, "sansevieria", 4500, 4)

function darlistadeproductos(){
    console.log("Esta es nuestra lista de productos 🪴:")
    console.log("Hummus de lombriz, fertilizantes, tierra negra, vermiculita, perlita")
    console.log("Lirio de la paz, alocasias, nariz de payaso, sansevieria")
}
darlistadeproductos()

function financiar(nrocuotas){
    if (nrocuotas==0){
        console.warn("Ingrese un numero valido de cuotas.")
    }else{
        let financiado=total/nrocuotas
        console.log("Su pago se realizara en", nrocuotas, "cuotas. Cada cuota tendra el precio de $", financiado )
    }
}
*/

const plantasinterior=[{codigo: 1, nombre: "Philodendron imperial", precio: 4900, stock: 3},
                       {codigo: 2, nombre: "Philodendron sanguineo", precio: 6000, stock: 2},
                       {codigo: 3, nombre: "Monstera Adansonii", precio: 3000, stock: 2},
                       {codigo: 4, nombre: "Pilea", precio: 1500, stock: 4},
                       {codigo: 5, nombre: "Alocacia Amazonica", precio: 400, stock: 3},
                       {codigo: 6, nombre: "Clepia", precio: 2800, stock: 2},
                       {codigo: 7, nombre: "Syngonium chocolate", precio: 3800, stock: 2},
                       {codigo: 1, nombre: "Peperomia", precio: 2800, stock: 3}
]

const plantasexterior=