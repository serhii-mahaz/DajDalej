import { z } from 'zod';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    offerProposalId: z.literal(true).optional(),
    itemId: z.literal(true).optional(),
  })
  .strict();

export const ProposalItemMaxAggregateInputObjectSchema = Schema;
