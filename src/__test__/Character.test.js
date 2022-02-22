import Character from '../js/Character';

test('smallNameLength', () => {
  const received = () => new Character('p', 'Daemon');
  expect(received).toThrowError('Имя героя должно состоять от 2 до 10 символов.');
});

test('bigNameLength', () => {
  const received = () => new Character('player1player1', 'Daemon');
  expect(received).toThrowError('Имя героя должно состоять от 2 до 10 символов.');
});

test('typeError', () => {
  const received = () => new Character('player1', 'type1');
  expect(received).toThrowError('Выбранный тип не существует.');
});
