import { Nota } from "./atividade01";
import { GerenciarNotas } from "./atividade01";

test("Deve criar uma nota válida", () => {
  const nota = new Nota("C", 4);
  expect(nota.tom).toBe("C");
  expect(nota.oitava).toBe(4);
});

test("Deve aceitar letras minúsculas e converter para maiúsculas", () => {
  const nota = new Nota("d", 3);
  expect(nota.tom).toBe("D");
});

test("Deve lançar erro para tom inválido", () => {
  expect(() => new Nota("H", 4)).toThrow(/Tom inválido: H/);
});

test("Deve lançar erro para tom com símbolo inválido", () => {
  expect(() => new Nota("C#", 4)).toThrow(/Tom inválido: C#/);
});

const ger = new GerenciarNotas();
ger.perguntarNota();
expect(ger.notas.length).toBe(0);
