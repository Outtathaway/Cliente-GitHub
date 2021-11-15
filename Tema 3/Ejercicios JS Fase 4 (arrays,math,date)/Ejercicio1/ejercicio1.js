function matriz(){

    alert("Introduce un número: ")

    let num = prompt("");
    document.innerHTML = num;
    let matriz = 0;

    while(num>0)
    {

        matriz = parseInt(matriz) + parseInt(num);

        num--

    }

    alert(matriz);

    }