function mostrar()
{
	var errorConfirmacion = false;
	var contador = 0;
	var nota;
	var sexo;

	var acumNotas = 0;
	var promedio;

	var notaMinima;
	var notaMinimaSexo;

	var varonesAprobados = 0;

	while(contador < 5)
	{
		nota = parseInt(prompt("Ingrese la nota del Alumno Nº" + (contador+1) + ":\n De 0 a 10"));
		// cuando el usuario ingresa un numero invalido
		if(nota < 0 || nota > 10 || isNaN(nota))
		{
			errorConfirmacion = confirm("ERROR! La nota debe entre 0 y 10\n Desea a volver a intentar?");
			if(errorConfirmacion == true){
				continue;
			}
			else
			{
				return;
			}
		}
		sexo = prompt("Ingrese El sexo del Alumno Nº" + (contador+1) + ":\n 'f' para las mujeres y 'm' para los hombres")
		// cuando el usuario ingresa un valor invalido
		if(sexo != "f" && sexo != "m" && sexo != "F" && sexo != "M")
		{
			errorConfirmacion = confirm("ERROR! Debe ingresar 'm' o 'f'\n Desea a volver a intentar?");
			if(errorConfirmacion == true){
				continue;
			}
			else
			{
				return;
			}
		}
		sexo = sexo.toLowerCase();
		// Aca guardo la nota menor con el sexo de la persona
		if(notaMinima > nota || contador == 0)
		{
			notaMinima = nota;
			notaMinimaSexo = sexo;
		}

		if(sexo == 'm' && nota >= 6)
		{
			varonesAprobados++;
		}

		acumNotas += nota;
		contador++;
	}	
	// saco el promedio de la nota;
	promedio = acumNotas / 5;
	if(notaMinimaSexo == 'm')
	{
		notaMinimaSexo = " y le pertenece a un varon\n";
	}
	else
	{
		notaMinimaSexo = " y le pertenece a una mujer\n";
	}
	alert("1. El promedio de las notas es: " + promedio + "\n" + "2. la nota mas baja y el sexo de la persona: " + notaMinima + notaMinimaSexo + "3. Cantidad de varones con nota mayor o igual a 6: " + varonesAprobados + " varones")
}
