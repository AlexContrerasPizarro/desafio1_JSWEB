precio = 60000;

document.querySelector("#precio");
document.innerHTML = precio;


function calcular() {

    cantidad = document.querySelector("#cantidad");
    document.getElementById('res').innerHTML = cantidad.value * precio;
    element = document.querySelector('#select')
    document.getElementById('dot2').style.backgroundColor = element.value;


}

