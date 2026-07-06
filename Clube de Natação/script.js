const btVerificar = document.getElementById("btVerificar");

btVerificar.addEventListener("click", verificarCategoria);

//------------------------------------------------
// Retorna uma linha de traços mantendo os espaços
//------------------------------------------------

function retornarTracos(nome){

    let tracos = "";
    
    for(let i = 0; i < nome.length; i++) {

        if(nome.charAt(i) == ""){
            tracos += "";

        }else{
            tracos += "-";

        }
    }

    return tracos;
}

//--------------------------------------------
// Retorna a categoria conforme a idade
//----------------------------------------

function categorizarAluno(idade){

    if(idade <= 12){
        return "Infantil";

    }else if(idade <=18){
        return"Juvenil";

    }else{
        return"Adulto";
    }
}

//---------------------------------------
// Função principal do programa
//---------------------------------------

function verificarCategoria(){

    const nome = document.getElementById("inNome").value;
    const idade = Number(document.getElementById("inIdade").value);

    if(nome == "" || idade <= 0){
        alert("Informe corretamente o nome e a idade.");
        return;
    }

    const resposta =
    nome + "\n" +
    retornarTracos(nome) + "\n" +
    "Categoria:" + categorizarAluno(idade);

    document.getElementById("outResposta").textContent = resposta;
}