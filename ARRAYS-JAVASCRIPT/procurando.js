const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const notas = [10, 8, 7.5, 9];
const medias = [alunos, notas];

function exibeAlunoPresente(aluno) {
    if (medias[0].includes(aluno)) {
        console.log(`${aluno} esta presente`);
        const alunos = medias[0];
        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[1][indice];

        console.log(`A sua media foi ${mediaDoAluno}`);
    } else {
        console.log("Aluno não encontrado. :(")
    }
}

exibeAlunoPresente('João');