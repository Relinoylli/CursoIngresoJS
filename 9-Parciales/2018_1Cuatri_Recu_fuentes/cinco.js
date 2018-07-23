function mostrar()
{
	var dia;

	dia = prompt("Por favor ingrese un dia de la semana", "Lunes");

	switch(dia)
	{
		case "Domingo":
		case "Sabado":
			alert("buen finde");
			break;
		case "Lunes":
		case "Martes":
		case "Miercoles":
		case "Jueves":
		case "Viernes":
			alert("a trabajar");
			break;
		default:
			alert("Por favor ingrese un dia valido \n Nota: recuerda usar mayusculas")
	}
}
