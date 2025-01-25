import { Card } from '../Card';
import { Card as CardModel } from '../model/cards/Card';
import { Coin as CoinModel } from '../model/Coin';
import { Renderer } from './Renderer';

export type PlayableCardProps = {
  cardModel: CardModel;
};

export const PlayableCard = ({ cardModel }: PlayableCardProps) => {
  return (
    <Card src={cardModel.src} tooltip={cardModel.tooltip} isFlipped={cardModel.isFlipped}>
      {cardModel.pirates.map((pirate, index) => (
        <Renderer key={index} model={pirate} />
      ))}

      {Array.from({ length: cardModel.coins }, (_, index) => (
        <Renderer key={index} model={new CoinModel()} />
      ))}
    </Card>
  );
};
