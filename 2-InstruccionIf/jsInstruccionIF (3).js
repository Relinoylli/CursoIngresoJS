function mostrar()
{
    //tomo la edad  
	var edad;
	edad = document.getElementById('edad').value;
	//Convierto el Texto a Numero
	edad = parseInt(edad);
	//Verifico si el usuario es mayor de edad
	//Si es mayor de edad se lo notifico 
	if(edad >= 18){
		alert("Usted es mayor de Edad");
	}
	//Si no se notifica al usuario que es menor de edad
	else
	{
		alert("Usted es menor de Edad");
	}

}//FIN DE LA FUNCIÓN