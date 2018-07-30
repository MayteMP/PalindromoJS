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
