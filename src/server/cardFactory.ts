import { AvailableCardsEnum } from '@/validations';
import { match } from 'ts-pattern';
import { JackSparrowCard } from './model/cards/JackSparrowCard';
import { AnchorCard } from './model/cards/AnchorCard';
import { BlackPearlCard } from './model/cards/BlackPearlCard';
import { DaggerCard } from './model/cards/DaggerCard';
import { SixCoinsCard } from './model/cards/SixCoinsCard';
import { SkullCard } from './model/cards/SkullCard';
import { ThreeCoinsCard } from './model/cards/ThreeCoinsCard';
import { TwoCoinsCard } from './model/cards/TwoCoinsCard';
import { Card } from './model/cards/Card';

export const cardFactory = (card: AvailableCardsEnum): Card => {
  return match(card)
    .with(AvailableCardsEnum.JackSparrowCard, () => new JackSparrowCard())
    .with(AvailableCardsEnum.AnchorCard, () => new AnchorCard())
    .with(AvailableCardsEnum.BlackPearlCard, () => new BlackPearlCard())
    .with(AvailableCardsEnum.DaggerCard, () => new DaggerCard())
    .with(AvailableCardsEnum.SixCoinsCard, () => new SixCoinsCard())
    .with(AvailableCardsEnum.SkullCard, () => new SkullCard())
    .with(AvailableCardsEnum.ThreeCoinsCard, () => new ThreeCoinsCard())
    .with(AvailableCardsEnum.TwoCoinsCard, () => new TwoCoinsCard())
    .exhaustive();
};
