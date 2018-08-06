/*Se ingresa una nota. 
	Si está entre las 0 y las 3 mostrar: "la próxima se puede", 
	si es desde las 4 a las 6: "raspando", de lo contrario informar que aprobó. 
	Informar si la nota no es válida. 
	Si es aprobó y la nota es mayor a 8 se debe agregar el mensaje: "muy bien". 
	Si es nota para “raspando” y la nota es menor a 5 se debe agregar el mensaje: "debes preocuparte más". 
	Aclaración: hacer un switch y dentro toda la lógica incluyendo los if y con una sola ventana alert.
*/

function mostrar()
{
	var nota;
	var mensajeExra = " ";

	nota = document.getElementById('laNota').value;
	nota = parseInt(nota);


	switch(nota)
	{
		case 0:
		case 1:
		case 2:
		case 3:
			alert("La Proxima se puede");
			break;
		case 4:
		case 5:
			mensajeExra = " debes preocuparte más";
		case 6:
			alert("raspando" + mensajeExra);
			break;
		default:
			if(nota < 0 || nota > 10)
			{
				alert("La Nota no es valida");
			}
			else
			{
				if(nota > 8)
				{
					mensajeExra = " Muy bien"
				}
				alert("Aprobó" + mensajeExra);
			}
			break;
	}
}
