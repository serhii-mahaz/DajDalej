import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OfferProposalOrderByWithRelationInputObjectSchema } from './OfferProposalOrderByWithRelationInput.schema';
import { ItemOrderByWithRelationInputObjectSchema } from './ItemOrderByWithRelationInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    offerProposalId: z.lazy(() => SortOrderSchema).optional(),
    itemId: z.lazy(() => SortOrderSchema).optional(),
    offerProposal: z
      .lazy(() => OfferProposalOrderByWithRelationInputObjectSchema)
      .optional(),
    item: z.lazy(() => ItemOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const ProposalItemOrderByWithRelationInputObjectSchema = Schema;
