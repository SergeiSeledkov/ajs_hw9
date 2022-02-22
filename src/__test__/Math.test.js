import Daemon from '../js/Daemon';
import Magician from '../js/Magician';

test('Check attack, stoned', () => {
  const daemon = new Daemon('player1');
  daemon.stoned = true;
  daemon.attack = 100;
  daemon.distance = 2;
  expect(daemon.attack).toBe(85);
});

test('Check attack, not stoned', () => {
  const magician = new Magician('player2');
  magician.stoned = false;
  magician.attack = 200;
  magician.distance = 2;
  expect(magician.attack).toBe(180);
});
