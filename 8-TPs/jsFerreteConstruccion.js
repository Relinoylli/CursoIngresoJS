/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var ancho;
var largo;
function Rectangulo () 
{
	// declaro las variables locales que voy a usar.
	var resultado;
	// Establece el valor de las variables globales
	ObtenerValores();
	// saco la cantidad de alambre a comprar primero sumando el doble del ancho y largo(representando la distancia del area)
	resultado = ancho * 2 + largo * 2;
	// despues multiplico por 3 que equivale la cantidad de alambre que se va usar por metro
	resultado = resultado * 3;
	// informo al usuario del resultado
	alert("Usted tiene que comprar " + resultado + "m de alambre para cubri el terreno");

}
function Circulo () 
{
	// declaro las variables locales que voy a usar
	var circunferencia;
	var radio;
	var resultado;
	// Agarro los valor del radio que lo ofrece el usuario
	radio = document.getElementById("Radio").value;
	// y lo convierto de string a int
	parseInt(radio)
	// determino el valor de la circunferencia
	circunferencia = (radio * 2) * 3.14;
	// saco la cantidad de alambre que se va usar en base la circunferencia
	resultado = circunferencia * 3;
	// informo al usuario del resultado
	alert("Usted tiene que comprar " + resultado + "m de alambre para cubri el terreno");
}
function Materiales () 
{
	// declaro las variables locales que voy a usar
	var area;
	var cemento;
	var cal;
	// Establece el valor de las variables globales
	ObtenerValores();
	// Establecer el total del area
	area = largo * ancho;
	// En base la cantidad de elemento que se necesesita por cada metro del area saco el total a comprar
	cemento = area * 2;
	cal = area * 3;
	// Informo al usuario cual es la cantidad de cal y cemento a comprar/usar
	alert("para el terreno de " + ancho +"m X " + largo + "m tiene que comprar:\n" + cemento + " Bolsas de Cemento\n" + cal + " Bolsas de Cal" )
}

function ObtenerValores() {
	// Primer paso agarro los valores de los textbox de la
	ancho = document.getElementById('Ancho').value;
	largo = document.getElementById('Largo').value;
	// Segundo paso convertir los valores string a int
	parseInt(ancho);
	parseInt(largo);
}