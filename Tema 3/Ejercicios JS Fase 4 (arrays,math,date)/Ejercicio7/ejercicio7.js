function uneCadena(){


    let array = ["Hola ", "buenas ","ponme ", "un 10 "];
    let cadena = "";

    for (let i = 0; i < array.length; i++) {

        cadena = cadena + array[i];

    }

    alert("El array se compone de: "+parseInt(array.length+1)+" Elementos");

    alert("Resultado de unir todos los elementos: "+cadena)

    }