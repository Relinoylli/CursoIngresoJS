function mostrar()
{
	var claveCorrecta = "utn750";

	var clave = prompt("ingrese el número clave.");

	while(clave != claveCorrecta)
	{
		var clave = prompt("INCORRECTO\n Ingrese numero de clave");
	}
	alert("clave Valida");

}//FIN DE LA FUNCIÓN
