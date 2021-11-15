
class Alumno {

	//Constructor de Alumno
	constructor(id, nombre, notaMedia) {
		// Atributos clase alumno
		this.id = id;
		this.nombre = nombre;
		this.notaMedia = notaMedia;
	}
	// Funciones clase alumno

	//Consulta la nota media del alumno
	consultarNota() {
		alert("El alumno " + this.nombre + " tiene de nota " + this.notaMedia);
	}

	// Cambia la nota media
	cambiarNotaMedia(nuevaNota) {
		this.notaMedia = nuevaNota;
	}

}

class Colegio {

	//Constructor de Colegio
	constructor(nombre, nAulas, nAlumnos) {
		// Atributos del colegio
		this.nombre = nombre;
		this.nAulas = nAulas;
		//Creamos el array de alumnos
		this.arrayAlumnos = new Array();

		//inicializamos el array	
		for (let i = 0; i < nAlumnos; i++) {
			this.arrayAlumnos[i] = new Alumno(i, "Alumno" + i, 5.0);
		}

	}

	// Funcion que consulta la nota media
	consultarNotaMedia() {
    alert("Introduce id del alumno");
    let n = prompt(" ");
      document.innerHTML = n;
		this.arrayAlumnos[n].consultarNota();
	}


	// Funcion que cambia la nota media
	cambiarNotaMedia() {
    alert("Introduce id del alumno");
    let n = prompt(" ");
    document.innerHTML = n;
    alert("Introduce nota del alumno");
    let nuevaNota = prompt(" ");
    document.innerHTML = nuevaNota;
		this.arrayAlumnos[n].cambiarNotaMedia(nuevaNota);
	}
}




function main() {

	// Crea un colegio
	let miCole = new Colegio("Ceed", 10, 10);
  let continuar = new Boolean(true)


  //Menu de seleccion de opciones
	while(continuar == true)
  {
    alert("1. consultar nota media\n2. cambiar nota media\n3.Salir");
    let opcion = prompt(" ");
      document.innerHTML = opcion;

      switch(opcion)
      {
        case '1':
        miCole.consultarNotaMedia();
        break;
        case '2':
        miCole.cambiarNotaMedia();
        break;
        case '3':
        continuar=false;
      }
  }
}
