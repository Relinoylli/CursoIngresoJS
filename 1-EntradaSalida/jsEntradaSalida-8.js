/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	// Declaro las variables
	var divisor;
	var dividendo;
	var resultado;
	// Asigno las variables
	divisor = document.getElementById('numeroDivisor').value;
	dividendo = document.getElementById("numeroDividendo").value;
	// convierto string en numeros
	parseInt(divisor);
	parseInt(dividendo);
	// hago la division
	resultado = dividendo % divisor;
	// informo al usuario el resultado
	alert("El resto es " + resultado);
}
