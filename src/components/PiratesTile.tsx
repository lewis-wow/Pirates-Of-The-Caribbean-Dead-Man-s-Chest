import { Pirate as PirateModel } from '../model/Pirate';
import { Tile } from './Tile';
import { TileRenderer } from './TileRenderer';

export type PiratesTileProps = {
  pirates: PirateModel[];
};

export const PiratesTile = ({ pirates }: PiratesTileProps) => {
  return (
    <div className="absolute w-1/2 h-1/2 top-0 left-0">
      <Tile>
        {pirates.map((pirate, index) => (
          <div style={{ top: `${index * 10}px`, right: `${index * 10}px` }} className="absolute z-2">
            <TileRenderer model={pirate} />
          </div>
        ))}
      </Tile>
    </div>
  );
};
