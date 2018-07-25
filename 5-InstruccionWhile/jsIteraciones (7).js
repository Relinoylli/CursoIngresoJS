function mostrar()
{

	var contador=0;
	var acumulador=0;
	

	var cantidad = prompt("Ingrese la cantidad de numeros\n nota: evite usar numeros grandes");
	var numero;

	if(cantidad < 1)
	{
		alert("Cantidad Invalida: \nNumeros mayores a 0!!");
		return;
	}
	while(contador != cantidad)
	{
		numero = prompt("Ingrese el numero " + (contador + 1));
		numero = parseInt(numero);
		acumulador += numero;
		contador++;
	}
	if(isNaN(acumulador)){
		alert("POR FAVOR INGRESE NUMEROS!!!")
	}
	else
	{
		document.getElementById('suma').value=acumulador;
		document.getElementById('promedio').value=acumulador/cantidad;
	}
}//FIN DE LA FUNCIÓN