function ocultarDireccion(){

    alert("Introduce un correo electronico: ")

    let correo = prompt("");
    document.innerHTML = correo;

    let arr = correo.split("@");
    arr[0] = "..."

    alert(arr[0]+"@"+arr[1]);

    }