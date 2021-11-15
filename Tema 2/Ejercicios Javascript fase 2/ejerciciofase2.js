

function numeroAleatorio(){

let num = Math.random(1, 10) *10;
num = Math.trunc(num);

alert("Introduce un numero para ver si coincide: ")

let n = prompt("");
document.innerHTML = n;

    if(n==num)
    {
        alert("BUEN TRABAJO :-)")
    }
    else
    {
        alert("NO COINCIDE :-(") 
    }
}

function diasNavidad(){

    let d1=new Date("November 04, 2021 10:10:00");
    let d2=new Date("December 25, 2021 10:10:00");

    alert(Math.trunc(d2-d1)/1000/3600/24);
}

function multiDivide(){
    alert("Introduce dos numeros para multiplicarlos y dividirlos");
    let num1 = prompt("");
    document.innerHTML = num1;
    let num2 = prompt("");
    document.innerHTML = num2;

    alert(num1*num2);
    alert(num1/num2);
}

function convertirTemp()
{

    alert("Introduce una fecha en Cº");
    let num1 = prompt("");
    document.innerHTML = num1;
    alert(num1 * 1.8 + 32.2);

    alert("Introduce una fecha en Fº");
    let num2 = prompt("");
    document.innerHTML = num2;
    alert((num2 - 32) * 5 / 9);

}

function urlActual()
{

    let url = window.location;
    alert(url);

}


function nombreVar()
{

    let nombre1 = "variable";
    alert("Introduce un nombre para una variable");
    let nombre2 = prompt("");
    
    let x = {

        [nombre1]: nombre2,
    }
    alert((x[nombre1]));
}

function obtExt()
{

    let file1 = "PonmeUn10Gil.jpg";
    alert(file1.slice((file1.lastIndexOf(".") - 1 >>> 0) + 2));
    
}

function diff1()
{

    alert("Introduce un numero");
    let num1 = prompt("");
    document.innerHTML = num1;

    if(num1<=13)
    {
        alert(13-num1);
    }
    else{

        alert(Math.abs(13-num1));

    }

}
function sumaTriple()
{

    alert("Introduce el primer numero");
    let num1 = prompt("");
    document.innerHTML = num1;
    alert("Introduce el segundo numero");
    let num2 = prompt("");
    document.innerHTML = num2;

    if(num1==num2)
    {
        alert((parseInt(num1)+parseInt(num2))*3);
    }
    else{

        alert(parseInt(num1)+parseInt(num2));
    }

}
function diff2()
{

    alert("Introduce un numero");
    let num1 = prompt("");
    document.innerHTML = num1;

    if(num1<=19)
    {
        alert(19-num1);
    }
    else{

        alert(Math.abs(19-num1)*3);

    }

}

function igualCincuenta()
{

    alert("Introduce el primer numero");
    let num1 = prompt("");
    document.innerHTML = num1;
    alert("Introduce el segundo numero");
    let num2 = prompt("");
    document.innerHTML = num2;

    if(parseInt(num1)==50 || parseInt(num2)==50 || parseInt(num1)+parseInt(num2)==50)
    {
        alert("Verdadero");
    }
    else{

        alert("Falso");

    }

}
function rango()
{

    alert("Introduce el primer numero");
    let num1 = prompt("");
    document.innerHTML = num1;
    alert("Introduce el segundo numero");
    let num2 = prompt("");
    document.innerHTML = num2;

    if((parseInt(num1)>=50 && parseInt(num1)<=99) || (parseInt(num2)>=50 && parseInt(num2)<=99))
    {
        alert("Verdadero");
    }
    else{

        alert("Falso");

    }

}