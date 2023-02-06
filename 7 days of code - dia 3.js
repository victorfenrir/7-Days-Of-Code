const destino = prompt('Desejas seguir para área de Front-End ou seguir para a área de Back-End?');
let linguagem = "";
if(destino === 'Front-End') {
    linguagem = prompt('Na área de Front-End, queres aprender React ou Vue?');
} else if (destino === 'Back-End') {
    linguagem = prompt('Na área de Back-End, queres aprender C# ou Java?');
} else {
    alert("Área inválida!");
    const destino = prompt('Desejas seguir para área de Front-End ou seguir para a área de Back-End?');
    if(destino === 'Front-End') {
        linguagem = prompt('Na área de Front-End, queres aprender React ou Vue?');
    } else if (destino === 'Back-End') {
        linguagem = prompt('Na área de Back-End, queres aprender C# ou Java?');
    }
}

const escolha = prompt('Desejas continuar com Especialização ou preferes tornar-te Fullstack?')

if (escolha == 'Especialização') {
    alert(`Vcê decidiu seguir se especializando em ${destino}! Aprofunde-se em ${linguagem} para exercer seu domínio.`);
} else {
    alert(`Você decidiu se tornar um desenvolvedor ${escolha}! Será necessário aprender outras linguagens além de ${linguagem} para atingir este objetivo.`);
}

let msg = prompt("Há alguma outra tecnologia que gostaria de se especializar ou conhecer? Digite 'sim', se for o caso.");
while(msg === 'sim') {
    let tecnologia = prompt('Qual?');
    alert(`${tecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Quais são as tecnologias que gostaria de se especializar ou conhecer? Se sim, digite 'ok'");
}


