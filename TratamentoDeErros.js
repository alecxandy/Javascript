//throw retorna um erro especifico
function verifica() {
  if (!String) throw "string valida!";
  return "ok";
}

//tratamento de erro em bloco
function trycatch() {
  try {
    //se estiver tudo certo
  } catch (e) {
    //Manipular o erro
    throw e;
  } finally {
    //finaly vai ser executado imdependente de erro
  }
}

//objeto Erro
const errro = new Error("mensagem", "filename", "lineNumber");
