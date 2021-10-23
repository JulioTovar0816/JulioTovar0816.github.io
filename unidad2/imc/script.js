function calcula(){
    let valor1 = document.getElementById("peso").value;
    let valor2 = document.getElementById("estatura").value;
    let imcx = document.getElementById("mostrar");
    let categoria = document.getElementById("categoria");

    let resultado = (valor1 / (valor2 * valor2));
    imcx.value = resultado;

    
    if(imcx.value < 18.50){
        
        categoria.innerText = "Tiene bajo peso";
    }
    if(imcx.value < 24.99){
        
        categoria.innerText = "Tiene peso normal";
        
    }
    if(imcx.value > 24.99){
       
        categoria.innerText = "Tiene sobrepeso";
    }
    if(imcx.value > 30){
     
        categoria.innerText = "Usted entra en la categoria de obeso";
    }
}

function limpiar(){
    var campo1 = document.getElementById("peso").value = " ";
    var campo2 = document.getElementById("estatura").value = " ";
    var respuesta = document.getElementById("mostrar").value = " ";
    var respuesta2 = document.getElementById("categoria");

 
    mostrar.innerText=" ";
    categoria.innerHTML=" ";
}