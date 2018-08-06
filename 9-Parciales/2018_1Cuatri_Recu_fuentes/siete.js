/*
	Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10),la edad y el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
	a) El promedio de las notas totales. 
	b) La nota más baja y el sexo de esa persona. 
	c) La cantidad de varones mayores a 18, que su nota haya sido mayor o igual a 6. 
	d) El sexo y la nota del más joven 
	e) La edad y la nota de la primera mujer ingresada o informar si no hubo ninguna mujer.
*/

function mostrar()
{
	var nota;
	var edad;
	var sexo;

	var acumuladorPromedioNotas;

	for(contador = 0;contador < 5; contador++)
	{
		nota = prompt("Ingrese la nota del alumno Nº" + (contador+1) + "\n se valida de 0 o 10");
		nota = parseInt(nota);
		while(nota < 0 || nota > 10 || isNaN(nota))
		{
			nota = prompt("ERROR Reingrese la nota del alumno Nº" + (contador+1));
			nota = parseInt(nota);
		}
		edad = prompt("Ingrese la edad del alumno Nº" + (contador+1));
		nota = parseInt(nota);

		sexo = prompt("Ingrese el sexo del alumno Nº" + (contador+1) + "\n se valida con 'f' o 'M'");
		while(sexo != "m" && sexo != "f")
		{
			sexo = prompt("ERROR Reigrese el sexo del alumno Nº" + (contador+1) + "\n se valida con 'f' o 'M'");
		}


		acumuladorPromedioNotas += nota;



	}

	alert("El promedio de las notas es: " + (acumuladorPromedioNotas/5))
	{
		
	}
}
