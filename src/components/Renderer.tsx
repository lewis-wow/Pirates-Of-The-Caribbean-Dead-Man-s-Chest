import { match, P } from 'ts-pattern';
import { Card as CardModel } from '../model/cards/Card';
import { Pirate as PirateModel } from '../model/Pirate';
import { Pirate as PirateComponent } from './Pirate';
import { Ship as ShipModel } from '../model/Ship';
import { Ship as ShipComponent } from './Ship';
import { Model } from '../model/Model';
import { PlayableCard } from './PlayableCard';
import { Coin as CoinModel } from '../model/Coin';
import { Coin as CoinComponent } from './Coin';

export type RendererProps = {
  model: Model;
};

export const Renderer = ({ model }: RendererProps) => {
  return match(model)
    .with(P.instanceOf(CardModel), (cardModel) => <PlayableCard cardModel={cardModel} />)
    .with(P.instanceOf(PirateModel), (pirateModel) => <PirateComponent pirateModel={pirateModel} />)
    .with(P.instanceOf(ShipModel), (shipModel) => <ShipComponent shipModel={shipModel} />)
    .with(P.instanceOf(CoinModel), (coinModel) => <CoinComponent coinModel={coinModel} />)
    .otherwise(() => <div>?</div>);
};
