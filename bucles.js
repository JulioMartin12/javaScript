/*  1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de
multiplicar (Los primeros 10 multiplos).
let numero = prompt("Ingrese un numero a multiplicar")

for (let i=1; i <= 10; i++){
   console.log( i + " X " + numero + " = " + (numero*i));
} 


 2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.


let  numero = prompt( "Ingrese un valor cualquiera, termina la carga ingresando un cero");
let acumulador =0;
while(numero != 0){
acumulador += Number(numero);
numero = prompt( "Ingrese un valor cualquiera, termina la carga ingresando un cero");
}
console.log("El total acumulado es de " + acumulador);




3. Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
variable guardar un numero que este en el rango 1 - 100. La persona debera poder
ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
felicitaciones y decirle en cuantos intentos lo ha realizado.

let numeroRamdon = 50;

let numeroIngresado = prompt("Adivine el numero ingresando un valor entre el 1 al 100");
let intentos =1;
 while(numeroRamdon != numeroIngresado){
   if(numeroIngresado< numeroRamdon){
      console.log("El número a adivinar es menor al número ingresado")
     
   }else{
      console.log("El número a adivinar es mayor al número ingresado")
   }
   numeroIngresado = prompt("ingrese otro valor");
   intentos ++;

 }

 console.log("Felicitaciones a adivinado el número en " + intentos + " intentos.");


4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
numero ya no es primo.

let esPrimo =Number( prompt("Ingrese un numero para saber si es primo o no"));
let contador = 0;

for(let i=1; i <=esPrimo; i++){
   if( (esPrimo % i) ==0 ){
       contador++;
   }

 }

if(contador>2){
   console.log("El numero " + esPrimo + " No es un número primo");
}else{
   console.log("El numero " + esPrimo + " es un número primo");
}

5. Realizar un programa que permita dado un numero, mostrar todos sus divisores.

let numero= Number(prompt("Ingrese un número "));
for(let i=1; i<=Number(numero); i++){
   if(numero% i == 0){
      console.log( i + " Es divisor de " + numero );
   }

}

6. Dado un array de 10 elementos, realizar un programa que recorra ese array y
muestre un mensaje por consola con cada uno de los elementos del array.
let array = [ "pan","fideo", "leche","carne","arroz","jugo","tomate","lechuga","naranja", "anana" ];
for (item of array){
   console.log(item);
}


7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
doble de cada uno de los elementos.

let arrayNumbers =[ 2,6,10,15,45,35,41,22,44,100];
for(numero of arrayNumbers){
   console.log("El doble de " + numero + " es:" + (numero*2));
}


8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
que muestre un mensaje de presentacion por cada elemento del array.

let grupoFamiliar =[ 
   persona={nombre:"Juan",
         sexo: "Masculino",
         ocupacion:"estudiante",
         parentesco:"Hijo"
}, 
persona={nombre:"Manuel",
   sexo: "Masculino",
   ocupacion:"Ingeniero",
   parentesco:"Padre"
}, 
persona={nombre:"Maria",
   sexo: "Femenino",
   ocupacion:"Arquitecta",
   parentesco:"madre"
},
persona={nombre:"Juana",
   sexo: "Femenino",
   ocupacion:"Ama de casa",
   parentesco:"Tía"
},
persona={nombre:"Pedro",
   sexo: "Masculino",
   ocupacion:"Desocupado",
   parentesco:"Tío"
}];
console.log( "El grupo familiar esta compuesto por")
for ( miembro of grupoFamiliar){
   console.log("Integrante")
   for(let clave in miembro ){
      console.log(clave + ":" + miembro[clave]);
   }

}


9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
muestre los numeros impares.
let arrayNumeros= [3,5,6,8,9,10,5,15,17,20];
for(numero of arrayNumeros){
   if(numero%2 != 0){
      console.log( numero + " Es un numero impar.");
   } 
}



10. Realizar un programa que permita la entrada de numeros y calcule la suma de los
numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
el usuario ingresa un 0.

let numero = Number(prompt("Ingrese un número y cero para finalizar el programa"));
let totalImpares =0;
let totalPares =0;
while(numero != 0){
  if(numero % 2 == 0)
  totalPares+=numero;
  else
  totalImpares+=numero;
  numero = Number(prompt("Ingrese otro número y cero para finalizar el programa"));
}

console.log("El total de la suma de los números pares es:" + totalPares);
console.log("El total de la suma de los números impares es:" + totalImpares);

11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
numero mas grande.

let arrayNumeros= [7,5,6,30,9,10,5,9,17,2];
let mayor=0;
for(numero of arrayNumeros){
   if(mayor < numero)
   mayor=numero;

}
console.log("El número mayor es:" + mayor);

12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
numero mas chico.

let arrayNumeros= [7,5,6,30,9,1,5,9,17,2];
let menor=arrayNumeros[0];
for(numero of arrayNumeros){
   if(menor > numero)
   menor=numero;

}
console.log("El número mayor es:" + menor);


13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
un empate. Caso contrario mostrar un mensaje con el nombre de la persona
ganadora.


let nombJugador1 = prompt("Ingrese el nombre del Jugador 1.");
let nombJugador2 = prompt("Ingrese el nombre del Jugador 2.");
let jugadaJugador1 = prompt("Ingrese la jugada de " + nombJugador1 + "  1)piedra, 2)papel , 3)tijeras");
let jugadaJugador2 = prompt("Ingrese la jugada de " + nombJugador2 + "  1)piedra, 2)papel , 3)tijeras");

while ((jugadaJugador1 == jugadaJugador2)) {
   console.log("Fue un empate, el juego continua.")
   jugadaJugador1 = prompt("Ingrese una nueva jugada para " + nombJugador1 + "  1)piedra, 2)papel , 3)tijeras");
   jugadaJugador2 = prompt("Ingrese una nueva jugada para " + nombJugador2 + "  1)piedra, 2)papel , 3)tijeras");
}

switch (jugadaJugador1) {
   case '1': {
      if (jugadaJugador2 == 3) {
         console.log("El ganador de la partida es " + nombJugador1);

      } else {
         console.log("El ganador de la partida es " + nombJugador2);
      }
      break;
   }
   case '2': {
      if (jugadaJugador2 == 1) {
         console.log("El ganador de la partida es " + nombJugador1);

      } else {
         console.log("El ganador de la partida es " + nombJugador2);
      }
      break;
   }
   case '3': {
      if (jugadaJugador2 == 2) {
         console.log("El ganador de la partida es " + nombJugador1);

      } else {
         console.log("El ganador de la partida es " + nombJugador2);
      }
      break;
   }
   default: {
      break;
   }

}

14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.
let asterisco = '*';
for (let index = 1; index < 6; index++) {
   
   console.log(asterisco.repeat(index));
   
}

15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
pero invertido.


let asterisco = '*';
for (let index = 5; index > 0; index--) {
   console.log(asterisco.repeat(index));
   
}


16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por
pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR) 
*/
/* let arrayNumeros= [7,5,6,30,9,1,5,9,17,2];

  //Ordenamiento por inserción
  console.log(arrayNumeros);
   for (let i = 1; i < arrayNumeros.length; i++) {
       let aux = arrayNumeros[i];
       let j = i - 1;
       while (j >= 0 && arrayNumeros[j] > aux) {
         arrayNumeros[j + 1] = arrayNumeros[j];
           j--;
       }
       arrayNumeros[j + 1] = aux;
   }

console.log(arrayNumeros); */
/*

*/
let numeroRamdon = 50;

let numeroIngresado = prompt("Adivine el numero ingresando un valor entre el 1 al 100");
let intentos =1;
 while(numeroRamdon != numeroIngresado){
   if(numeroIngresado< numeroRamdon){
      alert("El número a adivinar es menor al número ingresado")
     
   }else{
      alert("El número a adivinar es mayor al número ingresado")
   }
   numeroIngresado = prompt("ingrese otro valor");
   intentos ++;

 }

alert("Felicitaciones a adivinado el número en " + intentos + " intentos.");
