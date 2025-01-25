import { test, expect } from 'vitest';
import { Pirate } from './Pirate';
import { Position } from './movement/Position';

test('Pirate diagonal movement', () => {
  const pirate = new Pirate(new Position(0, 0));
  const boardSize = 3;

  expect(pirate.getPosition()).toEqual(new Position(0, 0));

  expect(pirate.getPossibleMoves(boardSize)).toEqual(
    expect.arrayContaining([new Position(0, 1), new Position(1, 0), new Position(1, 1)])
  );

  expect(pirate.move(new Position(1, 1), boardSize)).toBe(true);

  expect(pirate.getPosition()).toEqual(new Position(1, 1));

  expect(pirate.getPossibleMoves(boardSize)).toEqual(
    expect.arrayContaining([
      new Position(0, 0),
      new Position(0, 1),
      new Position(1, 0),
      new Position(2, 2),
      new Position(2, 0),
      new Position(0, 2),
      new Position(2, 1),
      new Position(1, 2),
    ])
  );
});

test('Pirate orthogonal movement', () => {
  const pirate = new Pirate(new Position(0, 0));
  const boardSize = 3;

  expect(pirate.getPosition()).toEqual(new Position(0, 0));

  expect(pirate.getPossibleMoves(boardSize)).toEqual(
    expect.arrayContaining([new Position(0, 1), new Position(1, 0), new Position(1, 1)])
  );

  expect(pirate.move(new Position(1, 0), boardSize)).toBe(true);

  expect(pirate.getPosition()).toEqual(new Position(1, 0));

  expect(pirate.getPossibleMoves(boardSize)).toEqual(
    expect.arrayContaining([
      new Position(1, 1),
      new Position(2, 0),
      new Position(0, 0),
      new Position(2, 1),
      new Position(0, 1),
    ])
  );
});
