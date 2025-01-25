import { match } from 'ts-pattern';
import { Card as CardModel } from '../model/cards/Card';
import { Tile } from './Tile';
import { TileRenderer } from './TileRenderer';

export type PlayableTileProps = {
  cardModel: CardModel;
};

export const PlayableTile = ({ cardModel }: PlayableTileProps) => {
  return (
    <Tile tooltip={cardModel.tooltip}>
      {match(cardModel)
        .with({ isFlipped: true }, () => (
          <div>
            <img src={cardModel.image} alt="Card" />

            <TileRenderer model={cardModel.pirates} />
            <TileRenderer model={cardModel.coins} />
          </div>
        ))
        .otherwise(() => (
          <img src="assets/card_back.png" alt="Card back" />
        ))}
    </Tile>
  );
};
