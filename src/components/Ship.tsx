import { Card } from './Card';
import { Ship as ShipModel } from '../model/Ship';

export type ShipProps = {
  shipModel: ShipModel;
};

export const Ship = ({ shipModel }: ShipProps) => {
  return <Card src={`/assets/ship/ship_${shipModel.color}.png`} tooltip="Loď" isFlipped />;
};
