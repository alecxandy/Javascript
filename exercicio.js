function validacao(arr, numero) {
  try{
    if (!arr && !numero) throw new ReferenceError("Envie os parametros");
    if (typeof arr !== "object") throw new TypeError("array precisa ser objeto");
    if (typeof arr !== "number") throw new TypeError("array precisa ser numero");
    if(arr.length !==)throw new RangeError("Tamanho invalido")
  }catch(e){
if(e instanceof ReferenceError){
    console.log('este erro é um Reference Error')
}else if( e instanceof TypeError){
    console.log('este erro é um reference Error')
}
  }
}
