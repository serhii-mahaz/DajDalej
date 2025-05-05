import { z } from 'zod';
import { TradeOfferWhereUniqueInputObjectSchema } from './objects/TradeOfferWhereUniqueInput.schema';
import { TradeOfferCreateInputObjectSchema } from './objects/TradeOfferCreateInput.schema';
import { TradeOfferUncheckedCreateInputObjectSchema } from './objects/TradeOfferUncheckedCreateInput.schema';
import { TradeOfferUpdateInputObjectSchema } from './objects/TradeOfferUpdateInput.schema';
import { TradeOfferUncheckedUpdateInputObjectSchema } from './objects/TradeOfferUncheckedUpdateInput.schema';

export const TradeOfferUpsertSchema = z.object({
  where: TradeOfferWhereUniqueInputObjectSchema,
  create: z.union([
    TradeOfferCreateInputObjectSchema,
    TradeOfferUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TradeOfferUpdateInputObjectSchema,
    TradeOfferUncheckedUpdateInputObjectSchema,
  ]),
});
