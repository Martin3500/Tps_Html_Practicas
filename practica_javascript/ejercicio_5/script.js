function verificaContra(){
    var contraseña1= document.getElementById("contra1").value;
    var contraseña2= document.getElementById("contra2").value;
    if (contraseña1 == contraseña2){
        document.getElementById("verificacion").value= "Son iguales";
    }else {
        document.getElementById("verificacion").value= "Son distintas";
    }

    
}