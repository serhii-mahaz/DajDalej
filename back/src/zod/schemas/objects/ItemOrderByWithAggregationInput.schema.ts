import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ItemCountOrderByAggregateInputObjectSchema } from './ItemCountOrderByAggregateInput.schema';
import { ItemMaxOrderByAggregateInputObjectSchema } from './ItemMaxOrderByAggregateInput.schema';
import { ItemMinOrderByAggregateInputObjectSchema } from './ItemMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ItemOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    imageUrl: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    ownerId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => ItemCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ItemMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ItemMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ItemOrderByWithAggregationInputObjectSchema = Schema;
