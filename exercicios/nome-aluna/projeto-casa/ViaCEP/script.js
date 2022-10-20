async function consultaEndereco(){
    const cep = document.querySelector('#cep').value;
    
    if (cep.length !== 8){
      alert('cep não contém mais de 8 dígitos');
      return;
     }
     
    
     const url = `https://viacep.com.br/ws/${cep}/json/`;
   
     await fetch(url).then(function(response){
      response.json().then(function(data){
       mostrarEndereco(data);
       
      })
     });
     
   
     }
   
     function mostrarEndereco(dados){
       let resultado =document.querySelector('#resultado');
   
       resultado.innerHTML = `<p> Endereço: ${dados.logradouro}</p>
                               
                               <p>Bairro: ${dados.bairro}<p/>
                               <p>Cidade: ${dados.localidade} - ${dados.uf}<p/>`
                            
   
     }