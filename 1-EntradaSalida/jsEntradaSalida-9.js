/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	// variables que voy a usar
	var sueldoBase;
	var aumento;
	// Asigno el sueldo a aumentar
	sueldoBase = document.getElementById('sueldo').value;
	// convierto de string a int
	sueldoBase = parseInt(sueldoBase)
	// Asigno el porcentaje a la variable aumento
	aumento = (sueldoBase * 10)/ 100;
	// aplico el aumento al saldo
	sueldoBase = sueldoBase + aumento; 
	// Aplico el resultado a la casilla de texto.
	document.getElementById("resultado").value = sueldoBase;
}
