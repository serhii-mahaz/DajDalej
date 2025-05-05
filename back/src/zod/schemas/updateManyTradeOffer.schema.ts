import { z } from 'zod';
import { TradeOfferUpdateManyMutationInputObjectSchema } from './objects/TradeOfferUpdateManyMutationInput.schema';
import { TradeOfferWhereInputObjectSchema } from './objects/TradeOfferWhereInput.schema';

export const TradeOfferUpdateManySchema = z.object({
  data: TradeOfferUpdateManyMutationInputObjectSchema,
  where: TradeOfferWhereInputObjectSchema.optional(),
});
