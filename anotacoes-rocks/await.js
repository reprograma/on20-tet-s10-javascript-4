// Notas básicas sobre async/await
// funciona obrigatoriamente no protocolo de promises 
// async é usada no incio de uma funcção 
// await é usado para avisar a função para esperar o resultado da promise 
// await so pode ser usado junto com a função async 
// O código fica mais simples 
// mais fácil de desbugar callbacks
// conversão simples 
// o código fica com menos encadeamentos
// bom para usar em sequencia de comandos, fluxo de dados. 



function criarVairavel(){
    return new Promise ((resolve, reject) => {
     setTimeout(() =>{
       // return reject (new Error ('deu um bug!'))
       return resolve ('mariana')}
     ,2000)
    })
 }

 async function resolverPromise(){
     try{
     const nome = await criarVairavel()
     console.log(nome)
    }
    catch(err){
        console.error(err)
    }
 }
// aqui o catch ele faz parte da estrutura do objeto 
// o try pode ser usado em qualquer momento pq ele nao tem vinculo direto com a promise 
 resolverPromise() 

//  sempre que tiver algo assincrono, pode usar o async/await 
// [pergunta para aula] mesmo sabendo que o await ele vai parar o codigo, mesmo com o settimeout aplicado ali, a resposta ela pode ficar mais mais lenta ainda 
// try/catch ele é especial para o tratamento de erros 