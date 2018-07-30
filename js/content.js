/*function par_impar(numero){
  if(numero%2 == 0){
    return "El número "+ numero + " es par";
  } else {
    return "El número "+ numero + " es impar";
  }
}

var n = prompt("Ingrese un número");

var result = par_impar(n);

alert(result);

function cadena(cadena){
  if (cadena.toUpperCase() == cadena){
    return "La cadena es de mayúsculas.";
  } else if (cadena.toLowerCase() == cadena){
    return "La cadena es de minúsculas.";
  } else {
    return "La cadena es de mayúsculas y minúsculas.";
  }
}

var c = prompt("Ingrese texto:");
var cd = cadena(c);
alert(cd);*/

function palindromo(cadena){
  var cad = cadena.toLowerCase().split(" ");
  cad= cad.join("");
  console.log(cad);
  var j = cad.length - 1
  for(i in cad){
    if (j >= i){
      if (cad[i] != cad[j]){
        return "No es palindromo";
      }
    } else {
      return "Es palindromo"
    }
    j--
  }
}
var a = prompt("Ingrese texto:");
var b = palindromo(a);
alert(b);
