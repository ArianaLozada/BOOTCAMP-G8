//APRENDIENDO STRING: CADENAS, TEXTOS, MENSAJES, PALABRAS

var mensaje= "hola mundo";
console.log(mensaje);
console.log(typeof(mensaje));

//OPERACIÓN: CONCATENAR STRING
console.log("hola" + "mundo");

//OPERACIÓN: REPETICIÓN STRING
console.log("Hola" + "Hola" + "Hola");

//METODO RÁPIDO PARA REPETIR STRING
var texto= "Como estas";
console.log(texto.repeat(5))

//HALLANDO EL TAMAÑO DE UN STRING
var tamaño=" hola como estas";
console.log(tamaño.length);

//PASANDO STRING A MINUSCULAS
var saludo="FELIZ CUMPLEAÑOS";
console.log(saludo.toLowerCase());

//PASANDO STRING A MAYUSCULAS
var saludo1= "feliz dia";
console.log(saludo1.toUpperCase());

//POSICIONES DE UN STRING (e.....)
var ayuda="HOLA";
console.log(ayuda.length); //LENGTH¬> nos ayuda a saber el tema de algo
console.log(ayuda.indexOf("A")); //INDEXOF¬> nos ayuda a saber la posición de algo

//PROBANDO CONSOLE.ASSERT

console.assert("hola" === "Hola"); //con assert vemos error ¬> false
console.log("hola" === "hola") //con log vemos el true, false

//INSERTANDO SALTOS DE LINEA EN STRING ¬> \n
console.log("HOLA \nMUNDO \nESTOY \nPROGRAMANDO");
