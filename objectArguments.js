//Um array com todos os parametros passados quando a função foi invocada
//O objeto arguments é uma variável local disponível dentro de todas as funções.
//Você pode referenciar os argumentos de uma função dentro da função usando o objeto arguments.

function findMax() {
  let max = Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
