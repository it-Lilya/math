import Magician from '../magician';

test('test 100', () => {
  const data = new Magician('Boo', 'Magician', 1);
  const expected = {
    name: 'Boo',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
    stoned: 100,
  };
  expect(data).toEqual(expected);
});

test('test 90', () => {
  const data = new Magician('Boo', 'Magician', 2);
  const expected = {
    name: 'Boo',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
    stoned: 90,
  };
  expect(data).toEqual(expected);
});

test('test 80', () => {
  const data = new Magician('Boo', 'Magician', 3);
  const expected = {
    name: 'Boo',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
    stoned: 80,
  };
  expect(data).toEqual(expected);
});

test('test 70', () => {
  const data = new Magician('Boo', 'Magician', 4);
  const expected = {
    name: 'Boo',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
    stoned: 70,
  };
  expect(data).toEqual(expected);
});

test('test 60', () => {
  const data = new Magician('Boo', 'Magician', 5);
  const expected = {
    name: 'Boo',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
    stoned: 60,
  };
  expect(data).toEqual(expected);
});

test('test', () => {
  const data = new Magician('Boo', 'Magician');
  const result = data.stoned;
  const expected = undefined;
  expect(result).toEqual(expected);
});
