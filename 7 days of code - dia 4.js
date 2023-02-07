let resposta = Math.floor(Math.random() * (10 - 0 + 1) + 0);
console.log(resposta);

alert('Olá! Vamos jogar?');

for(let i = 3; i < 4; i--){
    const tentativa = prompt(`Em qual número, de 0 a 10, estou pensando? Você tem ${i} tentativas!`);
    if(tentativa == resposta) {
        alert('Você acertou! PARABÉNS!!');
        break;
        }
        if(i < 2){
            alert(`Acabaram suas tentativas. A resposta correta é ${resposta}.`);
            break;
    }
 }

