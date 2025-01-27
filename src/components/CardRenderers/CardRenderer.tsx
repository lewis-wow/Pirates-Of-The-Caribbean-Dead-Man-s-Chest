import { match, P } from 'ts-pattern';
import { Card as CardModel } from '../../server/model/cards/Card';
import { JackSparrowCard as JackSparrowCardModel } from '../../server/model/cards/JackSparrowCard';
import { JackSparrowCardRenderer } from './JackSparrowCardRenderer';
import { UnknownRenderer } from '../UnknownRenderer';
import { TwoCoinsCard } from '../../server/model/cards/TwoCoinsCard';
import { TwoCoinsCardRenderer } from './TwoCoinsCardRenderer';
import { SixCoinsCardRenderer } from './SixCoinsCardRenderer';
import { ThreeCoinsCardRenderer } from './ThreeCoinsCardRenderer';
import { ThreeCoinsCard } from '../../server/model/cards/ThreeCoinsCard';
import { SixCoinsCard } from '../../server/model/cards/SixCoinsCard';
import { AnchorCard } from '../../server/model/cards/AnchorCard';
import { AnchorCardRenderer } from './AnchorCardRenderer';
import { SkullCard } from '../../server/model/cards/SkullCard';
import { SkullCardRenderer } from './SkullCardRenderer';
import { BlackPearlCard } from '../../server/model/cards/BlackPearlCard';
import { BlackPearlCardRenderer } from './BlackPearlCardRenderer';
import { DaggerCard } from '../../server/model/cards/DaggerCard';
import { DaggerCardRenderer } from './DaggerCardRenderer';

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
        .with(P.instanceOf(AnchorCard), (anchorCardModel) => <AnchorCardRenderer anchorCardModel={anchorCardModel} />)
        .with(P.instanceOf(SkullCard), (skullCardModel) => <SkullCardRenderer skullCardModel={skullCardModel} />)
        .with(P.instanceOf(BlackPearlCard), (blackPearlCardModel) => (
          <BlackPearlCardRenderer blackPearlCardModel={blackPearlCardModel} />
        ))
        .with(P.instanceOf(DaggerCard), (daggerCardModel) => <DaggerCardRenderer daggerCardModel={daggerCardModel} />)
        .otherwise(() => (
          <UnknownRenderer />
        ))}
    </div>
  );
};
