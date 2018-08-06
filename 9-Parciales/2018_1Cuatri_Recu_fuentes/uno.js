
function mostrar()
{
	// declaro las variables que voy a usar
	var base;
	var altura;
	var perimetro;
	var superficie;
	// pido los valores
	base = prompt("base del triangulo", "0");
	altura = prompt("altura del triangulo", "0");
	// convierto los valores a numeros
	parseInt(base);
	parseInt(altura);
	// saco el perimetro
	perimetro = base * 3;
	// saco la superficie del triangulo
	superficie = (base * altura) / 2;
	// e informo el resultado al usuario
	alert("El perimetro es " + perimetro + " y el la superficie es " + superficie);
}
