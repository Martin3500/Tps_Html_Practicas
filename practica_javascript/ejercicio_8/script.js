function verificacionRespuestas(){
    var contador_aciertos = 0;
    var contador_equivocadas= 0;
    var pregun1 = document.getElementById("pregunta1");
    var pregun2 = document.getElementById("pregunta2");
    var pregun3 = document.getElementById("pregunta3");
    var pregun4 = document.getElementById("pregunta4");
    opcion_pregun1 = ( pregun1.options[pregun1.selectedIndex].value);
    opcion_pregun2 = ( pregun2.options[pregun2.selectedIndex].value);
    opcion_pregun3 = (pregun3.options[pregun3.selectedIndex].value);
    opcion_pregun4 = (pregun4.options[pregun4.selectedIndex].value);
    //pregunta 1
    if (opcion_pregun1=="3"){
        contador_aciertos+=1
    }else {
        contador_equivocadas+=1
    }
    //pregunta 2
    if (opcion_pregun2=="0"){    
        contador_aciertos+=1
    }else {
        contador_equivocadas+=1
    }
    //pregunta 3
    if (opcion_pregun3=="0"){
        contador_aciertos+=1
    }else {
        contador_equivocadas+=1
    }
    //pregunta 4
    if (opcion_pregun4=="0"){    
        contador_aciertos+=1
    }else {
        contador_equivocadas+=1
    }
    alert("acertaste en: "+String(contador_aciertos)+" Y te equivocaste en: "+ String(contador_equivocadas));
}




