function adicionar() {
  const input = document.getElementById("tarefa");
  const lista = document.getElementById("lista");
console.log("Sistema iniciado");
  if (input.value === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  lista.appendChild(li);
  input.value = "";
}
function criarItem(texto) {
  if (texto === "") return null;
  return texto;
}

function limparInput() {
  return "";
}

module.exports = { criarItem, limparInput };