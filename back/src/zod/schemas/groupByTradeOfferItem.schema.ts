import { z } from 'zod';
import { TradeOfferItemWhereInputObjectSchema } from './objects/TradeOfferItemWhereInput.schema';
import { TradeOfferItemOrderByWithAggregationInputObjectSchema } from './objects/TradeOfferItemOrderByWithAggregationInput.schema';
import { TradeOfferItemScalarWhereWithAggregatesInputObjectSchema } from './objects/TradeOfferItemScalarWhereWithAggregatesInput.schema';
import { TradeOfferItemScalarFieldEnumSchema } from './enums/TradeOfferItemScalarFieldEnum.schema';

export const TradeOfferItemGroupBySchema = z.object({
  where: TradeOfferItemWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TradeOfferItemOrderByWithAggregationInputObjectSchema,
      TradeOfferItemOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: TradeOfferItemScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TradeOfferItemScalarFieldEnumSchema),
});
