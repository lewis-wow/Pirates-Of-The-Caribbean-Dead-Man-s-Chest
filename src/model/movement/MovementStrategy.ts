import { Direction } from './Direction';

export const MovementStrategy = {
  orthogonalDirections: [
    { x: 0, y: 1 }, // Up
    { x: 1, y: 0 }, // Right
    { x: 0, y: -1 }, // Down
    { x: -1, y: 0 }, // Left
  ],
  diagonalDirections: [
    { x: 1, y: 1 }, // Diagonal Bottom-Right
    { x: 1, y: -1 }, // Diagonal Bottom-Left
    { x: -1, y: 1 }, // Diagonal Top-Right
    { x: -1, y: -1 }, // Diagonal Top-Left
  ],
  knightDirections: [
    { x: 2, y: 1 },
    { x: 2, y: -1 },
    { x: -2, y: 1 },
    { x: -2, y: -1 },
    { x: 1, y: 2 },
    { x: 1, y: -2 },
    { x: -1, y: 2 },
    { x: -1, y: -2 },
  ],
} satisfies Record<string, Direction[]>;
