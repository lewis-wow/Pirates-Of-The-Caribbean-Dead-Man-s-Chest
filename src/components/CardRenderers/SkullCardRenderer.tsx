import { SkullCard as SkullCardModel } from '../../model/cards/SkullCard';

export type SkullCardRendererProps = {
  skullCardModel: SkullCardModel;
};

export const SkullCardRenderer = ({ skullCardModel }: SkullCardRendererProps) => {
  return <img src="/assets/card/skull.png" alt="Skull Card" />;
};
