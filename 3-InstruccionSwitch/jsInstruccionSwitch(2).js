function mostrar()
{
	var mesDelAño = document.getElementById('mes').value;

	
	var mesDelAño = document.getElementById('mes').value;
	// usando Multi-case para resolver el enunciado
	switch(mesDelAño){
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno.");
			break;
	    case "Julio":
	    case "Agosto":
			alert("Abrigate que hace frio.")
			break;
	    default:
			alert("Ya pasamos el frio, ahora calor!!!")
			break;
    } 
}//FIN DE LA FUNCIÓN