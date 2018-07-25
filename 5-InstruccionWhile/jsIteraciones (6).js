function mostrar()
{
	var contador=0;
	var acumulador=0;
	var numero;

	while(contador != 5)
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
		document.getElementById('promedio').value=acumulador/5;
	}

}//FIN DE LA FUNCIÓN