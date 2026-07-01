function calcular() {

    let quantidade;
    let anos;
    let resultado ="";

    // do ...while para validar a quantidade inicial
    do{
        quantidade = Number(document.getElementById("quantidadeInicial").value);

        if (quantidade < 2){
            alert("Informe no mínimo 2 chichilas.");
            return;
        }
    } while (quantidade <2);

    anos = Number(document.getElementById("anos").value);
    let contador = 1;
    let total = quantidade;
    
    // Exibe o primeiro ano
    resultado += "1º ano:" + total + "Chinchilas <br>";

    //while para calcular os demais anos
    while(contador <anos){
        total = total * 3;
        contador ++;

        resultado += contador + "ºAno:" +total+ "chinchilas<br>";

    }
    document.getElementById("resultado").innerHTML = resultado;
}