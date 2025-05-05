import { z } from 'zod';
import { TradeOfferItemUpdateManyMutationInputObjectSchema } from './objects/TradeOfferItemUpdateManyMutationInput.schema';
import { TradeOfferItemWhereInputObjectSchema } from './objects/TradeOfferItemWhereInput.schema';

export const TradeOfferItemUpdateManySchema = z.object({
  data: TradeOfferItemUpdateManyMutationInputObjectSchema,
  where: TradeOfferItemWhereInputObjectSchema.optional(),
});
