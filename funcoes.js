//função declarativa
function nomeDaFuncao() {}

//função anônima onde a variavel armazena a função
var funcao2 = function funcaoParaAtribuir() {};

//função autoinvocavel
(function () {
  let d = "digitalInovation";
  return d;
})();

//função autoinvocavel com parametros
(function () {
  let d = "digitalInovation";
  return d;
})(1, 3);

//varivel que recebe uma função autoinvocavel
const test = (function () {
  let d = "digitalInovation";
  return d;
})(1, 3);

console.log();

//callback = È uma função que passa o retorno como parametro para outra função
function multiplicar(soma, numero) {
  return soma * numero;
}

function soma(a, b) {
  return a + b;
}
