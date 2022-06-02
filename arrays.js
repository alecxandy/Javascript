let arrai = ["a", "b", "c"];


arrai.push("novo item"); //adiciona um novo elemento no final do array
arrai.pop(); //remove um elemento no final do array
arrai.shift();//remove um elemento no inicio do array
arrai.unshift('inicio');//adiciona um elemento no incio do array
console.log(arrai.indexOf('a'))//retorna o index daquele valor do array 
arrai.splice(0,2)//remove ou substitui um item pelo o indice
arrai.slice()//retorna uma parte de um array existente

//usando forEach para percorrer um array
arrai.forEach((element) => {
  console.log(element);
});

//outras formas de usar forEach mostrando o indice e o item
arrai.forEach(function (item, index) {
  console.log(item, index);
});
