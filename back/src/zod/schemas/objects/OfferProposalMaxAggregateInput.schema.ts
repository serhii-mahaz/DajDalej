import { z } from 'zod';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    tradeOfferId: z.literal(true).optional(),
    proposerId: z.literal(true).optional(),
    status: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
  })
  .strict();

export const OfferProposalMaxAggregateInputObjectSchema = Schema;
