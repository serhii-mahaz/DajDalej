import { z } from 'zod';
import { TradeOfferItemWhereUniqueInputObjectSchema } from './objects/TradeOfferItemWhereUniqueInput.schema';

export const TradeOfferItemDeleteOneSchema = z.object({
  where: TradeOfferItemWhereUniqueInputObjectSchema,
});
