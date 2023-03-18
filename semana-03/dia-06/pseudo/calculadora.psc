Proceso calculadora
	Definir primerNumero Como Entero;
	Definir segundoNumero Como Entero;
	Definir suma Como Entero;
	Definir resta Como Entero;
	Definir producto Como Entero;
	Definir division Como Real;
	
	Escribir 'Escriba el primer numero';
	Leer primerNumero;
	
	Escribir 'Escriba el segundo numero';
	Leer segundoNumero;
	
	suma = primerNumero + segundoNumero;
	resta = primerNumero - segundoNumero;
	producto = primerNumero * segundoNumero;
	
	Escribir  'La suma de los numeros es:' , suma;
	Escribir  'La resta de los numeros es:' , resta;
	Escribir  'El producto de los numeros es:' , producto;
	
	
	
	Si segundoNumero = 0 Entonces
		Escribir  'La division de los numeros es: indeterminado'; 
	SiNo
		division = primerNumero / segundoNumero;
		Escribir  'La division de los numeros es:' , division;
	FinSi
FinProceso
