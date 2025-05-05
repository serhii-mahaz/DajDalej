import { z } from 'zod';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    offerProposalId: z.literal(true).optional(),
    itemId: z.literal(true).optional(),
  })
  .strict();

export const ProposalItemMinAggregateInputObjectSchema = Schema;
