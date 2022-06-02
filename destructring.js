//Entre chaves {}, podemos  filtrar apenas  os dados ue nos interessam em um objeto

const pessoal = {
  nome: "alexandre",
  sobrenome: "gomes",
};

let { nome, sobrenome } = pessoal; //passa o valor para aas variaveis sem precisa distrinchar tudo
console.log(nome, sobrenome);
