import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    tradeOfferId: z.lazy(() => SortOrderSchema).optional(),
    itemId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const TradeOfferItemMaxOrderByAggregateInputObjectSchema = Schema;
