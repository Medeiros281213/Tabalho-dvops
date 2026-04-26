const { criarItem } = require("../script");

test("Não cria item vazio", () => {
  expect(criarItem("")).toBeNull();
});

test("Cria item válido", () => {
  const item = criarItem("Estudar");

  expect(item).toBeDefined();
  expect(item.texto).toBe("Estudar");
  expect(item.concluido).toBe(false);
});

test("Remove espaços vazios", () => {
  expect(criarItem("   ")).toBeNull();
});

test("Retorna objeto correto", () => {
  const item = criarItem("Teste");

  expect(typeof item).toBe("object");
});