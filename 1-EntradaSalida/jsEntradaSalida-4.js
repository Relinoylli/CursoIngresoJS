/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function mostrar()
{
	// Declaro la variable para guardar el dato
	var Nombre;
	// Asigno a la variable el nombre atravez de un prompt que el usuario llenara
	Nombre = prompt("Ingrese Su Nombre : ", "Carlitos Carro")
	// cambio el valor de texto de la pagina
	document.getElementById("elNombre").value = Nombre
}

