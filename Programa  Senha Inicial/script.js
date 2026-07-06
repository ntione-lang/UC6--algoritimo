const btGerar = document.getElementById("btGerar");

btGerar.addEventListener("click", gerarSenha);

//------------------------------------
//Valida se o nome foi preenchido
//----------------------------------

function validarNome(nome){

    nome = nome.trim();

    if(nome =="" || nome.indexOf("") == -1){
        return false;

    }
    return true;
}

//--------------------------------------
// Obtém o sobrenome em minúsculas
//---------------------------------------

function obterSobrenome(nome){

    const partes = nome.trim().split("");

    return partes[partes.length -1].toLowerCase();

}
//--------------------------------------
// Contar a quantidade de vogais
//--------------------------------

function contarVogais(nome){

    let contador = 0;
    const vogais = "aeiouáàãâéêíóõôúAEIOUÁÀÂÃÉÊÍÓÔÕÚ";

    for(let i = 0; i< nome.length; i ++){
        if(vogais.includes(nome.charAt(i))){
            contador ++;
        }
    }
    return contador;
}

//---------------------------------------------------
// Gera a Senha
//--------------------------------------------------

function gerarSenha(){

    const nome = document.getElementById("inNome").value;

    if(!validarNome(nome)){
        alert("Informe o nome completo do aluno.");
        document.getElementById("inNome").focus();
        return;
    }

    const sobrenome = obterSobrenome(nome);
    const vogais = contarVogais(nome);

    const senha = sobrenome + String(vogais).padStart(2, "0");

    document.getElementById("outResposta").textContent =
    "Senha Inicial:" + senha ;

}

