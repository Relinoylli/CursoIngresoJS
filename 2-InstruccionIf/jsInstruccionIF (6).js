function mostrar()
{
	//tomo la edad  
	var edad;
	edad = document.getElementById('edad').value;
	//la convierto a Numero
	edad = parseInt(edad);
	//Verfico si el usuario es un adulto
	if(edad > 17){
		//Nofico al usuario que es adulto
		alert("Usted es adulto");
	}
	//Verifico si es mayor a 12
	else if(edad > 12){
		//Notifico al usuario que es un adolescente
		alert("Usted es Adolescente");
	}
	// Sino entonses notifico al usuario que es un niño
	else
	{
		alert("Usted es Niño");
	}
}//FIN DE LA FUNCIÓN