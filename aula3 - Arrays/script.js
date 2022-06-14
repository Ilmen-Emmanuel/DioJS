//O que são vetores ou arrays 

//Como declarar um array

/*let array = ['string', 1, true];
console.log(array);*/

//Guardar diferentes tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array[3]);

//forEach
array.forEach(function(item,index){console.log(item, index)});