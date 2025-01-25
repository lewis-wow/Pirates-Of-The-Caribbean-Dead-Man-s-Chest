import { BlackPearlCard as BlackPearlCardModel } from '../../model/cards/BlackPearlCard';

export type BlackPearlCardRendererProps = {
  blackPearlCardModel: BlackPearlCardModel;
};

export const BlackPearlCardRenderer = ({ blackPearlCardModel }: BlackPearlCardRendererProps) => {
  return <img src="/assets/card/black_pearl.png" alt="Black Pearl Card" />;
};
