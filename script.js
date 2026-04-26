function criarItem(texto) {
  if (!texto || texto.trim() === "") {
    return null;
  }

  return {
    texto: texto,
    concluido: false
  };
}

module.exports = { criarItem };