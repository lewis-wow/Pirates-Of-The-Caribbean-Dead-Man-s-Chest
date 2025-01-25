import { Ship as ShipModel } from '../model/Ship';
import { Tile } from './Tile';

export type ShipProps = {
  shipModel: ShipModel;
};

export const Ship = ({ shipModel }: ShipProps) => {
  return (
    <Tile tooltip="Loď">
      <img src={`/assets/ship/ship_${shipModel.shipColor.toLowerCase()}.png`} alt="Ship" />
    </Tile>
  );
};
