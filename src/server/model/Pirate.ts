import { ShipColorEnum } from '@/validations';
import { MovementStrategy } from './movement/MovementStrategy';
import { Position } from './Position';
import { MovableModel } from './MovableModel';

export class Pirate extends MovableModel {
  constructor(public shipColor: ShipColorEnum, initialPosition: Position) {
    super(initialPosition, [...MovementStrategy.orthogonalDirections, ...MovementStrategy.diagonalDirections]);
  }
}
