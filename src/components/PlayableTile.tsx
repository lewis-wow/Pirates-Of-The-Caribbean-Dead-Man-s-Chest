import { match } from 'ts-pattern';
import { Card as CardModel } from '../model/cards/Card';
import { Tile } from './Tile';
import { CardRenderer } from './CardRenderers/CardRenderer';

export type PlayableTileProps = {
  cardModel: CardModel;
};

export const PlayableTile = ({ cardModel }: PlayableTileProps) => {
  return match(cardModel)
    .with({ isFlipped: true }, () => (
      <Tile tooltip={cardModel.tooltip}>
        <CardRenderer cardModel={cardModel} />
      </Tile>
    ))
    .otherwise(() => (
      <Tile>
        <img src="assets/card_back.png" alt="Card back" />
      </Tile>
    ));
};
