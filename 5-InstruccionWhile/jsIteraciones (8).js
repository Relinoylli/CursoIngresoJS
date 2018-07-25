function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	

	var cantidad = prompt("Ingrese la cantidad de numeros\n nota: evite usar numeros grandes");
	var numero;

	if(cantidad < 1 || isNaN(cantidad))
	{
		alert("Cantidad Invalida: \nNumeros mayores a 0!!");
		return;
	}
	while(contador != cantidad)
	{
		numero = prompt("Ingrese el numero " + (contador + 1));
		numero = parseInt(numero);
		if(numero < 0)
		{
			negativo *= numero;
		}
		else
		{
			positivo += numero;
		}
		contador++;
	}
	if(isNaN(negativo) || isNaN(positivo)){
		alert("POR FAVOR INGRESE NUMEROS!!!")
	}
	else
	{
		document.getElementById('suma').value=positivo;
		document.getElementById('producto').value=negativo;
	}

}//FIN DE LA FUNCIÓN