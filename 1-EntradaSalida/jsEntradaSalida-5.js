/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	// Declaro las variables
	var nombre;
	var edad;
	// Asigno las variables con su respectivos valores
	nombre = document.getElementById('elNombre').value;
	edad = document.getElementById("laEdad").value;
	// Mensaje para usuario indicando su edad y nombre
	alert("Su nombre es " + nombre + " y usted tiene " + edad + " años de edad");
}

