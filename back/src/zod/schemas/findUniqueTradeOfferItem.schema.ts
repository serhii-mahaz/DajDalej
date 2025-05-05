import { z } from 'zod';
import { TradeOfferItemWhereUniqueInputObjectSchema } from './objects/TradeOfferItemWhereUniqueInput.schema';

export const TradeOfferItemFindUniqueSchema = z.object({
  where: TradeOfferItemWhereUniqueInputObjectSchema,
});
