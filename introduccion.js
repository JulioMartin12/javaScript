/* 
1.	Crear una variable llamada miNombre y guardar en ella su primer nombre.*/
let miNombre = "Julio";
console.log(miNombre)
/*
2.	Crear una variable llamada miApellido y guardar en ella su apellido.
*/
let miApellido="Martín";
console.log(miApellido);
/* 
3.	Crear una variable llamada miEdad y guardar en ella su edad.
*/
let miEdad = 39;
console.log(miEdad);
/* 
4.	Crear una variable llamada miMascota y guardar en ella el nombre de su mascota.
*/
let miMascota = "Luffy";
console.log(miMascota);
/* 
5.	Crear una variable llamada edadMascota y guardar en ella la edad de la mascota.
*/
let edadMascota = 6;
console.log(edadMascota);

/* 
6.	Visualizar todas las variables dentro de la consola del navegador escribiendo el nombre de cada una de ellas.
*/
console.log("Soy "+miNombre + " " + miApellido + " " + miEdad + " ,Mi mascota se llama " + miMascota + "  " + edadMascota)
/* 
7.	Crear una variable llamada nombreCompleto y guardar en ella la concatenación de miNombre y miApellido.
*/
let nombreCompleto = miNombre + " " + miApellido;
/* 
8.	Crear una variable llamada textoPresentacion y guardar en ella un texto comprendido con todas las variables creadas hasta el momento.
*/
let textoPresentacion = miNombre+miApellido+miEdad+miMascota+edadMascota+nombreCompleto;
/* 
9.	Crear una variable sumaEdades, restaEdades, productoEdades, divisionEdades y calcular sus respectivas operaciones con las variables miEdad y edadMascota.
*/
let sumaEdades = miEdad + edadMascota;
let restaEdades = miEdad - edadMascota;
let productoEdades = miEdad * edadMascota;
let divisionEdades = miEdad / edadMascota;

/* 
10.	Realizar la carga de las variables del punto 1 al 5 utilizando prompt() y luego ejecutar el código correspondiente para realizar los puntos del 6 al 9 con los datos cargados.
*/
/* 
miNombre = prompt();
miApellido = prompt();
miEdad = prompt();
miMascota = prompt();
edadMascota = prompt (); */


/* 
11.	Crear un objeto llamado alumno con un mínimo de 5 propiedades, mostrar dicho objeto 
utilizando console.table() y también mostrar cada una de las propiedades del objeto por separado.
*/
let alumno = {
    nombre: "julio",
    apellido: "Martin",
    edad: "39",
    nacionalidad: "Argentino",
    genero: "Masculino"
}
console.table(alumno);
console.log(Object.keys(alumno));
/* 
12.	Crear un objeto llamado mascota con un mínimo de 5 propiedades, mostrar dicho objeto 
utilizando console.table() y también mostrar cada una de las propiedades del objeto por separado.

*/
let mascota = {
    nombre : "Luffy",
    edad : "6",
    peso : "13",
    color : "Negro",
    sexo : "Macho"
}
console.table(mascota);
console.log(Object.keys(mascota));

/* 
13.	Crear un array llamado frutas con un mínimo de 5 elementos y mostrar por consola el array completo y cada uno de los elementos por separado.

*/
let frutas = ["Naranja","Banana", "Sandia","Durazno", "Melon"];
console.log(frutas);

/* 
14.	Crear un array llamado números con un mínimo de 5 elementos y mostrar por consola el array completo y cada uno de los elementos por separado.
*/
let numeros = [5, 12, 25, 3, 16];
console.log(numeros);

/* 
15.	Crear un array llamado familia con un mínimo de 5 objetos y mostrar por consola el array completo y cada uno de los elementos por separado.
*/
let familia = ["Jonás","Claudia","Julio","Luffy","Mili"];
console.log(familia); 
/* 
16.	Crear una variable llamada textoAleatorio formando una frase con el segundo elemento del array del punto 13, el cuarto elemento del punto 14 y el quinto objeto del array del punto 15.
*/
let taxtoAleatorio = frutas[1]+numeros[3]+familia[4];
/* 
17.	Utilizar prompt() para leer por pantalla mi edad y la edad de un compañero y mostrar por consola los resultados de comparar los valores y guardarlos en variables llamadas por ejemplo: edadesIguales, soyMayor, soyMenor, etc. Y mostrar mensajes en consola como los siguientes:
a.	Mi edad es igual a la de mi compañero: false
b.	Mi edad es mayor a la de mi compañero: true
c.	Mi edad es menor a la de mi compañero: false
*/
let companiero = 24;
miEdad = prompt("Mi Edad es ")
prompt(companiero);
if(miEdad > companiero){
    let soyMayor=true;
    console.log("Mi edad es mayor a la de mi compañero: " + soyMayor)
}else if(miEdad == companiero){
    let edadesIguales = true;
    console.log("Mi edad es igual a la de mi compañero: " +edadesIguales)
}else{
    let soyMenor = true;
    console.log("Mi edad es menor a la de mi compañero: " + soyMenor)
}
/* 


18.	Compare su edad ingresada por pantalla con prompt() con el numero 18 y guardarlo en una variable llamada soyMayorDeEdad y mostrar por consola un mensaje que diga: Soy mayor de edad y el valor de la variable.
*/
let soyMayorDeEdad = prompt();
console.log("Soy mayor de edad " + soyMayorDeEdad)
/* 
19.	Introducir por pantalla la edad y la altura de una persona y guardarlas en variables separadas y en una variable llamada puedeSubir el resultado de la operación resultante de si la persona es mayor de 6 años y además tiene una altura mínima de 120cm y mostrar por consola un mensaje como el siguiente: Puede subir a la atracción y el valor de la variable resultante.
*/
let edad = prompt();
let altura = prompt();
if (edad > 6 && altura >= 120){
    let puedeSubir = true;
    console.log(" Puede subir a la atracción " + puedeSubir);
}
else{
    console.log(" No Puede subir a la atracción " );
}

/* 
20.	Introducir por pantalla el pase de una persona el cual puede ser “VIP”, “NORMAL” o “LIMITADO”, el saldo que dispone y guardarlos en variables separadas. En una variable llamada puedePasar guardar el resultado de la operación resultante de si la persona tiene pase “VIP” o si posee un saldo mayor a 1000. Mostrando un mensaje que diga: La persona puede pasar y el resultado de la variable.
 */

let pase = prompt();
let saldo = prompt();
if (pase === 'VIP' || saldo > 1000){
    let puedePasar = true;
    console.log("La persona puede pasar " + puedePasar);
}
else{
    console.log("La persona No puede pasar ");
}
