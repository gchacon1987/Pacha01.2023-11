function ejercicio31(){
// Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.

// Definir variables
let num, sumaPares = 0, sumaImpares = 0, contadorPares = 0, contadorImpares = 0, mediaPares, mediaImpares;

// Utilizar un bucle para leer 10 números
for (let i = 1; i <= 10; i++) {
    // Solicitar al usuario ingresar el número
    num = parseInt(prompt("Ingrese el número " + i));

    // Verificar si el número es par o impar y actualizar las sumas y contadores
    if (num % 2 === 0) {
        sumaPares += num;
        contadorPares++;
    } else {
        sumaImpares += num;
        contadorImpares++;
    }
}

// Calcular y mostrar la media de los números pares, si existen
if (contadorPares > 0) {
    mediaPares = sumaPares / contadorPares;
    console.log("La media de los números pares es: " + mediaPares);
}

// Calcular y mostrar la media de los números impares, si existen
if (contadorImpares > 0) {
    mediaImpares = sumaImpares / contadorImpares;
    console.log("La media de los números impares es: " + mediaImpares);
}
}