import { Coin as CoinModel } from '../model/Coin';

export type CoinProps = {
  coinModel: CoinModel;
};

export const Coin = ({ coinModel }: CoinProps) => {
  return <div>{JSON.stringify(coinModel)}</div>;
};
