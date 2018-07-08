/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	// variables que voy a usar
	var precioBase;
	var descuento;
	var precioFinal;
	// Asigno el sueldo a aumentar
	precioBase = document.getElementById('importe').value;
	// convierto de string a int
	precioBase = parseInt(precioBase)
	// Asigno el porcentaje a la variable aumento
	descuento = (precioBase * 25)/ 100;
	// aplico el aumento al saldo
	precioFinal = precioBase - descuento; 
	// Aplico el resultado a la casilla de texto.
	document.getElementById("resultado").value = precioFinal;
}
