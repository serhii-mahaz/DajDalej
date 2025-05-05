import { z } from 'zod';
import { TradeOfferItemWhereInputObjectSchema } from './objects/TradeOfferItemWhereInput.schema';

export const TradeOfferItemDeleteManySchema = z.object({
  where: TradeOfferItemWhereInputObjectSchema.optional(),
});
