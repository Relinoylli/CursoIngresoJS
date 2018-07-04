/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

// primero defino las variables que voy a utilizar en las 3 funciones de abajo
var PrecioUno;
var PrecioDos;
var PrecioTres;
var PrecioTotal;

function Sumar () 
{
	ObtenerPrecios();
	// Notifico al usuario el resultado de la operacion
	alert("La suma de los precios es : " + PrecioTotal);
}
function Promedio () 
{	
	ObtenerPrecios();
	// Saco el promedio de los productos ASUMIENDO que el usuario siempre va a promediar 3 productos
	PrecioTotal = PrecioTotal / 3;
	// Notifico al usuario el resultado de la operacion
	alert("El Promedio de los precios es : " + PrecioTotal);
}
function PrecioFinal () 
{
	ObtenerPrecios();
	// Le agrego el IVA
	// += suma el resultado con la variable.
	PrecioTotal += (PrecioTotal * 21) / 100;
	// Notifico al usuario el resultado de la operacion
	alert("El precio final es : " + PrecioTotal);
	
}

function ObtenerPrecios ()
{	
	// Asigno los Objetos HTML a los precios para obtener su valor actual
	PrecioUno = document.getElementById("PrecioUno");
	PrecioDos = document.getElementById("PrecioDos");
	PrecioTres = document.getElementById("PrecioTres");
	// Asigno el resultado sumando los valores de los precios convertidos a numeros
	PrecioTotal = Number(PrecioUno.value) + Number(PrecioDos.value) + Number(PrecioTres.value);
}