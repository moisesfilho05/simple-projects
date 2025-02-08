let contatos = [];

const adicionarContato = () => {
    let nome = prompt('Digite o seu nome:');
    let numero;
    let validacao = false;

    while (validacao === false) {
        numero = prompt('Digite o seu número (ex: 9999999999):');

        if (!(isNaN(parseInt(numero)) || ![10, 11].includes(numero.length))) {
            validacao = true;
            break;
        } else {
            alert('Caracteres inválidos, digite novamente um número!');
        };
    };

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
        const ddd = contato.numero.slice(0, 2)
        const primeiraParte = contato.numero.length === 10 ? contato.numero.slice(2, 6) : contato.numero.slice(2, 7)
        const segundaParte = contato.numero.length === 10 ? contato.numero.slice(6, 10) : contato.numero.slice(7, 11)
        const formatNumber = `(${ddd}) ${primeiraParte}-${segundaParte}`
        div.innerHTML = `<p>nome: ${contato.nome}</p>
        <p>número: ${formatNumber}</p>
        <button onclick="excluirContato(${index})">deletar</button>
        <hr>`
        listaContatos.appendChild(div);
    });
};

function excluirContato(index) {
    contatos = contatos.filter((item, indexItem) => indexItem !== index);
    exibirContato();
};