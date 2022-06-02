
//spread:uma forma  de lidar separadamente  com elementos
function sum(x,y,z){
    return x+y+z;
}
const numbers = [1,2,3];
console.log(sum(...numbers));



let lista = [1, 3, 4]
let listaIncluir = [2, 5]
for (i = 0; i <= listaIncluir.length; i++) {
    for (j = 0; j <= lista.length; i++) {
        if (lista[j] >= listaIncluir[i]) {
            lista.splice(j, 0, listaIncluir[i]) //splice=inseri novos valores em posição estrategicas
            j++;
            console.log(lista[i])
        }
    }
}
const listResult = [1, 2, ...listaIncluir, 5]; //juntou e ordenou a lista atraves do spread


let arr1 = ['a', 'b', 'c']
let arr2 = [...arr1] //fez uma copia do array

arr2.push['d']

console.log(arr2)


