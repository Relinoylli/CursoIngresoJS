function mostrar()
{

	var contador=0;
	var minimo;
	var maximo;

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
		if(numero < minimo || minimo == null)
		{
			minimo = numero
		}
		if(numero > maximo || maximo == null)
		{
			maximo = numero
		}
		contador++;
	}
	if(isNaN(minimo) || isNaN(maximo)){
		alert("POR FAVOR INGRESE NUMEROS!!!")
	}
	else
	{
		document.getElementById('maximo').value = "El maximo es: " + maximo;
		document.getElementById("minimo").value = "El minimo es: " + minimo;

	}
}//FIN DE LA FUNCIÓN