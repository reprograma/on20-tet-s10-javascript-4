// a PROMISE ela é considerada um OBJETO que tem as mesmas propriedades como qualquer outro objeto no JS com metodos e propriedades propria 
// cada promise ela vai apresenta um ESTADO/STATUS de proecesso [pending - resolve/fufill - rejected] que é a resposta direta da ação do objeto 
// e para que esse objeto ela realize a ação necessaria teremos o them/catch como meio 


function criarVairavel(){
   return new Promise ((resolve, reject) => {
    setTimeout(() =>{
      // return reject (new Error ('deu um bug!'))
      return resolve ('luciana')}
    ,1000)
   })
}
let nome 

// criarVairavel ()
// .then ((resposta) => console.log(resposta))
// .catch((erro) => console.log(erro))

criarVairavel ()
.then ((resposta) => {nome = resposta
   console.log (nome)
})
.catch((erro) => nome = 'nome padrãozinho')

console.log(nome)

// O then é considerado um metodo do objeto 

// no primeiro caso onde o console log esta fora da promessa ela acaba dando uma resposta UNDEFINED, ou seja, de alguma forma não funciona
// mas com a possibilidade de colocar o console log dentro da promessa e fora, ela acaba funcionando mass de acordo com o tempo que foi determinado pelo settimeout



// essa função em si ela tem que entregar uma string, a tentativa é de dar um console na aluna para que saia o nome "luciana"

// function criarVairavel(){
//    return 'luciana'
// } entrega de forma sincrona 

//  estrutura especial do back-end 