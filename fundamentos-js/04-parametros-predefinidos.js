//Função que calcula a área de uma figura geométrica plana

// O parametro forma fica predefinido com o valor 'R'
// Se o valor desse parametro não for passado, a função
// irá assumir que se trata de um retângulo
function calcular_area(base, altura, forma){
    switch(forma){
        case 'R':   //Retângulo
            return base * altura;
        case 'T':   //Triângulo
            return base * altura / 2;
        case 'E':   //Elipse/Circulo
            return (base/2)*(altura/2)*Math.PI;
        default: //forma desconhecida
            return null;
    }
}

console.log(`Área retângulo 12x16: ${calcular_area(12, 16, 'R')}`);
console.log(`Área triângulo 15x9: ${calcular_area(15, 9, 'T')}`);
console.log(`Área elipse 10x18: ${calcular_area(10, 18, 'E')}`);
console.log(`Área desconhecida 7x13: ${calcular_area(7, 13, 'A')}`);

// Deixando de passar o parametro da forma
console.log(`Area retângulo 10x25: ${calcular_area(10, 25)}`);

/*
Regras para uso de parametros predefinidos em funções
1. O parametro predefinido deve vir sempre por último na lista de parametros
2. Pode haver mais de um parametro predefinido, mas eles devem vir sempre no final da lista de paramentros.
*/