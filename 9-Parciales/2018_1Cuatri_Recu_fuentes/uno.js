
function Mostrar()
{
	// declaro las variables que voy a usar
	var base;
	var altura;
	var perimetro;
	var superficie;

	base = prompt("base del triangulo", "0");
	altura = prompt("altura del triangulo", "0");

	parseInt(base);
	parseInt(altura);

	perimetro = base * 3;
	superficie = (base * altura) / 2;

	alert("El perimetro es " + perimetro + " y el la superficie es " + superficie);
}
