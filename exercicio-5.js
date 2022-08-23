// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//criar um for para percorrer o array 
//criar uma variável para armazenar o maior número
// iniciar essa variável com zero
//dentro do array, fazer com que cada número seja comparado com a variável maior número e fazer mudar de valor 
//imprimir o console.log

let maiorNumero = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index]
    }
}

console.log (maiorNumero)