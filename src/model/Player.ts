import { Model } from './Model';
import { Position } from './Position';

export type PlayerColor = 'red' | 'black' | 'blue' | 'purple';
export type PlayerInitialPosition = 'top' | 'bottom' | 'left' | 'right';

export type PlayerOptions = {
  name: string;
  color: PlayerColor;
  initialPosition: PlayerInitialPosition;
  boardSize: number;
};

export class Player extends Model {
  name: string;
  color: PlayerColor;
  position: Position;
  score = 0;

  constructor(opts: PlayerOptions) {
    super();

    this.name = opts.name;
    this.color = opts.color;
    this.position = Position.fromStringPosition({
      stringPosition: opts.initialPosition,
      size: opts.boardSize,
    });
  }
}
