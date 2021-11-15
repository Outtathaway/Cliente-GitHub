function numeroCaracteres(){

    let cadena = "Hola Gil, ponme un 10 :-)"

    alert("Introduce el numero de caracteres a extraer: ")

    let n = prompt("");
    document.innerHTML = n;

    alert(cadena.substring(0,[n]));

    }