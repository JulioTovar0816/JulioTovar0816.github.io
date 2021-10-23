function potencia(){
    let numero = prompt("Ingrese un numero");
    let numero2 = prompt("Ingrese segundo numero");
    let resultado=1;
    for(let i=0;i<numero2;i++){
        resultado = resultado * numero2;
    }

    alert("El resultado es: " + resultado);
}

function sumar(){
    let numero = prompt("Ingrese un numero");
    let numero2 = prompt("Ingrese segundo numero");

    let suma = parseInt(numero) + parseInt(numero2);

    alert("El resultado es: " + suma);
}

function restar(){
    let numero = prompt("Ingrese un numero");
    let numero2 = prompt("Ingrese segundo numero");

    let resta = parseInt(numero) - parseInt(numero2);

    alert("El resultado es: " + resta);
}

function multiplicar(){
    let numero = prompt("Ingrese un numero");
    let numero2 = prompt("Ingrese segundo numero");

    let multi = parseInt(numero) * parseInt(numero2);

    alert("El resultado es: " + multi);
}

function dividir(){
    let numero = prompt("Ingrese un numero");
    let numero2 = prompt("Ingrese segundo numero");
    if(numero2 == 0){
        alert("No se puede dividir entre cero");
    }
    else{
        let dividir = parseInt(numero) / parseInt(numero2);

        alert("El resultado es: " + dividir);
    }
    
}

function promedio(){
    n = parseInt(prompt("Inserte un numero"));
    a=0;
    b=0;
    while(a<n){
        i=parseFloat(prompt("Inserte un numero"));
        b=b+i;
        a++;
    }
    promedio = b/n;

    alert("El resultado es: " + promedio);
}

function desviacion(){
    let dataset_prompt = prompt("Introduce tu grupo de datos separados por comas(,):");
let dataset = dataset_prompt.split(',').map(Number);

// Calculo de media
let n = dataset.length;
let total = 0;

dataset.forEach(function(element){
   total += element; 
});

let media = total/n;

// Calculo de varianza
let sum = 0;

dataset.forEach(function(element){
    sum += Math.pow(element-media, 2);
});

let varianza = sum/n;

// Desviacion estandar
alert(`Desviacion estandar:\n${Math.sqrt(varianza)}`);
}