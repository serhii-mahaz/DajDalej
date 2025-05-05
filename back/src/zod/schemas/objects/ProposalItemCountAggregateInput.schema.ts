import { z } from 'zod';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    offerProposalId: z.literal(true).optional(),
    itemId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ProposalItemCountAggregateInputObjectSchema = Schema;
