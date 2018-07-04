/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	// Declaro las variables
	var primerNumero;
	var segundoNumero;
	var total;
	// Asigno el valor
	primerNumero = document.getElementById('numeroUno').value;
	segundoNumero = document.getElementById("numeroDos").value;
	// Conversion de string a numero
	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);
	// Hago la suma
	total = primerNumero + segundoNumero;
	// Notifico al usuario que su cuenta esta lista
	alert("La suma es " + total);
}

