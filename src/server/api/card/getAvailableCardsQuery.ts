import { publicProcedure } from '@/server/trpc';
import { AvailableCardsEnum, availableCardsEnumSchema } from '@/validations';
import { z } from 'zod';

export const getAvailableCardsQuery = publicProcedure.output(z.array(availableCardsEnumSchema)).query(() => {
  return Object.keys(AvailableCardsEnum) as AvailableCardsEnum[];
});
