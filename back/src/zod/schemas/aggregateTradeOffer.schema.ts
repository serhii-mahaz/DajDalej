import { z } from 'zod';
import { TradeOfferOrderByWithRelationInputObjectSchema } from './objects/TradeOfferOrderByWithRelationInput.schema';
import { TradeOfferWhereInputObjectSchema } from './objects/TradeOfferWhereInput.schema';
import { TradeOfferWhereUniqueInputObjectSchema } from './objects/TradeOfferWhereUniqueInput.schema';
import { TradeOfferCountAggregateInputObjectSchema } from './objects/TradeOfferCountAggregateInput.schema';
import { TradeOfferMinAggregateInputObjectSchema } from './objects/TradeOfferMinAggregateInput.schema';
import { TradeOfferMaxAggregateInputObjectSchema } from './objects/TradeOfferMaxAggregateInput.schema';

export const TradeOfferAggregateSchema = z.object({
  orderBy: z
    .union([
      TradeOfferOrderByWithRelationInputObjectSchema,
      TradeOfferOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TradeOfferWhereInputObjectSchema.optional(),
  cursor: TradeOfferWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), TradeOfferCountAggregateInputObjectSchema])
    .optional(),
  _min: TradeOfferMinAggregateInputObjectSchema.optional(),
  _max: TradeOfferMaxAggregateInputObjectSchema.optional(),
});
