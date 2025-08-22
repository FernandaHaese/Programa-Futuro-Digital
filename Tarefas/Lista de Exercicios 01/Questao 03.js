/* Q3.A) Você interceptou uma transmissão de um código secreto que precisa ser decodificado, armazenado na variável codigoSecreto.
        Antes de processá-lo, é necessário garantir que todas as letras sejam maiúsculas.
*/
let codigoSecreto = "3z4w2y1x6u8s9r7t5v??!!";
codigoSecreto = String(codigoSecreto).toUpperCase();

/*  Q3.B) O seu time descobriu como o código foi encriptado. Basta agora substitiuir os caracteres originais em codigoSecreto por suas traduções.

+-------------------+----------+
| Caracter Original | Tradução |
+-------------------+----------+
| 3Z                | a        |
| 4W                | d        |
| 2Y                | e        |
| 1X                | h        |
| 6U                | n        |
| 8S                | r        |
| 9R                | s        |
| 7T                | t        |
| 5V                | u        |
| ??                | 73       |
| !!                | 19       |
+-------------------+----------+

*/
codigoSecreto = codigoSecreto
  .replace(/3Z/g, "a")
  .replace(/4W/g, "d")
  .replace(/2Y/g, "e")
  .replace(/1X/g, "h")
  .replace(/6U/g, "n")
  .replace(/8S/g, "r")
  .replace(/9R/g, "s")
  .replace(/7T/g, "t")
  .replace(/5V/g, "u")
  .replace(/\?\?/g, "73")
  .replace(/!!/g, "19");

console.log("Código decodificado:", codigoSecreto);
