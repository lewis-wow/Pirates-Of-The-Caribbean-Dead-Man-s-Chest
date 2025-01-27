import { TileTypeEnum } from '@/validations';
import { Tile } from '../tiles/Tile';

export class Card extends Tile {
  tileType: TileTypeEnum = TileTypeEnum.CARD;
  isFlipped = false;
}
