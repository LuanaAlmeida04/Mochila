const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const notas = [10, 8, 7.5, 9];
const medias = [alunos, notas];

console.log(`A aluna da posição 1 da lista de alunos é: ${
    medias[0][1]} a nota dessa aluno é ${medias[1][1]}. Já o aluno na posição 2 é:${
        medias[0][0]} que teve nota ${medias[1][0]}`);