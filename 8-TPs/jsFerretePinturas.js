/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

var temperatura;
var temperaturaConvertida;

function FahrenheitCentigrados () 
{
	//asigno la temperatura
	GetTemperatura();
	//formula de celsius a fahrenheit
	temperaturaConvertida = ( temperatura - 32 ) / 1.8;
	//informo al usuario del resultado
	alert( temperatura + " Fahrenheit son " + temperaturaConvertida + " centígrados");
}

function CentigradosFahrenheit () 
{
	//asigno la temperatura
	GetTemperatura();
	//formula de celsius a fahrenheit
	temperaturaConvertida = temperatura * 1.8  + 32;
	//informo al usuario del resultado
	alert( temperatura + " centígrados son " + temperaturaConvertida + " Fahrenheit"  );
}

function GetTemperatura ()
{
	// asigno el valor de la temperatura
	temperatura = document.getElementById('Temperatura').value;
	// lo parseo
	temperatura = parseInt(temperatura);
}