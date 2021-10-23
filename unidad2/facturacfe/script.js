function costo(){
    let tarifa;
    let kw=1000;
    let calculo;

    for(tarifa=1;tarifa<=3;tarifa++){
        
        let mostrar = document.getElementById("mostrar");
        let mostrar2 = document.getElementById("mostrar2");
        let mostrar3 = document.getElementById("mostrar3");
    if(tarifa==1){
        calculo=kw * 1;
        mostrar.innerText="costo de tarifa: " + calculo;
    }

    if(tarifa==2){
        calculo=kw * 3;
        mostrar2.innerText="costo de tarifa: " + calculo;
    }

    if(tarifa==3){
        calculo=kw * 5;
        mostrar3.innerText="costo de tarifa: " + calculo;
    }
    }

    





}
