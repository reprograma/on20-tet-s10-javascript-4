
    const main= document.getElementById("pesquisar-cep")

async function encontrarEndereco(){
    try{
        const form = document.createElement ("form")
        main.appendChild(form);

    }

    catch(err) {
        console.error('Capturei um erro:', err)

    }
}

{/* <div id="pesquisar-cep">
<form action="text">
    <input type="number">
</form>


</div> */}