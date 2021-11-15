function fraseIncluye2(){

    alert("Introduce la frase: ")

    let frase1 = prompt("");
    document.innerHTML = frase1;

    alert("Introduce la palabra a buscar")

    let palabra = prompt("");
    document.innerHTML = palabra;

    alert("la palabra " + palabra + " aparece " + (frase1.split(palabra).length -1)+ " veces.");
    }