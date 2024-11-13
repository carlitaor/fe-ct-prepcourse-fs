/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var nuevoArreglo = [];

   for (var clave in objeto) {
      if (objeto.hasOwnProperty(clave)) {
         nuevoArreglo.push([clave, objeto[clave]]);
      }
   }
   return nuevoArreglo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objetoString = {};
   for (var i = 0; i < string.length; i++) {

      var caracter = string[i];

      if (objetoString[caracter]) {
         objetoString[caracter]++;
         } else {
            objetoString[caracter] = 1;
         }

   }
   return objetoString;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var Mayusculas = [];
   var Minusculas = [];
   var arreglo = string.split("");

   for (var i = 0; i < arreglo.length; i++) {
      if (arreglo[i] === arreglo[i].toUpperCase()) {
         Mayusculas.push(arreglo[i]);
      }else{
         Minusculas.push(arreglo[i]);
      }
   }
   
   arreglo = Mayusculas.concat(Minusculas);
   return arreglo.join("");
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var arreglo = frase.split(" ");
   var arreglo2 = [];
   for (var i = 0; i < arreglo.length; i++) {
      var palabra = arreglo[i];
      var palabra2 = "";
      for (var j = palabra.length - 1; j >= 0; j--) {
         palabra2 += palabra[j];
         }
         arreglo2.push(palabra2);
         }
         return arreglo2.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var string1 = numero.toString();
   var string2 = string1.split("");
   var string3 = "";

   for (var i = string2.length - 1; i >= 0; i--){
      string3 += string2[i];
      }
      if (string1 === string3) {
         return "Es capicua";
         }else{
            return "No es capicua";
         }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var string2 = "";
   for (var i = 0; i < string.length; i++) {
      var letra = string[i];

      if (letra !== "a" && letra !== "b" && letra !== "c") {
         string2 += letra;
     }
   }
   return string2;
   
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var arreglo2 = arrayOfStrings.slice();

   arreglo2.sort(function(a, b) {
      return a.length - b.length;
      });

   return arreglo2;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var arreglo2 = [];
   for (var i = 0; i < array1.length; i++) {
      for (var j = 0; j < array2.length; j++) {

         if (array1[i] === array2[j]) {
            arreglo2.push(array1[i]);
         }
         
      }
   }
   return arreglo2; 
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
