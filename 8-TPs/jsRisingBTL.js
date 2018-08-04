/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	// declaro las variable que voy a utilizar
	var edad;
	var sexo;
	var estadoCivil;
	var sueldoBruto;
	var legajo;
	var nacionalidad;
	
	//Mensaje Inicial del cuestionario
	alert("Cuestionario de RISING BTL. al consumidor. Responda honestamente")
	//Aqui se usa un loop en caso de que el usuario cometa un error al poner la edad


	//la entrada de la edad
	edad = prompt("Ingrese su edad\n solo entre 18 y 90 años");
	edad = parseInt(edad);

	//si el numero esta fuera del rango o no es un numero
	while(edad < 18 || edad > 90 || isNaN(edad)){
		edad = prompt("ERROR: Reingrese su edad\n solo entre 18 y 90 años");
		edad = parseInt(edad);
	}

	sexo = prompt("Ingrese su sexo\n 'M' para masculino, 'F' para femenino");
	// si el sexo no es valido con toleracia a minusculas
	while(sexo != "F" && sexo != "M" && sexo != "f" && sexo != "m"){

		sexo = prompt("ERROR: Reingrese su sexo\n 'M' para masculino, 'F' para femenino");
	}

	estadoCivil = prompt("Ingrese Su Estado civil(ingrese el numero correspondiente)\n 1.- solteros 2.- casados 3.- divorciados 4.- viudos");
	estadoCivil = parseInt(estadoCivil);

	//si el numero esta fuera del rango o no es un numero
	while(isNaN(estadoCivil) || estadoCivil < 1 || estadoCivil > 4){

		estadoCivil = prompt("ERROR: Reingrese Su Estado civil(ingrese el numero correspondiente)\n 1.- solteros 2.- casados 3.- divorciados 4.- viudos");
		estadoCivil = parseInt(estadoCivil);

	}
	//la entrada del sueldo bruto
	sueldoBruto = prompt("Ingrese su Sueldo Bruto\n tiene que superar los 8000$");
	sueldoBruto = parseInt(sueldoBruto);

	//si el numero esta fuera del rango o no es un numero
	while(isNaN(sueldoBruto) || sueldoBruto < 8000)
	{
		sueldoBruto = prompt("ERROR: Reingrese su Sueldo Bruto\n tiene que superar los 8000$");
		sueldoBruto = parseInt(sueldoBruto);
	}

	legajo = prompt("Ingrese su Legajo numérico\n tiene que tener 4 digitos numericos y sin ceros a la izquierda");
	legajo = parseInt(legajo);
	//si el numero esta fuera del rango o no es un numero
	while(isNaN(legajo) || legajo < 1000 || legajo > 9999)
	{
		legajo = prompt("ERROR: Reingrese su Legajo numérico\n tiene que tener 4 digitos numericos y sin ceros a la izquierda");
		legajo = parseInt(legajo);
	}
	
	//la entrada del sueldo bruto
	nacionalidad = prompt("Ingrese su nacionalidad\n 'A' para argentinos, 'E' para extranjeros, 'N' nacionalizados");
			
	//si la letra ingresada es invalida con toleracia a minusculas
	while(nacionalidad != "N" && nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "e" && nacionalidad != "a" && nacionalidad != "n")
	{
		nacionalidad = prompt("ERRROR: Reingrese su nacionalidad\n 'A' para argentinos, 'E' para extranjeros, 'N' nacionalizados");

	}

	// poner los valores de sexo y nacionalidad a MAYUSCULAS
	sexo = sexo.toUpperCase();
	nacionalidad = nacionalidad.toUpperCase();
	// si el usuario es masculino
	if(sexo == "M")
	{
		// asignar el valor de estado civil correspondiente
		switch(estadoCivil)
		{
			case 1:
				estadoCivil = "Soltero";
				break;
			case 2:
				estadoCivil = "Casado";
				break;
			case 3:
				estadoCivil = "Divorciado";
				break;
			case 4:
				estadoCivil = "Viudo";
				break;
			default:
				estadoCivil = "Ivalido, esto es un bug";
				break;
		}

		// asignar el valor de nacionalidad correspondiente
		switch(nacionalidad)
		{
			case "A":
				nacionalidad = "Argentino";
				break;
			case "E":
				nacionalidad = "Extranjero";
				break;
			case "N":
				nacionalidad = "Nacionalizado";
				break;
			default:
				Nacionalidad = "Invalida, esto es un bug";
		}
		// y remplazar "M" por "Masculino"
		sexo = "Masculino"
	}
	else
	{
		// asignar el valor de estado civil correspondiente
		switch(estadoCivil)
		{
			case 1:
				estadoCivil = "Soltera";
				break;
			case 2:
				estadoCivil = "Casada";
				break;
			case 3:
				estadoCivil = "Divorciada";
				break;
			case 4:
				estadoCivil = "Viuda";
				break;
			default:
				estadoCivil = "Ivalido, esto es un bug";
				break;
		}
		// asignar el valor de nacionalidad correspondiente
		switch(nacionalidad)
		{
			case "A":
				nacionalidad = "Argentina";
				break;
			case "E":
				nacionalidad = "Extranjera";
				break;
			case "N":
				nacionalidad = "Nacionalizada";
				break;
			default:
				Nacionalidad = "Invalida, esto es un bug";
		}
		// y reemplazar "F" por "Femenino"
		sexo = "Femenino"
	}

	document.getElementById('Edad').value = edad;
	document.getElementById('Sexo').value = sexo;
	document.getElementById('EstadoCivil').value = estadoCivil;
	document.getElementById('Sueldo').value = sueldoBruto + "$";
	document.getElementById('Legajo').value = legajo;
	document.getElementById('Nacionalidad').value = nacionalidad;
	


}