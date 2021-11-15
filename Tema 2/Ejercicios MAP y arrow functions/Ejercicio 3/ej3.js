const mapa1 = new Map([["Elpuerto", "80000"], 
                    ["Jerez", "200000"], 
                    ["PuertoReal", "6"], 
                    ["Cadiz", "50000"], 
                    ["Lebrija", "300"],
                    ["Andorra", "20"],
                    ["Mazagon", "10000"],
                    ["Barcelona", "3000000"]]);



function ver() {
let resultado= ""; 
for (let [key, value] of mapa1)
{
resultado += key + " = " + value + " ; "
}
alert(resultado)
}

function numeroCiudades() {
    alert(mapa1.size)
}

function borrar() {
    let ciudadBorrar = prompt("Introduce la ciudad a borrar");
    document.innerHTML = ciudadBorrar;
    if(mapa1.has(ciudadBorrar))
    {
        mapa1.delete(ciudadBorrar);
    }
}

    function añadir() {
        let anadeCiudad = prompt("Introduce la ciudad a añadir");
        let anadeHabitante = prompt("Introduce el numero de habitantes");
        document.innerHTML = anadeCiudad;
        document.innerHTML = anadeHabitante;
        mapa1.set(anadeCiudad, anadeHabitante);
    }



console.log(mapa1);