let numeros = [];

function adicionarNumero() {
  const input = document.getElementById("numero");
  const valor = input.value.trim();

  if (valor === "") {
    alert("Digite um número.");
    input.focus();
    return;
  }

  const numero = Number(valor);

  if (numeros.indexOf(numero) !== -1) {
    alert("Esse número já foi adicionado.");
    input.focus();
    return;
  }

  numeros.push(numero);
  document.getElementById("lista").innerHTML = numeros.join(", ");
  input.value = "";
  input.focus();
}

function verificarOrdem() {
  if (numeros.length < 2) {
    document.getElementById("resultado").innerHTML =
      "Adicione pelo menos 2 números para verificar a ordem.";
    return;
  }

  let estaOrdenado = true;

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < numeros[i - 1]) {
      estaOrdenado = false;
      break;
    }
  }

  document.getElementById("resultado").innerHTML = estaOrdenado
    ? "Os números estão em ordem crescente."
    : "Os números NÃO estão em ordem crescente.";
}
