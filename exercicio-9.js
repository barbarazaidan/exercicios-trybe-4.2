// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let conjunto = [1,  2,  3,  4,  5,  6,  7,  8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

let divisaoPor2;

for (let index = 0; index < conjunto.length; index += 1) {
    divisaoPor2 = (conjunto [index] / 2).toFixed (1)
    console.log (divisaoPor2)
}