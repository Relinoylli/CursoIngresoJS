/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function mostrar()
{
	var Nombre;

	// var person = prompt("Please enter your name", "Harry Potter"); fue sacado de w3cshool sobre alerts
	Nombre = prompt("Ingrese su nombre", "Nombre Apellido");
	
	// tomo la Variable vDato y lo llamo el alert
	// "//" es un comentario de una linea "/*" es un comentario en llave se cierra con "*/"
	alert(" Su Nombre es : " + Nombre);

	// concatenación de una texto entre comillas y la variable nombre y se lo manda atravez de un alert...
}

