import { Pirate as PirateModel } from '../model/Pirate';

export type PirateProps = {
  pirateModel: PirateModel;
};

export const Pirate = ({ pirateModel }: PirateProps) => {
  return <div>{JSON.stringify(pirateModel)}</div>;
};
