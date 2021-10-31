
class Vuelo {

  //Constructor de Vuelo
  constructor(codigo, horaLlegada, horaSalida) {
    this.codigo = codigo;
    this.horaLlegada = horaLlegada;
    this.horaSalida = horaSalida;
    
  }
  //Funcion que cambia la hora de llegada
   cambiarHoraLlegada = () => {
    let nuevaHoraLlegada = prompt("Introduce nueva hora de llegada");
    document.innerHTML = nuevaHoraLlegada;
    this.horaLlegada = nuevaHoraLlegada;
  }
  //Funcion que cambia la hora de salida
  cambiarHoraSalida = () => {
    let nuevaHoraSalida = prompt("Introduce nueva hora de salida");
    document.innerHTML = nuevaHoraSalida;
    this.horaSalida = nuevaHoraSalida;
  }
  //Funcion que comprueba si la hora de llegada es posterior a la de salida
  compruebaHoras = () => {
    if(this.horaSalida>this.horaLlegada)
    {
      alert("Error: La hora de salida es posterior a la hora de llegada.");
    }
    else{
      alert("Hora de Salida: " + this.horaSalida + "\nHora de llegada: "+ this.horaLlegada);
    }
 }
}

class Aeropuerto {
  //Constructor de aeropuerto
    constructor(nombre, ciudad, recibeNumeroVuelosDiarios) {
      this.nombre = nombre;
      this.ciudad = ciudad;

    //Creamos el array de vuelos
		this.arrayVuelos = new Array();

		//Inizalizamos el array	
		for (let i = 0; i < recibeNumeroVuelosDiarios; i++) {
			this.arrayVuelos[i] = new Vuelo("Vuelo" + i, 20.00, 15.00);
		}
    }

    //Funcion que comprueba si la hora de llegada es posterior a la de salida de un vuelo determinado
    compruebaHorasAeropuerto = () => {
      alert("Introduce id del vuelo");
    let n = prompt(" ");
      document.innerHTML = n;
		this.arrayVuelos[n].compruebaHoras();

   }

   //Funcion que cambia la hora de llegada de un vuelo determinado
   cambiarHoraLlegadaAeropuerto = () => {
    alert("Introduce id del vuelo");
  let n = prompt(" ");
    document.innerHTML = n;
  this.arrayVuelos[n].cambiarHoraLlegada();

 }
 //Funcion que cambia la hora de salida de un vuelo determinado
 cambiarHoraSalidaAeropuerto = () => {
  alert("Introduce id del vuelo");
let n = prompt(" ");
  document.innerHTML = n;
this.arrayVuelos[n].cambiarHoraSalida();

}

  }

  
function main() {

	// Crea un aeropuerto
  let aeropuerto1 = new Aeropuerto("a", "a", 3)
  let continuar = new Boolean(true)

  //Menu de seleccion de opciones
	while(continuar == true)
  {
    alert("1. Comprobar vuelo\n2. Cambiar hora de llegada\n3. Cambiar hora de salida\n4. Salir");
    let opcion = prompt(" ");
      document.innerHTML = opcion;

      switch(opcion)
      {
        case '1':
        aeropuerto1.compruebaHorasAeropuerto();
        break;
        case '2':
        aeropuerto1.cambiarHoraLlegadaAeropuerto();
        break;
        case '3':
          aeropuerto1.cambiarHoraSalidaAeropuerto();
        break;
        case '4':
        continuar=false;
      }
  }
}

