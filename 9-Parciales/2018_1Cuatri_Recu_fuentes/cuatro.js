function mostrar()
{
	// defino las variables
	var numeroUno;
	var numeroDos;
	var resultado;
	// asigno los numeros atravez de un prompt
	numeroUno = prompt("Porfavor eliga dos numeros","0");
	numeroDos = prompt("Porfavor eliga dos numeros","0");
	// y uso parseInt para convertilos a numero
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	// y preguto si son iguales
	if(numeroDos == numeroUno)
	{
		alert(numeroUno + " y " + numeroDos + " son iguales");
	}
	// sino pregunto si el primero es mayor
	else if(numeroUno > numeroDos)
	{
		resultado = numeroUno / numeroDos;
		alert(numeroUno + " divido " + numeroDos + " es igual a: " + resultado);
	}
	//sino sumo los numero
	else
	{
		resultado = numeroUno + numeroDos;
		alert(numeroUno + " mas " + numeroDos + " es igual a: " + resultado)
		// y pregunto "es menor a 50?"
		if(resultado < 50)
		{
			alert("La suma es " + resultado + " y es menor a 50");
		}
	}
}
