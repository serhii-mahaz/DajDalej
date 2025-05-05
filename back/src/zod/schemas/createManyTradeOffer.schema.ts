import { z } from 'zod';
import { TradeOfferCreateManyInputObjectSchema } from './objects/TradeOfferCreateManyInput.schema';

export const TradeOfferCreateManySchema = z.object({
  data: z.union([
    TradeOfferCreateManyInputObjectSchema,
    z.array(TradeOfferCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
