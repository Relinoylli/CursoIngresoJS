function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var resultado;
	// sacado desde w3shcools sobre js Math.floor((Math.random() * 10) + 1);
	resultado = Math.floor((Math.random() * 10) + 1);
	resultado = parseInt(resultado);

	alert("Su nota es: "  + resultado);
	if(!(resultado <= 8)){
		alert("EXCELENTE");
	}
	else if(!(resultado<4)){
		alert("APROBÓ");
	}
	else
	{
		alert("Vamos, la proxima se puede")
	}
	alert(number);

}//FIN DE LA FUNCIÓN