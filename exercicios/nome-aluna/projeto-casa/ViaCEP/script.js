const form = document.querySelector('.cep-form');
const input = form.querySelector('.cep-input');
const results = document.querySelector('.results');

const onSubmit = async (event) => {
    event.preventDefault();
    const cep = input.value;

    if (cep.trim() === '') {
        return;
    }

    try {
        const addressInfo = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.json());
        if (addressInfo.erro) {
            throw new Error();
        }
        results.innerHTML = `
            <p>Logradouro: ${addressInfo.logradouro}</p>
            <p>Bairro: ${addressInfo.bairro}</p>
            <p>Cidade: ${addressInfo.localidade}</p>
            <p>UF: ${addressInfo.uf}</p>
            <p>ddd: ${addressInfo.ddd}</p>
        `;
    } catch (error) {
        results.innerHTML = '<p class="error">Erro ao carregar dados com CEP</p>';
    }

};

form.addEventListener('submit', onSubmit);