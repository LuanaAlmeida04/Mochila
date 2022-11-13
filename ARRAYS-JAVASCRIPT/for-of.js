const notas = [10, 6.5, 4, 7.5];

let somaNotas = 0;

for (let nota of notas) {
    somaNotas += nota
}


const media = somaNotas / notas.length;

console.log(`A media das notas da turma foi de ${media}`)