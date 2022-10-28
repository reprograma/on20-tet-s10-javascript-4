
 document.getElementById('submit').addEventListener('click', getAdress());
console.log(button)
const container = document.getElementById('container')

async function getCep(resultado) {
    try{
      const cep = document.getElementById('cep').value
      const resposta = await fetch('https://viacep.com.br/ws/$%7Bcep%7D/json/')
    }
    catch (erro){n
        console.error('encontrei um erro:', err)
    }
}
 
getCep('resposta da pesquisa')