import { TwoCoinsCard as TwoCoinsCardModel } from '../../model/cards/TwoCoinsCard';
import { TileRenderer } from '../TileRenderer';

export type TwoCoinsCardRendererProps = {
  twoCoinsCardModel: TwoCoinsCardModel;
};

export const TwoCoinsCardRenderer = ({ twoCoinsCardModel }: TwoCoinsCardRendererProps) => {
  return (
    <div>
      <img src="/assets/coin/two_coins.png" alt="Two coins card" />
      <TileRenderer model={twoCoinsCardModel.getCoins()} />
      <TileRenderer model={twoCoinsCardModel.getPirates()} />
    </div>
  );
};
