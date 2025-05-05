import { z } from 'zod';
import { TradeOfferItemWhereUniqueInputObjectSchema } from './objects/TradeOfferItemWhereUniqueInput.schema';
import { TradeOfferItemCreateInputObjectSchema } from './objects/TradeOfferItemCreateInput.schema';
import { TradeOfferItemUncheckedCreateInputObjectSchema } from './objects/TradeOfferItemUncheckedCreateInput.schema';
import { TradeOfferItemUpdateInputObjectSchema } from './objects/TradeOfferItemUpdateInput.schema';
import { TradeOfferItemUncheckedUpdateInputObjectSchema } from './objects/TradeOfferItemUncheckedUpdateInput.schema';

export const TradeOfferItemUpsertSchema = z.object({
  where: TradeOfferItemWhereUniqueInputObjectSchema,
  create: z.union([
    TradeOfferItemCreateInputObjectSchema,
    TradeOfferItemUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TradeOfferItemUpdateInputObjectSchema,
    TradeOfferItemUncheckedUpdateInputObjectSchema,
  ]),
});
