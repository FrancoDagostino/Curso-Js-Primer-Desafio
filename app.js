

let secuencia;

let numeros = [0,1];

if(secuencia = parseInt(prompt("Ingresa un numero para la secuencia de Fibbonacci")) ){

    
    for (let i = 2; i < secuencia; i++) {
        
        numeros[i] = numeros[i-1] + numeros[i-2]; 
        
    }
console.log(numeros)

}else{
    alert("Ingrese un numero valido");
}

