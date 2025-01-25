import { Coin } from '../model/Coin';

export type CoinsTileProps = {
  coins: Coin[];
};

export const CoinsTile = ({ coins }: CoinsTileProps) => {
  return (
    <div className="absolute h-full w-full top-0 left-0">
      {coins.map((_coin, index) => (
        <div
          key={`coin-${index}`}
          style={{ top: `${index * 5}px`, left: `${index * 5}px` }}
          className="w-[40%] h-[40%] border-1 border-amber-300 absolute z-2 rounded-full overflow-hidden"
        >
          <img src="/assets/coin/coin_front.png" key={index} alt="Coin" />
        </div>
      ))}
    </div>
  );
};
