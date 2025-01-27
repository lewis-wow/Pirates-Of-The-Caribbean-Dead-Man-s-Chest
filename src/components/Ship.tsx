'use client';

import { Ship as ShipModel } from '../server/model/tiles/Ship';
import { Tile } from './Tile';
import { TileRenderer } from './TileRenderer';

export type ShipProps = {
  shipModel: ShipModel;
};

export const Ship = ({ shipModel }: ShipProps) => {
  return (
    <Tile tooltip="Loď">
      <img src={`/assets/ship/ship_${shipModel.shipColor.toLowerCase()}.png`} alt="Ship" />
      <TileRenderer model={shipModel.getPirates()} />
      <TileRenderer model={shipModel.getCoins()} />
    </Tile>
  );
};
