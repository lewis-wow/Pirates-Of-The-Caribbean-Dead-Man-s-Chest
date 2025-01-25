import { Pirate as PirateModel } from '../model/Pirate';

export type PirateRendererProps = {
  pirateModel: PirateModel;
};

export const PirateRenderer = ({ pirateModel }: PirateRendererProps) => {
  return <div>{JSON.stringify(pirateModel)}</div>;
};
