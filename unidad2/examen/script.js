function multiplicaciones(){
    let tabla = document.getElementById("tabla").value;
    let i = document.getElementById("resultados").value;
    let mostrar = document.querySelector('.resultados');
    let alert1 = document.getElementById("error_tabla");
    let alert2 = document.getElementById("error_resultados");
    let multi;
    let a;
    let b;
    for(a=1;a<=i;a++){
        multi = tabla * a;
        mostrar.innerHTML = multi;

       
    }

    if(i > 20){
        alert2.innerText="Esta pagina solo acepta valores del 1 al 20";
        mostrar.innerText = "error"
    }

    if(i < 1){
        alert2.innerText="Esta pagina solo acepta valores del 1 al 20";
        mostrar.innerText = "error"
    }
    if(tabla > 50){
        alert1.innerText="Esta pagina solo acepta valores del 1 al 50";
        mostrar.innerText = "error"
    }

    if(tabla < 1){
        alert1.innerText="Esta pagina solo acepta valores del 1 al 50";
        mostrar.innerText = "error"
    }
}