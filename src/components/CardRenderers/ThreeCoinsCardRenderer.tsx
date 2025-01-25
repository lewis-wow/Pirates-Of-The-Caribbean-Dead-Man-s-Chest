import { ThreeCoinsCard as ThreeCoinsCardModel } from '../../model/cards/ThreeCoinsCard';
import { TileRenderer } from '../TileRenderer';

export type ThreeCoinsCardRendererProps = {
  threeCoinsCardModel: ThreeCoinsCardModel;
};

export const ThreeCoinsCardRenderer = ({ threeCoinsCardModel }: ThreeCoinsCardRendererProps) => {
  return (
    <div>
      <img src="/assets/coin/three_coins.png" alt="Three coins card" />
      <TileRenderer model={threeCoinsCardModel.getCoins()} />
      <TileRenderer model={threeCoinsCardModel.getPirates()} />
    </div>
  );
};
