const numeros = [10, 19, 3, -4, 13, -11, 15, 0, -1]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracuja']

/*
 O método filter() cria um NOVO VETOR contendo apenas os elementos do vetor de origem que atendam ao critério da função passada com parâmetros
 */

 const negativos = numeros.filter(n => n < 0)
 const div5 = numeros.filter(i => i % 5 === 0)
 const comecaComM = frutas.filter(f => f.charAt(0) === 'm')
 const terminaComI = frutas.filter(x => x.slice(-1) === 'i')
 const terminaComR = frutas.filter(a => a.slice(-1) === 'r')

 console.log('Numeros negativos:', negativos)
 console.log('Numeros divisíveis por 5:', div5)
 console.log('Frutas começam com m:', comecaComM)
 console.log('Frutas terminam com i:', terminaComI)
 console.log('Frutas terminam com r:', terminaComR)