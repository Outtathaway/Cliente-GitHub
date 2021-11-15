function numMayor(){

    alert("Introduce el primer número: ")

    let num1 = prompt("");
    document.innerHTML = num1;

    alert("Introduce el segundo número: ")

    let num2 = prompt("");
    document.innerHTML = num2;

    alert("Introduce el tercer número: ")

    let num3 = prompt("");
    document.innerHTML = num3;

    let array = [num1, num2, num3];

    alert(Math.max(...array))

    }