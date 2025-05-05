import { z } from 'zod';
import { TradeOfferUpdateInputObjectSchema } from './objects/TradeOfferUpdateInput.schema';
import { TradeOfferUncheckedUpdateInputObjectSchema } from './objects/TradeOfferUncheckedUpdateInput.schema';
import { TradeOfferWhereUniqueInputObjectSchema } from './objects/TradeOfferWhereUniqueInput.schema';

export const TradeOfferUpdateOneSchema = z.object({
  data: z.union([
    TradeOfferUpdateInputObjectSchema,
    TradeOfferUncheckedUpdateInputObjectSchema,
  ]),
  where: TradeOfferWhereUniqueInputObjectSchema,
});
