import { test, expect } from 'vitest';
import { Ship } from './Ship';
import { Position } from './movement/Position';

test('Ship orthogonal movement', () => {
  const ship = new Ship(new Position(0, 0));
  const boardSize = 3;

  expect(ship.getPosition()).toEqual(new Position(0, 0));

  expect(ship.getPossibleMoves(boardSize)).toEqual(expect.arrayContaining([new Position(0, 1), new Position(1, 0)]));

  expect(ship.move(new Position(1, 0), boardSize)).toBe(true);

  expect(ship.getPosition()).toEqual(new Position(1, 0));

  expect(ship.getPossibleMoves(boardSize)).toEqual(expect.arrayContaining([new Position(0, 0), new Position(2, 0)]));
});
