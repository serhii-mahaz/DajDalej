import { z } from 'zod';
import { TradeOfferWhereInputObjectSchema } from './objects/TradeOfferWhereInput.schema';
import { TradeOfferOrderByWithAggregationInputObjectSchema } from './objects/TradeOfferOrderByWithAggregationInput.schema';
import { TradeOfferScalarWhereWithAggregatesInputObjectSchema } from './objects/TradeOfferScalarWhereWithAggregatesInput.schema';
import { TradeOfferScalarFieldEnumSchema } from './enums/TradeOfferScalarFieldEnum.schema';

export const TradeOfferGroupBySchema = z.object({
  where: TradeOfferWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TradeOfferOrderByWithAggregationInputObjectSchema,
      TradeOfferOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: TradeOfferScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TradeOfferScalarFieldEnumSchema),
});
