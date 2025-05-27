import * as readlineSync from 'readline-sync';

const palavra = readlineSync.question("Digite uma palavra: ");

const vogais = 'aeiouAEIOU';
let countVogais = 0;
let countConsoantes = 0;

for (let char of palavra) {
    if (vogais.includes(char)) {
        countVogais++;
    } else {
        countConsoantes++;
    }
}

console.log(`A palavra "${palavra}" tem ${countVogais} vogais e ${countConsoantes} consoantes.`);
