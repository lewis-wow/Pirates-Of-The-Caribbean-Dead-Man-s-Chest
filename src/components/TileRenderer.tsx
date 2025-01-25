import { match, P } from 'ts-pattern';
import { Card as CardModel } from '../model/cards/Card';
import { Pirate as PirateModel } from '../model/Pirate';
import { PirateRenderer } from './PirateRenderer';
import { Ship as ShipModel } from '../model/Ship';
import { Ship as ShipComponent } from './Ship';
import { Model } from '../model/Model';
import { PlayableTile } from './PlayableTile';
import { CoinsTile } from './CoinsTile';
import { CoinRenderer } from './CoinRenderer';
import { Coin as CoinModel } from '../model/Coin';
import { PiratesTile } from './PiratesTile';
import { EmptySpace } from '../model/EmptySpace';

export type TileRendererProps = {
  model: Model | Model[];
};

export const TileRenderer = ({ model }: TileRendererProps) => {
  return (
    <div className="w-full h-full">
      {match(model)
        .with(P.instanceOf(EmptySpace), () => <div />)
        .with(P.instanceOf(CardModel), (cardModel) => <PlayableTile cardModel={cardModel} />)
        .with(P.instanceOf(ShipModel), (shipModel) => <ShipComponent shipModel={shipModel} />)
        .with(P.array(P.instanceOf(PirateModel)), (pirates) => <PiratesTile pirates={pirates} />)
        .with(P.instanceOf(PirateModel), (pirateModel) => <PirateRenderer pirateModel={pirateModel} />)
        .with(P.array(P.instanceOf(CoinModel)), (coins) => <CoinsTile coins={coins} />)
        .with(P.instanceOf(CoinModel), () => <CoinRenderer />)
        .otherwise(() => (
          <div>?</div>
        ))}
    </div>
  );
};
