function Mostrar()
{
	// declaro las variables
	var precio;
	var descuento;
	var descuentoTotal;
	var precioDescontado;
	var iva;
	var precioFinal;
	// uso prompt para asignar las variables precio y descuento
	precio = prompt("Precio del producto","0");
	descuento = prompt("Descuento a aplicar", "0");
	// conversion de texto a num(opcional)
	precio = parseInt(precio);
	descuento = parseInt(descuento);
	// calculo el descuento
	descuentoTotal = (precio * descuento)/ 100;
	// calculo el precion con el descuento
	precioDescontado = precio - descuentoTotal;
	// calculo el iva atravez del precio descontado 
	iva = (precioDescontado * 21)/ 100;
	// calculo el precio final
	precioFinal = precioDescontado + iva;
	// mando el mensaje al usuario con el descuento, precio descontado y el iva	
	alert("Descuento: " + descuentoTotal + "$ \n" + "Precio con el descuento: " + precioDescontado + "$ \n" + "El iva: " + iva + "$");
	// Escribo el resultado final en el textbox
	document.getElementById('elPrecioFinal').value = precioFinal;
}
