function mostrar()
{
	var mesDelAño = document.getElementById('mes').value;
	//uso un switch para verificar si es febrero aunque pienso que en este caso seria mas effectivo un if-else doble
	switch(mesDelAño){
		case "Febrero":
			alert("Este mes no tiene más de 29 días.");
			break;
		default:
			alert("Este mes tiene 30 o más días");
			break;
	}

	


}//FIN DE LA FUNCIÓN