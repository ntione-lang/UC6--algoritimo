function gerarReferencia(){

    // Recebe o nome digitado
    const nome= document.getElementById("autor").value.trim();

    // Verifica se o campo está vazio
    if(nome === ""){
        alert("digite o nome do autor.");
        return;
    }

    // Divide o nome em um valor
    const partes = nome.split("");

    //Pega o último sobrenome
    const sobrenome = partes[partes.length - 1].toUpperCase();

    //monta as iniciais
    let iniciais = "";

    for (let i = 0; i < partes.length -1; i++){
        iniciais += partes[i].charAt(0).toUpperCase() + ".";
    }

    //Exibe o resultado
    document.getElementById("resultado").textContent =
    sobrenome + "," + iniciais;
}