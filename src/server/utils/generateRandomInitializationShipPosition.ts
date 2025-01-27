import { match } from 'ts-pattern';
import { PlayerInitialPositionEnum } from '@/validations';
import { Position } from '../model/Position';
import { random } from 'lodash-es';

export type GenerateRandomInitializationShipPositionArgs = {
  initialPosition: PlayerInitialPositionEnum;
  boardSize: number;
};

export const generateRandomInitializationShipPosition = ({
  initialPosition,
  boardSize,
}: GenerateRandomInitializationShipPositionArgs) => {
  return match(initialPosition)
    .with(PlayerInitialPositionEnum.TOP, () => new Position(0, random(1, boardSize - 2)))
    .with(PlayerInitialPositionEnum.BOTTOM, () => new Position(boardSize - 1, random(1, boardSize - 2)))
    .with(PlayerInitialPositionEnum.LEFT, () => new Position(random(1, boardSize - 2), 0))
    .with(PlayerInitialPositionEnum.RIGHT, () => new Position(random(1, boardSize - 2), boardSize - 1))
    .exhaustive();
};
