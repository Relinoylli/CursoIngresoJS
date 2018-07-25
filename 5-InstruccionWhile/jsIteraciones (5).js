function mostrar()
{

	var sexo = prompt("ingrese f ó m .").toLowerCase();

	while(sexo != "f" && sexo != "m")
	{
		var sexo = prompt("ingrese f ó m .").toLowerCase();
	}

	if(sexo == "f")
	{
		sexo = "Mujer"
	}
	else
	{
		sexo = "Hombre"
	}

	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN