import { AnchorCard as AnchorCardModel } from '../../server/model/cards/AnchorCard';

export type AnchorCardRendererProps = {
  anchorCardModel: AnchorCardModel;
};

export const AnchorCardRenderer = ({ anchorCardModel }: AnchorCardRendererProps) => {
  return <img src="/assets/card/anchor.png" alt="Anchor Card" />;
};
