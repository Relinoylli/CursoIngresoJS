function mostrar()
{
	//tomo la edad  
	var edad;
	edad = document.getElementById('edad').value;
	//la convierto a Numero
	edad = parseInt(edad);
	//Verifico si es menor a 17 y mayor a 13
	if(!(edad >= 13 && edad <= 17)){
		alert("NO es un Adolescente");	
	}
}//FIN DE LA FUNCIÓN