import { z } from 'zod';
import { TradeOfferWhereInputObjectSchema } from './objects/TradeOfferWhereInput.schema';

export const TradeOfferDeleteManySchema = z.object({
  where: TradeOfferWhereInputObjectSchema.optional(),
});
