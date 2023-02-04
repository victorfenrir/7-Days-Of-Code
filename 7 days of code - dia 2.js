const nome = prompt("Digite seu nome");
const idade = prompt("Digite sua idade");
const linguagem = prompt("Digite a linguagem de programação que está aprendendo");
const msg = "Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "!"
alert(msg);
const sequência = prompt("Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.");

if (sequência < 2){
    result = ('Muito bom! Continue estudando e você terá muito sucesso.');
    } else {
        result = ('Ahh que pena... Já tentou aprender outras linguagens?')
    }

