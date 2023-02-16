let media = 8.3, resultado

if(media >= 6){
    resultado = 'Aprovado';
}
else if(media < 6){
    resultado = 'Reprovado'
}

console.log({media, resultado})

//usando o operador ternário para cehgar ao mesmo resultado
resultado = media >= 6 ? 'Aprovado' : 'Reprovado'

console.log('Usando operador ternário:',{media, resultado})

let user = 'guest', msg

//quando há apenas uma linha de if, um else, um while, etc..podemos omitir as chaves

if(user === 'admin') msg = 'Bem-Vindo'
else msg = 'Sem Permissão'

console.log({user, msg})

//Usando o operador ternário
msg = user === 'admin' ? 'Bem-Vindo' : 'Sem-Permissão'
console.log('Usando operador ternário:',{ user, msg});




