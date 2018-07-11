function mostrar()
{
    //tomo la edad  
	var edad;
	edad = document.getElementById('edad').value;
	//Convierto el Texto a Numero
	edad = parseInt(edad);
	//Verifico si el usuario es mayor a 13 y es menor a 17 para ser considerado un adolescente
	if(edad >= 13 && edad <= 17){
		// y despues le notifico cuando se comprueba que lo es
		alert("Eres un Adolescente");
	}



}//FIN DE LA FUNCIÓN