import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TradeOfferItemCountOrderByAggregateInputObjectSchema } from './TradeOfferItemCountOrderByAggregateInput.schema';
import { TradeOfferItemMaxOrderByAggregateInputObjectSchema } from './TradeOfferItemMaxOrderByAggregateInput.schema';
import { TradeOfferItemMinOrderByAggregateInputObjectSchema } from './TradeOfferItemMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    tradeOfferId: z.lazy(() => SortOrderSchema).optional(),
    itemId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => TradeOfferItemCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => TradeOfferItemMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => TradeOfferItemMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TradeOfferItemOrderByWithAggregationInputObjectSchema = Schema;
