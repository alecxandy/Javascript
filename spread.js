let lista = [1, 3, 4];
let listaIncluir = [2, 5]

for (i = 0; i <= listaIncluir.length; i++) {
    for (j = 0; j <= lista.length; i++) {
        if (lista[j] >= listaIncluir[i]) {
            console.log(lista[i])
            lista.splice(j, 0, listaIncluir[i]) //splice=inseri novos valores em posição estrategicas
            j++;
        }
    }
}
console.log(lista)