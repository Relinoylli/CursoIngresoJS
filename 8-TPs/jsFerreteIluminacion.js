/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var cantidad;
 	var precioBase;
 	var precioDescontado;
 	var descuento = 1;
 	var impuesto;
 	var precioFinal;
 	var marca;

 	marca = document.getElementById("Marca").value;
 	cantidad = document.getElementById('Cantidad').value;
 	
 	cantidad = parseInt(cantidad);

 	precioBase =  35 * cantidad;

 	switch(cantidad)
 	{
 		case 1:
 		case 2:
 			break;
 		case 3:
 			switch(marca)
 			{
 				case "ArgentinaLuz":
 					descuento -= 0.15;
 					break;
 				case "FelipeLamparas":
 					descuento -= 0.10;
 					break;
 				default:
 					descuento -= 0.05;
 					break;
 			}
 			break;
 	}

 	precioFinal = precioBase * descuento;

 	/* switch(cantidad)
 	{
 		case 5:
 			if(marca == "ArgentinaLuz")
 			{
 				descuento = precioBase * 0.4;
 			}
 			else
 			{
 				descuento = precioBase * 0.3;
 			}
 			break;
 		case 4:
 			if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
 			{
 				descuento = precioBase * 0.25;
 			}
 			else
 			{
 				descuento = precioBase * 0.2;
 			}
 			break;
 		case 3:
 			if(marca == "ArgentinaLuz")
 			{
 				descuento = precioBase * 0.15;
 			}
 			else if (marca == "FelipeLamparas")
 			{
 				descuento = precioBase * 0.1;
 			}
 			else
 			{
 				descuento = precioBase * 0.05;
 			}
 			break;
 		default:
 			if(cantidad >= 6 )
 			{
 				descuento = precioBase * 0.5;
 			}
 			else
 			{
 				precioFinal = precioBase;
 				document.getElementById("precioDescuento").value = precioFinal;
 				return;
 			}
 			break;
 	} 

 	precioDescontado = precioBase - descuento;

 	if(precioDescontado > 120)
 	{
 		impuesto = precioDescontado * 0.1;
 		alert("Usted pago " + impuesto + " de IIBB.");
 		precioFinal = precioDescontado + impuesto;
 	}
 	else
 	{
 		precioFinal = precioDescontado;
 	}*/
 	document.getElementById("precioDescuento").value = precioFinal;
}
