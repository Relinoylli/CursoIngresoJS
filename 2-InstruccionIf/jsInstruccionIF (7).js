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
	if(edad < 17 && estadoCivil != "Soltero"){
		//noifico al usuario que esta mal estar casado siendo menor edad
		alert("Es muy pequeño para NO ser soltero");
	}
}//FIN DE LA FUNCIÓN