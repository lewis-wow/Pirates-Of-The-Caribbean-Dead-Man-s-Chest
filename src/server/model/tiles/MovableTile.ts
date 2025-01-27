import { Tile } from './Tile';
import { Mixin } from 'ts-mixer';
import { MovableModel } from '../MovableModel';
import { Position } from '../Position';
import { Direction } from '../Direction';

export class MovableTile extends Mixin(MovableModel, Tile) {
  constructor(initialPosition: Position, initialMovementRules: Direction[]) {
    super(initialPosition, initialMovementRules);
  }
}
