document.getElementById('geradorAleatorio').addEventListener('click', function() {
    // Gera um número aleatório entre 2 e 9
    let base = Math.floor(Math.random() * 9) + 2;

    // Gera um expoente aleatório entre 2 e 4
    let exponent = Math.floor(Math.random() * 4) + 2;

    // Calcula a potência
    let result = Math.pow(base, exponent);

    // Exibe o Número e o Expoente
    document.getElementById('result').innerHTML = `Número gerado: ${base}<br>Expoente gerado: ${exponent}`;
    // Salva o resultado na sessão atual
    document.getElementById('botaoDaResposta').result = result;
    // Habilita o botão de resposta
    document.getElementById('botaoDaResposta').disabled = false;
});

document.getElementById('botaoDaResposta').addEventListener('click', function() {
    // Recupera o resultado salvo no botão
    let result = document.getElementById('botaoDaResposta').result;
    // Exibe o Resultado
    document.getElementById('resposta').innerHTML = `Resultado: ${result}`;
});