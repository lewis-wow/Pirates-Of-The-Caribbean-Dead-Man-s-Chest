import { DaggerCard as DaggerCardModel } from '../../server/model/cards/DaggerCard';

export type DaggerCardRendererProps = {
  daggerCardModel: DaggerCardModel;
};

export const DaggerCardRenderer = ({ daggerCardModel }: DaggerCardRendererProps) => {
  return <img src="/assets/card/dagger.png" alt="Dagger Card" />;
};
