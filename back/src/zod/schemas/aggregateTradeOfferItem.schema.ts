import { z } from 'zod';
import { TradeOfferItemOrderByWithRelationInputObjectSchema } from './objects/TradeOfferItemOrderByWithRelationInput.schema';
import { TradeOfferItemWhereInputObjectSchema } from './objects/TradeOfferItemWhereInput.schema';
import { TradeOfferItemWhereUniqueInputObjectSchema } from './objects/TradeOfferItemWhereUniqueInput.schema';
import { TradeOfferItemCountAggregateInputObjectSchema } from './objects/TradeOfferItemCountAggregateInput.schema';
import { TradeOfferItemMinAggregateInputObjectSchema } from './objects/TradeOfferItemMinAggregateInput.schema';
import { TradeOfferItemMaxAggregateInputObjectSchema } from './objects/TradeOfferItemMaxAggregateInput.schema';

export const TradeOfferItemAggregateSchema = z.object({
  orderBy: z
    .union([
      TradeOfferItemOrderByWithRelationInputObjectSchema,
      TradeOfferItemOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TradeOfferItemWhereInputObjectSchema.optional(),
  cursor: TradeOfferItemWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), TradeOfferItemCountAggregateInputObjectSchema])
    .optional(),
  _min: TradeOfferItemMinAggregateInputObjectSchema.optional(),
  _max: TradeOfferItemMaxAggregateInputObjectSchema.optional(),
});
