function cualMayor(){
    var num1= parseFloat(document.getElementById("numero1").value);
    var num2= parseFloat(document.getElementById("numero2").value);
    if(num1>num2){
        alert(num1 +" es mayor")
    } else if (num1<num2){
        alert(num2 + " es mayor")
    }
    
}