function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");
	numero = parseInt(numero);

	while(!(numero >= 0 && numero <= 9) || isNaN(numero))
	{
		var numero = prompt("INCORRECTO\n ingrese un número entre 0 y 9.", numero);

	}
	document.getElementById('Numero').value = numero;
}//FIN DE LA FUNCIÓN