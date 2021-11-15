function mayus(){

    alert("Introduce una frase: ")

    let frase = prompt("");
    document.innerHTML = frase;

    frase.split('')

    alert(frase[0].toUpperCase() + frase.substring(1));

    }