import { z } from 'zod';
import { TradeOfferItemCreateManyInputObjectSchema } from './objects/TradeOfferItemCreateManyInput.schema';

export const TradeOfferItemCreateManySchema = z.object({
  data: z.union([
    TradeOfferItemCreateManyInputObjectSchema,
    z.array(TradeOfferItemCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
