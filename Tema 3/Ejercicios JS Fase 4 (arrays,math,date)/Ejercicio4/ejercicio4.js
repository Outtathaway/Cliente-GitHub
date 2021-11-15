function diferenciaFecha(){

    let fecha1 = new Date("December 17, 1995 00:00:00");
    let fecha2 = new Date("December 20, 1995 00:00:00");

    alert("La diferencia en dias es de "+Math.abs((fecha1-fecha2)/86400000)+" días")

  
    }