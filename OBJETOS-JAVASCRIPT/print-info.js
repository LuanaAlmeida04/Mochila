const cliente = {
    nome:"André",
    idade:"36",
    cpf:"000.000.000-00",
    email:"andre@email.com",
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos`);
console.log(`O meu CPF começa com ${cliente.cpf.substring(0,3)}`)