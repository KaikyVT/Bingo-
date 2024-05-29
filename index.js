var jogadores = []

function gerarNumerosAleatorios(quantidade, min, max){

    if(quantidade > (max - min)){
        console.log("Intervalo insuficiente ...");
        return;
    }

    var numeros = [];

    while(numeros.length < quantidade){
        var aleatorio = Math.floor(Math.random()*(max - min) + min);
        
        if(!numeros.includes(aleatorio)){
            numeros.push(aleatorio);
        }
    }

    return numeros;

}

function gerarCartela(){
    var nomeJogador = prompt('Digite o nome do jogador');

    if (nomeJogador.trim() === ""|| nomeJogador === undefined)
    {
        alert("Bota um nome ae!!");
        return;
    }

    var cartela = [gerarNumerosAleatorios(5,1,15), gerarNumerosAleatorios(5,16,30), gerarNumerosAleatorios(5,31,45),gerarNumerosAleatorios(5,46,60), gerarNumerosAleatorios(5,61,75)]

    jogadores.push({
        nomeJogador: nomeJogador,
        cartela: cartela
    });

    desenharCartela(nomeJogador, cartela);

    console.log(jogadores)
}

function reiniciarJogo(){
    jogadores = []
    var div = document.getElementById('espaco_cartelas');
    div.innerHTML = '';
}

function desenharCartela(nome, cartela){
    var div = document.getElementById('espaco_cartelas');

    var tabela = document.createElement('table');

    var thead = document.createElement('thead');

    var thB = document.createElement('th');
    thB.innerText = 'B';
    thB.style.color = "purple"
    var thI = document.createElement('th');
    thI.innerText = 'I';
    thI.style.color = "red"
    var thN = document.createElement('th');
    thN.innerText = 'N';
    thN.style.color = "green"
    var thG = document.createElement('th');
    thG.innerText = 'G';
    thG.style.color = "blue"
    var thO = document.createElement('th');
    thO.innerText = 'O';
    thO.style.color = "yellow"

    thead.appendChild(thB)
    thead.appendChild(thI)
    thead.appendChild(thN)
    thead.appendChild(thG)
    thead.appendChild(thO)

    for(var i = 0; i < 5; i++){
        var tr = document.createElement('tr');
        for(var j = 0; j < 5; j++){
            var td = document.createElement('td');
            td.style.border = "2px solid purple";
            td.style.borderCollapse = "collapse"
            if(i == 2 && j == 2){
                td.innerText = "X";
                tr.appendChild(td);
            }else{
                td.innerText = cartela[j][i]
                tr.appendChild(td);
            }
        }
        tabela.appendChild(tr)

        if (div.childElementCount > 5) {
            // Adicionando uma quebra de linha após a tabela
            div.appendChild(document.createElement('br'))
        }
    }

    tabela.appendChild(thead);
    div.appendChild(tabela);
}