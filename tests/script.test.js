const { criarItem, limparInput } = require('../script');

test('Não cria item vazio', () => {
  expect(criarItem("")).toBe(null);
});

test('Cria item válido', () => {
  expect(criarItem("Tarefa")).toBe("Tarefa");
});

test('Limpa input', () => {
  expect(limparInput()).toBe("");
});

test('Criar item retorna texto correto', () => {
  expect(criarItem("Estudar")).toBe("Estudar");
});

test('Criar item mantém valor', () => {
  expect(criarItem("Teste")).toEqual("Teste");
});