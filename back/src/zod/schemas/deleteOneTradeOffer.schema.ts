import { z } from 'zod';
import { TradeOfferWhereUniqueInputObjectSchema } from './objects/TradeOfferWhereUniqueInput.schema';

export const TradeOfferDeleteOneSchema = z.object({
  where: TradeOfferWhereUniqueInputObjectSchema,
});
