/* eslint-disable no-unused-vars */
import Magician from '../magician';
import Daemon, { eks2 } from '../daemon';

test('TEST-OK-Magician-attack1', () => {
  const eks1 = new Magician(1, 100);
  const f = eks1.attack;
  expect(f).toBe(0);
});

test('TEST-OK-Magician-attack2', () => {
  const eks1 = new Magician(2, 100);
  const f = eks1.attack;
  expect(f).toBe(90);
});

test('TEST-OK-Magician-attack3', () => {
  const eks1 = new Magician(3, 100);
  const f = eks1.attack;
  expect(f).toBe(80);
});

test('TEST-OK-Magician-attack4', () => {
  const eks1 = new Magician(4, 100);
  const f = eks1.attack;
  expect(f).toBe(70);
});

test('TEST-OK-Magician-attack5', () => {
  const eks1 = new Magician(5, 100);
  const f = eks1.attack;
  expect(f).toBe(60);
});

test('TEST-OK-Magician-stoned', () => {
  const eks1 = new Magician(2, 100);
  const f = eks1.stoned;
  expect(f).toBe(87);
});

test('TEST-OK-Daemon-attack', () => {
  const f = eks2.attack;
  expect(f).toBe(90);
});

test('TEST-OK-Daemon-stoned', () => {
  const f = eks2.stoned;
  expect(f).toBe(78);
});
