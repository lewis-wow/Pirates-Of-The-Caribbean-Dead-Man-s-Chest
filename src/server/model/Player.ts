import { match } from 'ts-pattern';
import { Position } from './Position';
import { random } from 'lodash-es';
import { PlayerInitialPositionEnum, ShipColorEnum } from '@/validations';

export class Player {
  constructor(
    public name: string,
    public shipColor: ShipColorEnum,
    public initialPosition: PlayerInitialPositionEnum
  ) {}

  generateRandomInitializationShipPosition(boardSize: number): Position {
    return match(this.initialPosition)
      .with(PlayerInitialPositionEnum.TOP, () => new Position(0, random(1, boardSize - 2)))
      .with(PlayerInitialPositionEnum.BOTTOM, () => new Position(boardSize - 1, random(1, boardSize - 2)))
      .with(PlayerInitialPositionEnum.LEFT, () => new Position(random(1, boardSize - 2), 0))
      .with(PlayerInitialPositionEnum.RIGHT, () => new Position(random(1, boardSize - 2), boardSize - 1))
      .exhaustive();
  }
}
