import { match, P } from 'ts-pattern';
import { Pirate as PirateModel } from '../model/Pirate';
import { ShipColor } from '../model/Ship';

export type PiratesRendererProps = {
  pirates: PirateModel[];
};

export const PiratesRenderer = ({ pirates }: PiratesRendererProps) => {
  return match(pirates)
    .with(
      P.when((pirates) => pirates.length === 0),
      () => null
    )
    .otherwise(() => (
      <div className="absolute h-full w-full top-0 left-0 z-3">
        <div
          className="border-1 border-amber-300 rounded-full w-[24px] h-[24px] flex justify-center items-center"
          style={{ backgroundColor: pirates[0]?.shipColor.toLowerCase() }}
        >
          <span style={{ color: pirates[0]?.shipColor === ShipColor.BLACK ? 'white' : 'black' }}>{pirates.length}</span>
        </div>
      </div>
    ));
};
