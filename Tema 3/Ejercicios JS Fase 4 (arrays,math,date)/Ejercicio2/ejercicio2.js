function fecha(){

    let arrayfecha = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

    let fecha = new Date("August 21, 2000");

    alert(arrayfecha[fecha.getMonth()]);

    }