// Vetor para armazenar os clubes
let clubes = [];

// Adicionar um clube ao vetor
function adicionarClube(){

    let nome = document.getElementById("clube").value.trim();

    if(nome ==""){
        alert("Informe o nome do clube.");
        return
    }

    clubes.push(nome);

    document.getElementById("clube").value = "";
    document.getElementById("clube").focus();

    mostrarclubes();
}

//Mostrar os clubes cadastrados
function mostrarClubes(){

    let lista = "";

    for(let i = 0; i < clubes.length; i ++){
        lista+= (i + 1)+ " - " + clubes[i]+ "<br>"; 
    }

    document.getElementById("listaClubes").innerHTML = lista;

}

// Gerar a tabela dos jogos
function gerarJogos(){

    let tabela= document.getElementById("tabelaJogos");

    // Verificar se a quantidade é ímpar
    if(clubes.length % 2 != 0){
        tabeal.innerHTML = "<strong> Não é possível gerar os jogos. O número de clubes é ímpar.</strong>"
  return;
    }

    let jogos = "";

    for(let i = 0; i< clubes.length /2; i++){

        let primeiro = clubes[i];
        let ultimo = clubes[clubes.length - 1 - i];

        jogos += primeiro + "x" + ultimo + "<br>";
    }

    tabela.innerHTML = jogos;
}

// Limpa tudo
function limparTudo(){

    clubes = []

        document.getElementById("listaClubes").innerHTML = "";
        document.getElementById("tabealJogos").innerHTML = "";
        document.getElementById("clube").value = "";
        document.getElementById("clube").focus();

    }
