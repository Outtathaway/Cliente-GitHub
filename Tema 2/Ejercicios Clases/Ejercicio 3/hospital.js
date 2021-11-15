
class Paciente {

 //Constructir de paciente
  constructor(dni, nombre, enfermedad) {
    this.dni = dni;
    this.nombre = nombre;
    this.enfermedad = enfermedad;
    
  }

  //Funcion para consultar un paciente
   consultaPacientes = () => {
    alert("dni: " + this.dni + "\nNombre: " + this.nombre + "\nEnfermedad: " + this.enfermedad);
  }

}

let numPacientes2;

class Hospital {
  //Constructor de Hospital
    constructor(nombre, ciudad, numPacientes) {
      this.nombre = nombre;
      this.ciudad = ciudad;
      numPacientes2 = numPacientes;

      // Creamos un array de pacientes
		this.arrayPacientes = new Array();

		// inicalizamos el array
		for (let i = 0; i < numPacientes; i++) {
			this.arrayPacientes[i] = new Paciente("6666666" + i + "f", "Paciente " + i, "Cronismo");
		}
    }

    //Funcion que consulta los distintos pacientes del hospital
    consultaPacientesHospital = () => {

      for (let i = 0; i < numPacientes2; i++) {
      this.arrayPacientes[i].consultaPacientes();
      }
   }

   //Funcion que elimina un paciente del array de pacientes y disminuye el array
   eliminarPacienteHospital = () => {
    alert("Introduce numero del paciente: ");
  let n = prompt(" ");
    document.innerHTML = n;
  this.arrayPacientes.splice( n, 1 );
  numPacientes2 = numPacientes2-1;
 }
}  
  
function main() {

	// Crea un hospital
  let hospital1 = new Hospital("Covidlandia", "Andorra", 10)
  let continuar = new Boolean(true)

  //Menu de seleccion de opciones
	while(continuar == true)
  {
    alert("1. Consultar Pacientes\n2. Eliminar un paciente\n3. Salir");
    let opcion = prompt(" ");
      document.innerHTML = opcion;

      switch(opcion)
      {
        case '1':
        hospital1.consultaPacientesHospital();
        break;
        case '2':
        hospital1.eliminarPacienteHospital();
        break;
        case '3':
        continuar=false;
      }
  }
}

