import { SixCoinsCard as SixCoinsCardModel } from '../../server/model/cards/SixCoinsCard';
import { TileRenderer } from '../TileRenderer';

export type SixCoinsCardRendererProps = {
  sixCoinsCardModel: SixCoinsCardModel;
};

export const SixCoinsCardRenderer = ({ sixCoinsCardModel }: SixCoinsCardRendererProps) => {
  return (
    <div>
      <img src="/assets/coin/six_coins.png" alt="Six coins card" />
      <TileRenderer model={sixCoinsCardModel.getCoins()} />
      <TileRenderer model={sixCoinsCardModel.getPirates()} />
    </div>
  );
};
