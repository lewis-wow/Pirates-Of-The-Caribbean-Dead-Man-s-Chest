import { match, P } from 'ts-pattern';
import { Card } from '../../model/cards/Card';
import { JackSparrowCard as JackSparrowCardModel } from '../../model/cards/JackSparrowCard';
import { JackSparrowCardRenderer } from './JackSparrowCardRenderer';

export type CardRendererProps = {
  card: Card;
};

export const CardRenderer = ({ card }: CardRendererProps) => {
  return (
    <div className="w-full h-full">
      {match(card)
        .with(P.instanceOf(JackSparrowCardModel), (jackSparrowCardModel) => (
          <JackSparrowCardRenderer jackSparrowCardModel={jackSparrowCardModel} />
        ))
        .otherwise(() => (
          <div>?</div>
        ))}
    </div>
  );
};
