const nome = "cassia"

try {
// tenta executar um codigo
nome = "maria"
}
catch(error) {
// captura do erro
console.error('capturei um erro:', error)
}


console.log(nome)

console.log('termina aqui')

// um bloco de tratamento de erros :) e não deixa o código quebrar !
// as requisições usando async/await com try/catch elas são aconselhaveis 