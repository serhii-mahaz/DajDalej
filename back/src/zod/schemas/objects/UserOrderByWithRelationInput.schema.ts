import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ItemOrderByRelationAggregateInputObjectSchema } from './ItemOrderByRelationAggregateInput.schema';
import { TradeOfferOrderByRelationAggregateInputObjectSchema } from './TradeOfferOrderByRelationAggregateInput.schema';
import { OfferProposalOrderByRelationAggregateInputObjectSchema } from './OfferProposalOrderByRelationAggregateInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    name: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    image: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    items: z
      .lazy(() => ItemOrderByRelationAggregateInputObjectSchema)
      .optional(),
    tradeOffers: z
      .lazy(() => TradeOfferOrderByRelationAggregateInputObjectSchema)
      .optional(),
    proposals: z
      .lazy(() => OfferProposalOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
