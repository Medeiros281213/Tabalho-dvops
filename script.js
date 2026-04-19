function adicionar() {
  const input = document.getElementById("tarefa");
  const lista = document.getElementById("lista");

  if (input.value === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  lista.appendChild(li);
  input.value = "";
}
