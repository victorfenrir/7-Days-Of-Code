let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let produto = "";
let categoria = "";
var a = 0;

let pergunta = 'sim';
while (pergunta != 'não') {
    pergunta = prompt ('Deseja adicionar um produto à sua lista de compras? Digite sim ou não.');
    while (pergunta != 'sim' && pergunta != 'não') {
        alert ('Operação não reconhecida.');
        pergunta = prompt ('Deseja adicionar um produto à sua lista de compras? Digite sim ou não.');
    }

    if (pergunta === 'não') {

        break;
    }

    var a = a + 1;

    produto = prompt ('Qual produto deseja adicionar?');
    categoria = prompt ('Em que categoria este produto se encaixa: frutas, laticinios, congelados ou doces?');

    if(categoria === 'frutas') {
        frutas.push(produto);
    } else if (categoria === 'laticinios') {
        laticinios.push(produto);
    } else if (categoria === 'doces') {
        doces.push(produto);
    } else if (categoria === 'congelados') {
        congelados.push(produto);
    } else {
        alert ('Essa categoria não foi pré-definida');
    }
}

if(a > 0) {
    alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);
}

