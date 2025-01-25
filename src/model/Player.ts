import { match } from 'ts-pattern';
import { ShipColor } from './Ship';
import { Position } from './movement/Position';
import { random } from 'lodash-es';

export enum PlayerInitialPosition {
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export class Player {
  coins = 0;

  constructor(public name: string, public shipColor: ShipColor, public initialPosition: PlayerInitialPosition) {}

  generateRandomInitializationShipPosition(boardSize: number) {
    return match(this.initialPosition)
      .with(PlayerInitialPosition.TOP, () => new Position(0, random(1, boardSize - 2)))
      .with(PlayerInitialPosition.BOTTOM, () => new Position(boardSize - 1, random(1, boardSize - 2)))
      .with(PlayerInitialPosition.LEFT, () => new Position(random(1, boardSize - 2), 0))
      .with(PlayerInitialPosition.RIGHT, () => new Position(random(1, boardSize - 2), boardSize - 1))
      .exhaustive();
  }
}
