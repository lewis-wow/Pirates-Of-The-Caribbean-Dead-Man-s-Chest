import { JackSparrowCard as JackSparrowCardModel } from '../model/cards/JackSparrowCard';
import { Tile } from './Tile';

export type JackSparrowCardTileProps = {
  jackSparrowCardModel: JackSparrowCardModel;
};

export const JackSparrowCardTile = ({ jackSparrowCardModel }: JackSparrowCardTileProps) => {
  return (
    <Tile tooltip={jackSparrowCardModel.tooltip}>
      <img src={jackSparrowCardModel.image} alt="Jack Sparrow Card" />
    </Tile>
  );
};
