import * as readlineSync from 'readline-sync';

function fatoresPrimosUnicos(n: number): number[] {
    let fatores: number[] = [];
    let divisor = 2;

    while (n > 1) {
        if (n % divisor === 0) {
            if (!fatores.includes(divisor)) {
                fatores.push(divisor);
            }
            n = n / divisor;
        } else {
            divisor++;
        }
    }

    return fatores;
}

function numPrimo(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const numStr = readlineSync.question("Digite um numero inteiro: ");
const num = parseInt(numStr);

if (isNaN(num)) {
    console.log("Por favor, digite um numero válido.");
} else {
    if (numPrimo(num)) {
        console.log(`${num} é um numero primo.`);
    } else {
        const fatores = fatoresPrimosUnicos(num);
        console.log(`${num} não é primo.`);
        console.log(`Os fatores primos únicos são: ${fatores.join(', ')}`);
    }
}
