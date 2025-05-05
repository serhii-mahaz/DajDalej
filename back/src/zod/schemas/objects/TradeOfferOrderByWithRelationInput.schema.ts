import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { TradeOfferItemOrderByRelationAggregateInputObjectSchema } from './TradeOfferItemOrderByRelationAggregateInput.schema';
import { OfferProposalOrderByRelationAggregateInputObjectSchema } from './OfferProposalOrderByRelationAggregateInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    ownerId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    owner: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    items: z
      .lazy(() => TradeOfferItemOrderByRelationAggregateInputObjectSchema)
      .optional(),
    proposals: z
      .lazy(() => OfferProposalOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TradeOfferOrderByWithRelationInputObjectSchema = Schema;
