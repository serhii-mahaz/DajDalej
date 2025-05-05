import { z } from 'zod';
import { TradeOfferCreateInputObjectSchema } from './objects/TradeOfferCreateInput.schema';
import { TradeOfferUncheckedCreateInputObjectSchema } from './objects/TradeOfferUncheckedCreateInput.schema';

export const TradeOfferCreateOneSchema = z.object({
  data: z.union([
    TradeOfferCreateInputObjectSchema,
    TradeOfferUncheckedCreateInputObjectSchema,
  ]),
});
