function criptografar() {
  const mensagem = document.getElementById("mensagem").value;

  let pares = "";
  let impares = "";

  // Percorre todas as letras de mensagem
  for (let i = 0; i < mensagem.length; i++) {
    // Se a posição for par
    if (i % 2 === 0) {
      pares += mensagem.charAt(i);
    } else {
      // Se posição for ímpar
      impares += mensagem.charAt(i);
    }
  }

  //Junta as letras pares com as ímopares
  const codigo = pares + impares;
  document.getElementById("resultado").textContent = codigo;
}
