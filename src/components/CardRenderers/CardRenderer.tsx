import { match, P } from 'ts-pattern';
import { Card as CardModel } from '../../model/cards/Card';
import { JackSparrowCard as JackSparrowCardModel } from '../../model/cards/JackSparrowCard';
import { JackSparrowCardRenderer } from './JackSparrowCardRenderer';
import { UnknownRenderer } from '../UnknownRenderer';
import { TwoCoinsCard } from '../../model/cards/TwoCoinsCard';
import { TwoCoinsCardRenderer } from './TwoCoinsCardRenderer';
import { SixCoinsCardRenderer } from './SixCoinsCardRenderer';
import { ThreeCoinsCardRenderer } from './ThreeCoinsCardRenderer';
import { ThreeCoinsCard } from '../../model/cards/ThreeCoinsCard';
import { SixCoinsCard } from '../../model/cards/SixCoinsCard';

export type CardRendererProps = {
  cardModel: CardModel;
};

export const CardRenderer = ({ cardModel }: CardRendererProps) => {
  return (
    <div className="w-full h-full">
      {match(cardModel)
        .with(P.instanceOf(JackSparrowCardModel), (jackSparrowCardModel) => (
          <JackSparrowCardRenderer jackSparrowCardModel={jackSparrowCardModel} />
        ))
        .with(P.instanceOf(TwoCoinsCard), (twoCoinsCardModel) => (
          <TwoCoinsCardRenderer twoCoinsCardModel={twoCoinsCardModel} />
        ))
        .with(P.instanceOf(ThreeCoinsCard), (threeCoinsCardModel) => (
          <ThreeCoinsCardRenderer threeCoinsCardModel={threeCoinsCardModel} />
        ))
        .with(P.instanceOf(SixCoinsCard), (sixCoinsCardModel) => (
          <SixCoinsCardRenderer sixCoinsCardModel={sixCoinsCardModel} />
        ))
        .otherwise(() => (
          <UnknownRenderer />
        ))}
    </div>
  );
};
