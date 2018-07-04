/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var primerNumero;
var segundoNumero;
var total;

function sumar()
{	
	ObtenerValores();
	// Hago la suma
	total = primerNumero + segundoNumero;
	// Notifico al usuario que su cuenta esta lista
	alert("La suma es " + total);
}

function restar()
{
	ObtenerValores();
	// Hago la resta
	total = primerNumero - segundoNumero;
	// Notifico al usuario que su cuenta esta lista
	alert("La Resta es " + total);
}

function multiplicar()
{ 
	ObtenerValores();
	// Hago la Multiplicacion
	total = primerNumero * segundoNumero;
	// Notifico al usuario que su cuenta esta lista
	alert("La Multiplicacion es " + total);
}

function dividir()
{
	ObtenerValores();
	// hago la division
	total = primerNumero / segundoNumero;
	// Notifico al usuario que cuenta esta lista
	alert("La Division es " + total);
/* Esta funcion va ahorrar codigo para 
*/
}
function ObtenerValores()
{
	// Asigno el valor
	primerNumero = document.getElementById('numeroUno').value;
	segundoNumero = document.getElementById("numeroDos").value;
	// Conversion de string a numero
	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);
}