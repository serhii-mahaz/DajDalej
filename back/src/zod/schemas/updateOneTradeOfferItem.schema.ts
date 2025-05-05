import { z } from 'zod';
import { TradeOfferItemUpdateInputObjectSchema } from './objects/TradeOfferItemUpdateInput.schema';
import { TradeOfferItemUncheckedUpdateInputObjectSchema } from './objects/TradeOfferItemUncheckedUpdateInput.schema';
import { TradeOfferItemWhereUniqueInputObjectSchema } from './objects/TradeOfferItemWhereUniqueInput.schema';

export const TradeOfferItemUpdateOneSchema = z.object({
  data: z.union([
    TradeOfferItemUpdateInputObjectSchema,
    TradeOfferItemUncheckedUpdateInputObjectSchema,
  ]),
  where: TradeOfferItemWhereUniqueInputObjectSchema,
});
