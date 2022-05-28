const cpf = "Meu cpf é 056.085.345-01"

const regex = new RegExp('[0-9{3}]')
console.log(cpf.match(regex)) //modifica o retorno