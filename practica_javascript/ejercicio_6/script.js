function pizzaSelec(){
    var selecc_pizza = document.getElementById("pizzas");

    opcion = selecc_pizza.options[selecc_pizza.selectedIndex].text;
    if (opcion=="Jamon y Queso"){
        document.getElementById("seleccionada").value= "$8.000"
    }else if (opcion=="Muzzarella"){
        document.getElementById("seleccionada").value= "$5.000"
    }else if (opcion=="Morrones"){
        document.getElementById("seleccionada").value= "$6.000"
    }
}
window.onload = function(){pizzaSelec()} 


