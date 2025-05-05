import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TradeOfferCountOrderByAggregateInputObjectSchema } from './TradeOfferCountOrderByAggregateInput.schema';
import { TradeOfferMaxOrderByAggregateInputObjectSchema } from './TradeOfferMaxOrderByAggregateInput.schema';
import { TradeOfferMinOrderByAggregateInputObjectSchema } from './TradeOfferMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    ownerId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => TradeOfferCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => TradeOfferMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => TradeOfferMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TradeOfferOrderByWithAggregationInputObjectSchema = Schema;
