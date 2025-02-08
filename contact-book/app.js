let contatos = [];

const adicionarContato = () => {
    let nome = prompt('Digite o seu nome:');
    let numero = prompt('Digite o seu número:');
    const contato = {
        nome: nome,
        numero: numero,
    };
    contatos.push(contato);
    console.log(contatos);

    exibirContato();
};

function exibirContato() {
    let listaContatos = document.getElementById('listaContatos');
    listaContatos.innerHTML = '';

    contatos.forEach((contato, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<p>nome: ${contato.nome}</p>
        <p>número: ${contato.numero}</p>
        <button onclick="excluirContato(${index})">deletar</button>
        <hr>`
        listaContatos.appendChild(div);
    });
};

function excluirContato(index) {
    contatos = contatos.filter((item, indexItem) => indexItem !== index)
    exibirContato()
};