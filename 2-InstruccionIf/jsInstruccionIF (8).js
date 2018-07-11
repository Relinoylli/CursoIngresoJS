function mostrar()
{
	//tomo la edad  
	var edad;
	var estadoCivil;
	edad = document.getElementById('edad').value;
	estadoCivil = document.getElementById('estadoCivil').value;
	//la convierto a Numero
	edad = parseInt(edad);
	//Verifico si el usuario es un adulto
	if(!(edad <= 17 || estadoCivil != "Soltero")){
		//noifico al usuario su estado civil como adulto soltero
		alert("Es soltero y no es menor.");
	}	
}//FIN DE LA FUNCIÓN