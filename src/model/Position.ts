import { random } from 'lodash-es';
import { match } from 'ts-pattern';
import { Model } from './Model';

export type StringPosition = 'top' | 'bottom' | 'left' | 'right';

export class Position extends Model {
  x: number;
  y: number;

  constructor(opts: { x: number; y: number }) {
    super();

    this.x = opts.x;
    this.y = opts.y;
  }

  static generateRandomPosition(opts: { x: { from: number; to: number }; y: { from: number; to: number } }): Position {
    const randomX = random(opts.x.from, opts.x.to);
    const randomY = random(opts.y.from, opts.y.to);

    return new Position({ x: randomX, y: randomY });
  }

  static fromStringPosition(opts: { stringPosition: StringPosition; size: number }): Position {
    const maxX = opts.size - 2;
    const maxY = opts.size - 2;
    const maxBound = opts.size - 1;

    return match(opts)
      .with({ stringPosition: 'top' }, () =>
        Position.generateRandomPosition({ x: { from: 1, to: maxX }, y: { from: 0, to: 0 } })
      )
      .with({ stringPosition: 'bottom' }, () =>
        Position.generateRandomPosition({
          x: { from: 1, to: maxX },
          y: { from: maxBound, to: maxBound },
        })
      )
      .with({ stringPosition: 'left' }, () =>
        Position.generateRandomPosition({ x: { from: 0, to: 0 }, y: { from: 1, to: maxY } })
      )
      .with({ stringPosition: 'right' }, () =>
        Position.generateRandomPosition({ x: { from: maxBound, to: maxBound }, y: { from: 1, to: maxY } })
      )
      .exhaustive();
  }
}
