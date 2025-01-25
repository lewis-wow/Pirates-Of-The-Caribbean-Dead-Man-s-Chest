import { test, expect } from 'vitest';
import { Board } from './Board';
import { JackSparrowCard } from './cards/JackSparrowCard';
import { Position } from './movement/Position';

test('Board generation', () => {
  const boardSize = 3;
  const board = new Board(boardSize, [new JackSparrowCard()]);

  expect(board.grid).toMatchInlineSnapshot(`
    [
      [
        EmptyCard {
          "isFlipped": true,
          "src": undefined,
          "tooltip": undefined,
        },
        EmptyCard {
          "isFlipped": true,
          "src": undefined,
          "tooltip": undefined,
        },
        EmptyCard {
          "isFlipped": true,
          "src": undefined,
          "tooltip": undefined,
        },
      ],
      [
        EmptyCard {
          "isFlipped": true,
          "src": undefined,
          "tooltip": undefined,
        },
        JackSparrowCard {
          "image": "assets/cards/jack_sparrow.png",
          "isFlipped": false,
          "src": "assets/card_back.png",
          "tooltip": "Jack Sparrow ti narve kladu do prdele",
        },
        EmptyCard {
          "isFlipped": true,
          "src": undefined,
          "tooltip": undefined,
        },
      ],
      [
        EmptyCard {
          "isFlipped": true,
          "src": undefined,
          "tooltip": undefined,
        },
        EmptyCard {
          "isFlipped": true,
          "src": undefined,
          "tooltip": undefined,
        },
        EmptyCard {
          "isFlipped": true,
          "src": undefined,
          "tooltip": undefined,
        },
      ],
    ]
  `);

  board.addPlayerShip(new Position(0, 0));

  expect(board.grid).toMatchInlineSnapshot(`
    [
      [
        Ship {
          "movementRules": [
            {
              "x": 0,
              "y": 1,
            },
            {
              "x": 1,
              "y": 0,
            },
            {
              "x": 0,
              "y": -1,
            },
            {
              "x": -1,
              "y": 0,
            },
          ],
          "position": Position {
            "x": 0,
            "y": 0,
          },
        },
        EmptyCard {
          "isFlipped": true,
          "src": undefined,
          "tooltip": undefined,
        },
        EmptyCard {
          "isFlipped": true,
          "src": undefined,
          "tooltip": undefined,
        },
      ],
      [
        EmptyCard {
          "isFlipped": true,
          "src": undefined,
          "tooltip": undefined,
        },
        JackSparrowCard {
          "image": "assets/cards/jack_sparrow.png",
          "isFlipped": false,
          "src": "assets/card_back.png",
          "tooltip": "Jack Sparrow ti narve kladu do prdele",
        },
        EmptyCard {
          "isFlipped": true,
          "src": undefined,
          "tooltip": undefined,
        },
      ],
      [
        EmptyCard {
          "isFlipped": true,
          "src": undefined,
          "tooltip": undefined,
        },
        EmptyCard {
          "isFlipped": true,
          "src": undefined,
          "tooltip": undefined,
        },
        EmptyCard {
          "isFlipped": true,
          "src": undefined,
          "tooltip": undefined,
        },
      ],
    ]
  `);
});
