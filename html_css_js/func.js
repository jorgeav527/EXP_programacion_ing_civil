// console.log("Hola mundo");
const pi = Math.PI;
let tabla = document.querySelector('table');

let probeta_dato = document.querySelector('#probeta');
let diametro_dato = document.querySelector('#diametro');
let fuerza_dato = document.querySelector('#fuerza');

document.querySelector('form').onsubmit = function() {
    let p = probeta_dato.value;
    let d = diametro_dato.value;
    let f = fuerza_dato.value;
    let area = pi * (d ** 2) / 4;
    let esf = f / area;
    let nueva_fila = `
        <tr>
            <td>${p}</td>
            <td>${d}</td>
            <td>${area.toFixed(3)}</td>
            <td>${f}</td>
            <td>${esf.toFixed(3)}</td>
        </tr>
        `;
    tabla.innerHTML = tabla.innerHTML + nueva_fila;
    // console.log(p, d, f, area.toFixed(2), esf.toFixed(2));
    return false;
}
