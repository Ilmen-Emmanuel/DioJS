// tipos primitivos 

// boolean 
var vOuF = false;
console.log(typeof(vOuF));

//Number
var NumeroQualquer = 1;
console.log(typeof(NumeroQualquer));

//String
var nome = 'Ilmen';
console.log(typeof(nome));

//Como declarar

let variavel = 'Ilmen';
console.log(variavel);

//Não pode ser reatribuído valor

const constante = "Ilmen";
console.log(constante);

//Entendendo escopos

var EscopoGlobal = 'global';
console.log(EscopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();

//Comparação
var comparacao = '0' == 0;
console.log(comparacao);

//Comparação Identica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

