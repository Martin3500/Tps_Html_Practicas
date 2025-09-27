function verificaContra(){
    var contra= document.getElementById("contraseña").value 
    if ((contra.length<7) || (contra.length>20)){
        alert("la contraseña es invalida")
    }
}



