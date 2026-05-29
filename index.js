/* process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', chunk => {
    input += chunk;
});

process.stdin.on('end', () => {
    const N = parseInt(input.trim());

    let contador = 1;
    let suma = 0;

    if (N <= 0) {
        console.log("Error: el número debe ser positivo");
    } else {
        while (contador <= N) {
            suma = suma + contador;
            console.log("Contador: " + contador + ", Suma parcial: " + suma);
            contador = contador + 1;
        }
    }
}); */


//for 

let num,ero  = parseInt(prompt("Ingrese el numero a multiplicar"))

for (let i=1; i<=10; i++) {
    let resultado = numero*i
    console.log(numero+"x"+i+":"+resultado)
}