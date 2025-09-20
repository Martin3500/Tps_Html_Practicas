function CalcularCosto(){
    var procesadorSelec = document.getElementById("procesador");
    var monitorSelec = document.getElementById("monitor");
    var monitordiscoDuro = document.getElementById("discoDuro");
    opcion_procesador = parseInt( procesadorSelec.options[procesadorSelec.selectedIndex].value);
    opcion_monitor = parseInt( monitorSelec.options[monitorSelec.selectedIndex].value);
    opcion_discoDuro = parseInt(monitordiscoDuro.options[monitordiscoDuro.selectedIndex].value);
    document.getElementById("precioFinal").value="$"+String( opcion_procesador + opcion_monitor + opcion_discoDuro)
}
//window.onload = function(){pizzaSelec()} 


