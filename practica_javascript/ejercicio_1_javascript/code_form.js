const params = new URLSearchParams(window.location.search);
const boton = params.get('boton');

if (boton) {
    alert(`Presionaste el botón: ${boton}`);
}