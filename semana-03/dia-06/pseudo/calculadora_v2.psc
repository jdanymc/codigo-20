	Proceso calculadora_v2
		Definir primerNumero Como Entero;
		Definir segundoNumero Como Entero;
		Definir resultado Como Real;
		Definir operacion como Caracter;
		
		Escribir 'Escriba el primer numero';
		Leer primerNumero;
		
		Escribir 'Escriba el segundo numero';
		Leer segundoNumero;
		
		Escribir 'Escriba la operaci�n( + , - , * , / )';
		Leer operacion;
		
		Si operacion = '+' Entonces
			resultado = primerNumero + segundoNumero; 
		SiNo
			Si operacion = '-' Entonces
				resultado = primerNumero - segundoNumero; 
			SiNo
				Si operacion = '*' Entonces
					resultado = primerNumero * segundoNumero; 
				SiNo
					Si operacion = '/' Entonces
						Si segundoNumero = 0 Entonces
							Escribir  'Error. no se puede divir entre cero';
							resultado = 0;
						SiNo
							resultado = primerNumero + segundoNumero; 
				
						FinSi
					SiNo
						Escribir  'Error. no existe la operaci�n';
					FinSi
				FinSi
				
			FinSi
		FinSi
		
		Escribir  'El resultado de la operaci�n (', operacion ,') es : ' , resultado;
		

FinProceso

