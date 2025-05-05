import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OfferProposalCountOrderByAggregateInputObjectSchema } from './OfferProposalCountOrderByAggregateInput.schema';
import { OfferProposalMaxOrderByAggregateInputObjectSchema } from './OfferProposalMaxOrderByAggregateInput.schema';
import { OfferProposalMinOrderByAggregateInputObjectSchema } from './OfferProposalMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    tradeOfferId: z.lazy(() => SortOrderSchema).optional(),
    proposerId: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => OfferProposalCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => OfferProposalMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => OfferProposalMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const OfferProposalOrderByWithAggregationInputObjectSchema = Schema;
