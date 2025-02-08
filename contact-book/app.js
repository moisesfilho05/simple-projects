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

function formatarNumero(numero) {
    const ddd = numero.slice(0, 2)
    const primeiraParte = numero.length === 10 ? numero.slice(2, 6) : numero.slice(2, 7);
    const segundaParte = numero.length === 10 ? numero.slice(6, 10) : numero.slice(7, 11);
    return `(${ddd}) ${primeiraParte}-${segundaParte}`;
};

function exibirContato() {
    let listaContatos = document.getElementById('listaContatos');
    listaContatos.innerHTML = '';

    contatos.forEach((contato, index) => {
        const div = document.createElement('div');
        const numeroFormatado = formatarNumero(contato.numero);
        div.innerHTML = `
            <div class="container-contato">
                <div class="contato">
                    <img class="avatar-img" src="./img/avatar.png">
                    <p class="nome-contato">${contato.nome}</p>
                </div>
                <p>${numeroFormatado}</p>
                <button class="botao-deletar" onclick="excluirContato(${index})"><i class="fa-solid fa-trash"></i></button>
            </div>
        `
        listaContatos.appendChild(div);
    });
};

function excluirContato(index) {
    contatos = contatos.filter((item, indexItem) => indexItem !== index);
    exibirContato();
};

exibirContato()