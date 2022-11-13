const nomes = ["Evaldo", "Mari", "Camis"];

// nomes.forEach(function (nome) {
//     console.log(nome); 
// });

// nomes.forEach((nome) => {
//     console.log(nome); 
// });

function imprimeNota(nome) {
    console.log(nome);
}

nomes.forEach(imprimeNota);