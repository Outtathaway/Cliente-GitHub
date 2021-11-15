function fraseIncluye(){

    alert("Introduce la frase: ")

    let frase1 = prompt("");
    document.innerHTML = frase1;

    alert("Introduce la palabra a buscar")

    let palabra = prompt("");
    document.innerHTML = palabra;

    alert(frase1.split(palabra).length -1);
    }