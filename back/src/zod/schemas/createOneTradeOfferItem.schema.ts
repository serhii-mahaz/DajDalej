import { z } from 'zod';
import { TradeOfferItemCreateInputObjectSchema } from './objects/TradeOfferItemCreateInput.schema';
import { TradeOfferItemUncheckedCreateInputObjectSchema } from './objects/TradeOfferItemUncheckedCreateInput.schema';

export const TradeOfferItemCreateOneSchema = z.object({
  data: z.union([
    TradeOfferItemCreateInputObjectSchema,
    TradeOfferItemUncheckedCreateInputObjectSchema,
  ]),
});
