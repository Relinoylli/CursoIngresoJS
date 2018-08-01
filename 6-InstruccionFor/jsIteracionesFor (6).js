function mostrar()
{

	var numero = "SinNumero";

	var pares = " Numeros pares: ";
	var cantPares = 0;
	for( ; ; )
	{
		numero = prompt("Ingrese un numero: ");
		if(isNaN(numero) || numero == "SinNumero")
		{
			break;
		}

		if(numero%2 == 0)
		{
			pares = pares + numero + " ";
			cantPares++;
		}
	}
	alert("saliste del bucle infinito");


}//FIN DE LA FUNCIÓN