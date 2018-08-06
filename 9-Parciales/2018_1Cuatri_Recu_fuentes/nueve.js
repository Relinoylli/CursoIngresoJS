/*Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, el peso el cual debe ser entre 1 y 1000 y 
la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) El nombre y temperatura del animal más pesado 
c) La cantidad de animales que viven a menos de 0 grados. 
d) El promedio del peso de todos los animales.	
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.*/

function mostrar()
{
	var nombre;
	var continuar;
	var peso;
	var temperaturaHabitad;

	var esPrimerAnimalPesado = 1;
	var esPrimerAnimalPesadoBajoCero = 1;

	var contPeso = 0;
	var contTemperaturasPar = 0;
	var contAnimalesBajoCero = 0;

	var acumPeso = 0;
	var promedioPeso;

	var animalPesado;
	var animalPesadoTemperatura;
	var animalPesadoNombre;
	var animalPesadoBajoCero;
	var animalLigeroBajoCero;
	do
	{
		nombre = prompt("ingrese el nombre del animal: ");

		peso = prompt("ingrese el peso del animal: \n entre 1kg a 1000kg");
		peso = parseInt(peso);
		while(peso < 1 || peso > 1000 || isNaN(peso))
		{
			peso = prompt("ERROR: reingrese el peso del animal: \n entre 1kg a 1000kg");
			peso = parseInt(peso);
		}
		temperaturaHabitad = prompt("ingrese la temperatura del habitado\nde -30c a 30c");
		temperaturaHabitad = parseInt(temperaturaHabitad);
		while(temperaturaHabitad < (-30) || temperaturaHabitad > 30 || isNaN(temperaturaHabitad))
		{
			temperaturaHabitad = prompt("ERROR: reingrese la temperatura del habitado\nde -30c a 30c");
			temperaturaHabitad = parseInt(temperaturaHabitad);
		}

		acumPeso += peso;
		contPeso++;

		if(esPrimerAnimalPesado == 1 ||peso > animalPesado)
		{
			esPrimerAnimalPesado = 0;
			animalPesado = peso;
			animalPesadoTemperatura = temperaturaHabitad;
			animalPesadoNombre = nombre;
		}

		if(temperaturaHabitad%2==0)
		{
			contTemperaturasPar++;
		}

		if(temperaturaHabitad < 0)
		{
			contAnimalesBajoCero++;

			if(esPrimerAnimalPesadoBajoCero == 1 ||peso > animalPesadoBajoCero)
			{
				animalPesadoBajoCero = peso;
			}
			if(esPrimerAnimalPesadoBajoCero == 1 ||peso < animalLigeroBajoCero)
			{
				animalLigeroBajoCero = peso;
				esPrimerAnimalPesadoBajoCero = 0;
			}
		}

		continuar = confirm("Desea Ingresar Otro Animal?");
	}while(continuar);

	promedioPeso = acumPeso / contPeso;

	document.open();

	document.write("A) La cantidad de temperaturas pares son: " + contTemperaturasPar+"<br>");
	document.write("B)<br>1) El nombre del animal mas pesado: " + animalPesadoNombre+"<br>2) La temperatura de su habitad: " + animalPesadoTemperatura+"<br>");
	document.write("C) La cantidad de animales que viven en bajas temperaturas: " + contAnimalesBajoCero + "<br>");
	document.write("D) El promedio de pesos de los animales es: " + promedioPeso+"<br>");
	document.write("F)<br>1) El peso maximo entre los animales que viven bajo cero es: " + animalPesadoBajoCero+"<br>2)El peso minimo entre los animales que viven bajo cero es: " + animalLigeroBajoCero+"<br>");

	document.write('<button  class="MiBotonUTN" onclick="mostrar()" >mostrar</button>')

	document.close();
}