function cadenaDentroCadena(){

    alert("Introduce la primera frase: ")

    let frase1 = prompt("");
    document.innerHTML = frase1;

    alert("Introduce la segunda frase: ")

    let frase2 = prompt("");
    document.innerHTML = frase2;
    
    alert("Introduce donde quiere que se inserte la cadena: ")

    let id = prompt("");
    document.innerHTML = id;

    frase1.split('');

    alert(frase1.substring(0,id) + frase2 + frase1.substring(id))


    }