import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProposalItemCountOrderByAggregateInputObjectSchema } from './ProposalItemCountOrderByAggregateInput.schema';
import { ProposalItemMaxOrderByAggregateInputObjectSchema } from './ProposalItemMaxOrderByAggregateInput.schema';
import { ProposalItemMinOrderByAggregateInputObjectSchema } from './ProposalItemMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    offerProposalId: z.lazy(() => SortOrderSchema).optional(),
    itemId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ProposalItemCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ProposalItemMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ProposalItemMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProposalItemOrderByWithAggregationInputObjectSchema = Schema;
