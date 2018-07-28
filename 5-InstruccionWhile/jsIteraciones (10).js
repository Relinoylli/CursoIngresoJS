function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var numero;
	var respuesta= true;

	var acumNegativos = 0;
	var acumPositivos = 0;
	var contNegativos = 0;
	var contPositivos = 0;
	var contCeros = 0;
	var contPares = 0;

	var promedioPostivo;
	var promedioNegativos;
	var diferencia;
 
	while(respuesta == true)
	{
		
		numero = prompt("ingrese un numero")
		numero = parseInt(numero);

		if(numero < 0)
		{
			acumNegativos = acumNegativos + numero;
			contNegativos++
		}
		else
		{
			if(numero > 0)
			{
				acumPositivos = acumPositivos + numero;
				contPositivos++
			}
			else
			{
				contCeros++
			}
		}

		if((numero%2)==0 && numero!=0)
		{
			contPares++
		}
		respuesta = confirm("Desea continuar?");
	}

	diferencia = acumNegativos + acumPositivos;

	document.write("<h2>1.- Suma de los negativos: " + acumNegativos + "</h2>");

	document.write("<h2>2.- Suma de los positivos: " + acumPositivos + "</h2>");

	document.write("<h2>3.- Cantidad de negativos: " + contNegativos + "</h2>");

	document.write("<h2>4.- Cantidad de positivos: " + contPositivos + "</h2>");

	document.write("<h2>5.- Cantidad de ceros: " + contCeros + "</h2>");

	document.write("<h2>6.- Cantidad de pares: " + contPares + "</h2>");
	if(contPositivos != 0)
	{
		promedioPostivo = acumPositivos / contPositivos;
		document.write("<h2>7.- Promedio de los positivos: " + promedioPostivo + "</h2>");		
	}
	else
	{
		document.write("<h2>7.- Promedio de los negativos: No hay numeros positivos </h2>");
	}
	if(contNegativos != 0)
	{
		promedioNegativos = acumNegativos / contNegativos;
		document.write("<h2>8.- Promedio de los negativos: " + promedioNegativos + "</h2>");
	}
	else
	{
		document.write("<h2>8.- Promedio de los negativos: No hay numeros Negativos </h2>");
	}

		document.write("<h2>9.- diferencia de los numeros " + diferencia + "</h2>");




}//FIN DE LA FUNCIÓN