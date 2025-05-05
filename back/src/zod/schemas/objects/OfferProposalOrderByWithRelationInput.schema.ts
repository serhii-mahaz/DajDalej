import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TradeOfferOrderByWithRelationInputObjectSchema } from './TradeOfferOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ProposalItemOrderByRelationAggregateInputObjectSchema } from './ProposalItemOrderByRelationAggregateInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    tradeOfferId: z.lazy(() => SortOrderSchema).optional(),
    proposerId: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    tradeOffer: z
      .lazy(() => TradeOfferOrderByWithRelationInputObjectSchema)
      .optional(),
    proposer: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    items: z
      .lazy(() => ProposalItemOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const OfferProposalOrderByWithRelationInputObjectSchema = Schema;
