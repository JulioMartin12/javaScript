/* 
1.	Realizar un programa que dado 2 números imprima por consola si el primer numero es mayor que el segundo.

let numero1 = Number(prompt("Ingrese un número"));
let numero2 = Number(prompt("Ingrese otro número"));
if(numero1 > numero2){
    alert("El " +numero1 + " es mayor que " +numero2);
}else if (numero1 < numero2 ){
    alert("El " +numero2 + " es mayor que " +numero1);
}else{
    alert("Los número son iguales.");
}

2.	Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros es el mas grande o si son iguales.

let numero1 = Number(prompt("Ingrese un número"));
let numero2 = Number(prompt("Ingrese otro número"));
if(numero1 > numero2){
    alert("El " +numero1 + " es mayor que " +numero2);
}else if (numero1 < numero2 ){
    alert("El " +numero2 + " es mayor que " +numero1);
}else{
    alert("Los número son iguales.");
}

3.	Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el mas chico.

let numero1 = Number(prompt("Ingrese un número"));
let numero2 = Number(prompt("Ingrese otro número"));
let numero3 = Number(prompt("Ingrese otro número"));
if( numero1 < numero2 && numero1 < numero3){
    alert("El " +numero1 + " es el más chico. ");
}else if(numero2 < numero1 && numero2 < numero3){
    alert("El " +numero2 + " es el más chico. ");
}else {
    alert("El " +numero3 + " es el más chico. ");
}

4.	Realizar un programa que dado 2 objetos representando personas con las propiedades nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual es la de mayor edad.

let persona1 ={
    nombre:'Juan',
    edad:20,
    altura: 170
}
let persona2 ={
    nombre:'Maria',
    edad:22,
    altura: 160
}


if(persona1.edad > persona2.edad)
   console.log(persona1.nombre + " es el mayor");
   else 
   console.log(persona2.nombre + " es el mayor");

   if(persona1.altura > persona2.altura)
   console.log(persona1.nombre + " es más alto");
   else 
   console.log(persona2.nombre + " es más alto");



   5.	Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión y permita determinar si estas capacitado para conducir. La persona deberá cumplir con una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como mínimo.

   let persona1 ={
       nombre:'Juan',
       edad:18,
       altura: 170,
       vision: 8
   }
   
   if(persona1.edad >= 18 && persona1.altura >= 150 && persona1.vision >=8 )
   console.log(persona1.nombre + " Esta en condiciones de conducir");
   else
   console.log(persona1.nombre + " No esta en condiciones de conducir");

6.	Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu mismo nombre tienen ingreso libre así como también los que posean un pase vip, mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en caso afirmativo mostrar mismo mensaje de bienvenida. Y por ultimo de no tener el mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible, si posee $1000 o mas, mostrar mensaje de venta de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en caso contrario a no querer comprar, mostrar mensaje de despedida.

 */


/* 


7.	Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable llamada numeroIncognita y que permita en 3 intentos adivinar el numero. El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá guardar en una variable llamada numeroIngresado, y en cada intento deberás mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar, un mensaje que diga: “Ganaste, haz adivinado el numero.” No te preocupes si usas mucho código repetido, mas adelante veraz como realizar este juego de manera mas eficiente.
8.	Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años), adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de 45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando si en realidad tiene esa edad.
9.	Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2 jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho trampa.
10.	Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de color, Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol, Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor: Excelente elección, no lo teníamos pensado.
11.	Realizar un programa que permita el ingreso de 2 valores numéricos y una operación. Según sea la operación ingresada (suma, resta, multiplicación, división) el programa deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber elegido división realizar la operación siempre que sea posible o mostrar un mensaje de ERROR si el divisor ingresado fue 0.
12.	Crear un programa que permita ingresar todos los datos de tu documento nacional de identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni con todos los datos ingresados y mostrarlos por consola con console.table() mas un mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos, mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.
 */