'use strict';

function cleanForm () {
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}


function fillOutForm (address) {
    document.getElementById('endereco').value = address.logradouro;
    document.getElementById('bairro').value = address.bairro;
    document.getElementById('cidade').value = address.localidade;
    document.getElementById('estado').value = address.uf;
}


const cepValido = (cep) => cep.length == 8; 

async function searchCep () {
    
    cleanForm();
    
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    
    if (cepValido(cep)){

        const dados = await fetch(url);
        const endereco = await dados.json();

        if (endereco.hasOwnProperty('erro')){
            document.getElementById('endereco').value = 'CEP não encontrado!';
        }else {
            fillOutForm(endereco);
        }
        
    }else{
        document.getElementById('endereco').value = 'CEP incorreto!';
    }
     
}

const fillout = document.getElementById('cep')
fillout.addEventListener('focusout',searchCep);

const bottomLimpar = document.getElementById('btn')
bottomLimpar.addEventListener('click',cleanForm);