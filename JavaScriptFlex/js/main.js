/* let materia = "javascrip"
let comision = 92405
let flex = true

//materia = "desarrollo web"

/* console.log("Materia: " + materia)
console.log("Comision N°" + comision)

console.log("Materia: " + materia "Comision N°: " + comision) */


/* let materia = prompt ("Ingrese la amateria: ")
let comision = prompt ("Ingrese numero de comision: ")

console.log ("Se ha inscripto a la materia: " + materia + "En la comision N°: " + comision) */

//calculadora

/* let numeroA = 30
let numeroB = 15
let resultado = numeroA + numeroB
console.log("El resultado es :" + resultado)
 */

/* let numeroA = parseInt (prompt("Ingrese el numero A: "))
let numeroB = parseInt (prompt("Ingrese el numero b: "))
let resultado = numeroA + numeroB
console.log("El resultado es :" + resultado)
 */


//for 

/* let numero  = parseInt(prompt("Ingrese el numero a multiplicar"))

for (let i=1; i<=10; i++) {
    let resultado = numero*i
    console.log(numero+"x"+i+":"+resultado)
} */

//CONDICIONALES

/* /* let validar = false /* true */

/* if (validar){
    console.log("variable verdadera")
} */ 

/* let fruta = "mandarina" 
let mes = "mayo" */

/*if(fruta == "mandarina"){
    console.log("es una fruta de otoño")
    }else if (fruta == "frutilla") {
        console.log("es una fruta de la primavera")
    }
else {
    console.log("banana o manzana son frutas de todo el año")
}
 */ 

/* if (fruta == "mandarina" || mes == "pera") {
    console.log("sonfrutas de otoño")
} */

/* if (fruta == "mandarina" && mes == "pera") {
    console.log("sonfrutas de otoño")
} */


    //CICLOS
//FOR


/* for ("desde"; "hasta"; "frecuentaciaDeActualizacion") {
    bloque de codigo que se va a ejecutar
}*/

/* let numero = parseInt(prompt("Ingrese numero a multiplicar: "))
console.log("Tabl2a de multiplicar de: " + numero)
for (i=1; i<=10; i++) {
    let resultado = numero*i
    console.log(numero + " x " + i + ": " + resultado)
} */

    //WHILE
/* let continuar = true
while (continuar) {
    let numero = parseInt(prompt("Ingrese numero a multiplicar: "))
console.log("Tabl2a de multiplicar de: " + numero)
for (i=1; i<=10; i++) {
    let resultado = numero*i
    console.log(numero + " x " + i + ": " + resultado)
}
let confirmacion = prompt("Desea hacer otro calculo?: s/n")
if(confirmacion == "n") {
    continuar = false
    console.log("Gracias")
}
} */


//SWItCH
/* let continuar = true;

while (continuar) {
    let menu = parseInt(prompt("Ingrese: 1-Saldo, 2-Deposito, 3-Extraccion, 4-Salir"));

    switch (menu) {
        case 1:
            console.log("Su saldo es de $1");
            break;
        case 2:
            console.log("Cuanto desea depositar?");
            break;
        case 3:
            console.log("Ingrese cuanto retirar:");
            break;
        case 4:
            console.log("Gracias por elegirnos");
            continuar = false;
            break;
        default:
            console.log("Opcion invalida");
    }

    if (continuar) {
        let confirmacion = prompt("Desea continuar? s/n");
        if (confirmacion == "n") {
            continuar = false;
            console.log("Gracias por elegirnos");
        }
    }
} */

/* let total = 0;
let eleccion;

const mostrarTotal = (precio) => {
    total += precio;
    alert("Total hasta el momento: $" + total);
};

do {
    eleccion = prompt(
        "Bienvenido/a a mi tienda, porfavor elija una opción: \n 1) Pizza \n 2) Sushi \n 3) Milanesa con puré \n 4) Ceviche \n 5) Salir del negocio"
    );

    switch (eleccion) {
        case "1":
            mostrarTotal(28000);11
            break;
        case "2":
            mostrarTotal(70000);
            break;
        case "3":
            mostrarTotal(15000);
            break;
        case "4":
            mostrarTotal(30000);
            break;
        case "5":
            if (total > 0) {
                alert("Muchas gracias por visitarnos, su total es de: $" + total);
            } else {
                alert("No pasa nada crack");
            }
            break;
        default:
            alert("Opción inválida, intentá de nuevo");
    }
} while (eleccion !== "5"); */