
function consultarEndereco(){
	let cep = document.getElementById ("cep").value;
	if (cep.length !==8){
		alert ("CEP inválido, o CEP deve conter 8 números!")
		return;
	}

	let url = `https://viacep.com.br/ws/${cep}/json/`;

	fetch(url).then (function (reponse){
		reponse.json().then(mostrarEndereco)

		})
	}


function mostrarEndereco (dados){
	let resultado = document.getElementById("resultado")
	if (dados.erro){
		resultado.innerHTML = "Endereço não encontrado, verifique o CEP e tente novamente"
	} else {
	resultado.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
	                       <p>Complemento: ${dados.complemento}</p> 
                           <p>Bairro: ${dados.bairro}</p>
						   <P>Cidade: ${dados.localidade}</P>
						   <P>Estado: ${dados.uf}</P>`

}}