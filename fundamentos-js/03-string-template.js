let nome = 'Valcicleide'
let idade = 20
let cidade = 'Franca/SP'

console.log('Meu Nome é ' + nome + ', tenho ' + idade + ' anos e moro em ' + cidade +'.');

//Mesma mensagem usando string template(strings templates são strings especiais delimitadas 
//pelos caracteres ``(acentos graves,"crases"),que permitem a interpretação direta de variáveis no meio delas)
console.log(`(Usando string template) Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`);

//Drento de uma string template, não estamos limitados a colocar apenas variáveis entre ${}.
//Podemos colocar qualquer código JS válido ali.
console.log(`DAQUI A 5 ANOS, ${nome.toUpperCase()} TERÁ ${idade + 5} ANOS.`)

