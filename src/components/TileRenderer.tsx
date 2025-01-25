import { match, P } from 'ts-pattern';
import { Card as CardModel } from '../model/cards/Card';
import { Pirate as PirateModel } from '../model/Pirate';
import { Ship as ShipModel } from '../model/Ship';
import { Ship as ShipComponent } from './Ship';
import { Model } from '../model/Model';
import { PlayableTile } from './PlayableTile';
import { CoinsRenderer } from './CoinsRenderer';
import { CoinRenderer } from './CoinRenderer';
import { Coin as CoinModel } from '../model/Coin';
import { PiratesRenderer } from './PiratesRenderer';
import { EmptySpace } from '../model/EmptySpace';
import { Compas as CompasModel } from '../model/cards/compas/Compas';
import { CompasTile } from './CompasTile';

export type TileRendererProps = {
  model: Model | Model[];
};

export const TileRenderer = ({ model }: TileRendererProps) => {
  return (
    <div className="w-full h-full">
      {match(model)
        .with(P.instanceOf(EmptySpace), () => <div />)
        .with(P.instanceOf(CompasModel), (compasModel) => <CompasTile compasModel={compasModel} />)
        .with(P.instanceOf(ShipModel), (shipModel) => <ShipComponent shipModel={shipModel} />)
        .with(P.array(P.instanceOf(PirateModel)), (pirates) => <PiratesRenderer pirates={pirates} />)
        .with(P.array(P.instanceOf(CoinModel)), (coins) => <CoinsRenderer coins={coins} />)
        .with(P.instanceOf(CoinModel), () => <CoinRenderer />)
        .with(P.instanceOf(CardModel), (cardModel) => <PlayableTile cardModel={cardModel} />)
        .otherwise(() => (
          <div>?</div>
        ))}
    </div>
  );
};
