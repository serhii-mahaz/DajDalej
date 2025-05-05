import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { TradeOfferItemOrderByWithRelationInputObjectSchema } from './TradeOfferItemOrderByWithRelationInput.schema';
import { ProposalItemOrderByWithRelationInputObjectSchema } from './ProposalItemOrderByWithRelationInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ItemOrderByWithRelationInput> = z
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
    owner: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    tradeOfferItem: z
      .lazy(() => TradeOfferItemOrderByWithRelationInputObjectSchema)
      .optional(),
    proposalItem: z
      .lazy(() => ProposalItemOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const ItemOrderByWithRelationInputObjectSchema = Schema;
