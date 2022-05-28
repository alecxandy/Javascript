const pessoal = {
    nome: 'alexandre',
    sobrenome: 'gomes'
}
console.log(pessoal)

//let nome = pessoal.nome;
//let sobrenome = pessoal.sobrenome;

let { nome, sobrenome } = pessoal //passa o valor para aas variaveis sem precisa distrinchar tudo
console.log(`nome${nome} sobrenome${sobrenome}`)