function mostrar()
{
	//tomo la edad  
	var edad;

	edad = document.getElementById('edad').value;
    //Convierto el Texto a Numero
	edad = parseInt(edad);
	//Verifico si el usuario es mayor de edad 
	//Si lo es le notifico
	if(edad >= 18){
		alert("Usted es mayor de Edad");
	}



}//FIN DE LA FUNCIÓN