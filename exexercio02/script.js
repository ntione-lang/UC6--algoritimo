function repetirFruta( ){
    // obtém os valores digitados

    let fruta = document.getElementById("fruta").value;
    let quantidade = Number(document.getElementById("quantidade").value);
    let.resultado = "";

    // Verifica se os campos foram preenchidos
    if (fruta === "" || quantidade<=0){
        document.getElementById("resultado").innerHTML =
        "Digite uma fruta e uma quantidade válida."
        return;

    }

    // Laço for
    for (let i = 1; i <= quantidade; i++){

        resultado += fruta;

        // Adicionar * apenas entre as frutas
        if (i< quantidade) {
            resultado += "*";
        }
    }
    document.getElementById("resultado").innerHTML = resultado;
}
