// Encontramos o menor eo maior número em uma série
let minimo = Math.min(2, -7, 8, 4, 0);
let maximo = Math.max(2, -7, 8, 4, 0);

//E se os numeros estivessem dentro de um vetor?
let nums = [2, -7, 8, 4, 0]

//Passando o vetor para Math.min() e Math.max()
//minimo = Math.min(nums)  //NÃO FUNCIONA
//maximo = Math.max(nums)  //NÃO FUNCIONA

//A sintaxe de espalhamento ou spreading (representa por (...) antes da variável) é capaz de "desempacotar"
//um vetor em uma série de valores avulsos
minimo = Math.min(...nums)
maximo = Math.max(...nums)

console.log({minimo, maximo});
console.log('Vetor "empacotado":', nums);
console.log('Vetor "desempacotado":', ...nums);

/*******************************************************/

let carro1 = {
    modelo: 'Fiorino',
    marca: 'Fiat',
    ano: 1984,
    cor: 'bege'
}

//Copiando carro1 para carro2
//let carro2 = carro1 //NÃO FUNCIONA

//Usando espalhamento para duplicar corretamente um objeto
let carro2 = {...carro1}

//Mudando o valor das propriedades de carro2
carro2.amrca = 'Chevrolet'
carro2.modelo = 'Opala'
carro2.cor = 'preto'
carro2.ano = 1979

console.log({carro1, carro2})

/****************************************************************************/

//Problemas: JUntar dois vetores ou mais em um ´so

let frutas =['maça', 'banana', 'laranja']
let verduras = ['alface', 'couve', 'rucula']

//produzindo um vetor que contém tanto frutas quanto verduras
// let hartifruit = frutas + verduras // NÂO FUNCIONA

//Método que funciona 1: JS Clássico
//let hartifruti = frutas.concat(verduras)

//Método que funciona 2: usando espalhamento
let hartifruit =[...frutas,...verduras]

//let hartifruti = frutas.concat(verduras)

console.log({hartifruti})

/******************************************/

//Problema: como declarar uma função capaz de receber um número arbitário de argumentos?

console.log('Soma 7 números:', soma(1, 2, 3, 4, 5, 6, 7))
console.log('Soma 12 números:', soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12))

//O espalhamento também resolve esse tipo de problema.
//Quando usado em parámetros de função, passa a ser chamado de PÁRAMETRO RESTO.

function soma(...valores){
    //Dentro da função, o parametro de resto se comporta como um vetor
    let res = 0
    for(let valor of valores) res += valor
    return res
}



