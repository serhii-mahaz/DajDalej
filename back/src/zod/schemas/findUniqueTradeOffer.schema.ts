import { z } from 'zod';
import { TradeOfferWhereUniqueInputObjectSchema } from './objects/TradeOfferWhereUniqueInput.schema';

export const TradeOfferFindUniqueSchema = z.object({
  where: TradeOfferWhereUniqueInputObjectSchema,
});
