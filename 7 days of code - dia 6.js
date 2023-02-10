let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let produto = "";
let categoria = "";
let remover = "";

let pergunta = 'sim';
while (pergunta != 'não') {

    pergunta = prompt ('Deseja adicionar ou remover um produto à sua lista de compras? Digite sim ou não.');
    
    while (pergunta != 'sim' && pergunta != 'não') {
        alert ('Operação não reconhecida.');
        pergunta = prompt ('Deseja adicionar um produto à sua lista de compras? Digite sim ou não.');
    }

    if (pergunta === 'não') {

        break;
    }

    pergunta = prompt ("Digite 'adicionar' ou 'remover' para prosseguir.")

    if (pergunta === 'adicionar') {
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
    } else if (pergunta === 'remover') {
        if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0){
            alert(`A lista está vazia!`);
        } else {
            remover = prompt (`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n \n Qual produto deseja remover?`);

            if(frutas.indexOf(remover) != -1) {
                frutas.splice(frutas.indexOf(remover),1);
                alert(`O item ${remover} foi removido com sucesso!`);
            } else 
            if(laticinios.indexOf(remover) != -1) {
                laticinios.splice(laticinios.indexOf(remover),1);
                alert(`O item ${remover} foi removido com sucesso!`);
            } else 
            if(doces.indexOf(remover) != -1) {
                doces.splice(doces.indexOf(remover),1);
                alert(`O item ${remover} foi removido com sucesso!`);
            }  else 
            if(congelados.indexOf(remover) != -1) {
                congelados.splice(congelados.indexOf(remover),1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else {
                alert(`Não foi possível encontrar o item dentro da lista!`);
        }            
        }
    }
}

alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);

