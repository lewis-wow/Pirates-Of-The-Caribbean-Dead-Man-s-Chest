import { match } from 'ts-pattern';
import { Card as CardModel } from '../model/cards/Card';
import { TileRenderer } from './TileRenderer';
import { Tile } from './Tile';

export type PlayableTileProps = {
  cardModel: CardModel;
};

export const PlayableTile = ({ cardModel }: PlayableTileProps) => {
  return match(cardModel)
    .with({ isFlipped: true }, () => (
      <Tile tooltip={cardModel.tooltip}>
        <TileRenderer model={cardModel} />
      </Tile>
    ))
    .otherwise(() => <img src="assets/card_back.png" alt="Card back" />);
};
