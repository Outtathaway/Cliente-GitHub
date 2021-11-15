function elimina(){

    let array=["repetido", 3, 2, "palabro",1 ,1 ,"repetido", "a", "repetido", "b", "b"];
    
    alert("El array contiene: "+array);

    alert("introduce la posicion sobre la que quieres eliminar un elemento: ");

    let pos = prompt("");
    document.innerHTML = pos;

    alert("introduce el número de elementos a eliminar desde esa posición: ");

    let elementos = prompt("");
    document.innerHTML = elementos;

    array.splice(pos, elementos)
    

    alert("El array ahora contiene: "+array);

    }