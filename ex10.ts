import * as readlineSync from 'readline-sync';

const numeros: number[] = [];

while (numeros.length < 10) {
    const entrada = readlineSync.question(`Digite 10 numeros inteiros (1 a 100, sem repetir): `);
    const num = parseInt(entrada);

    if (isNaN(num) || num < 1 || num > 100) {
        console.log("Número inválido. Digite um inteiro entre 1 e 100.");
    } else if (numeros.includes(num)) {
        console.log("Número já digitado. Por favor, digite um número diferente.");
    } else {
        numeros.push(num);
    }
}

const menor = Math.min(...numeros);
const maior = Math.max(...numeros);
const soma = numeros.reduce((acc, val) => acc + val, 0);
const numerosOrdenados = [...numeros].sort((a, b) => a - b);

console.log(`\nNúmeros digitados: ${numeros.join(', ')}`);
console.log(`Números em ordem crescente: ${numerosOrdenados.join(', ')}`);
console.log(`Menor número: ${menor}`);
console.log(`Maior número: ${maior}`);
console.log(`Somatória dos números: ${soma}`);
