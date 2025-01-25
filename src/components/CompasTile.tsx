import { Compas as CompasModel } from '../model/cards/compas/Compas';
import { Tile } from './Tile';

export type CompasTileProps = {
  compasModel: CompasModel;
};

export const CompasTile = ({ compasModel }: CompasTileProps) => {
  return (
    <Tile tooltip={compasModel.tooltip}>
      <div style={{ rotate: `${compasModel.rotation}deg` }}>
        <img src="assets/compas/compas_all.png" alt="Compas" />
      </div>
    </Tile>
  );
};
