const Animals = require('../src/animals')
const gato = new Animals.Gato();
const cachorro = new Animals.Cachorro();
const { testRunner } = require('../stryker.conf')

test('Cachorro deve latir', () => {
  expect(cachorro.som()).toEqual('Auau')
})

test('Idade cachorro deve ser 7 vezes maior que humana', () => {
  expect(cachorro.idadeHumana(5)).toEqual(35)
})

test('Gato deve miar', () => {
  expect(gato.som()).toEqual('Miau')
})

test('Idade gato de um ano deve ser 15 em idade humana', () => {
  expect(gato.idadeHumana(1)).toEqual(15)
})