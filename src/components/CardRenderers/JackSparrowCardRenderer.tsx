import { JackSparrowCard as JackSparrowCardModel } from '../../model/cards/JackSparrowCard';

export type JackSparrowCardRendererProps = {
  jackSparrowCardModel: JackSparrowCardModel;
};

export const JackSparrowCardRenderer = ({ jackSparrowCardModel }: JackSparrowCardRendererProps) => {
  return <img src="/assets/card/jack_sparrow.png" alt="Jack Sparrow Card" />;
};
