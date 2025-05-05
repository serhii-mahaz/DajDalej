import { z } from 'zod';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalCreateManyTradeOfferInput> = z
  .object({
    id: z.string().optional(),
    proposerId: z.string(),
    status: z.string().optional(),
    createdAt: z.coerce.date().optional(),
  })
  .strict();

export const OfferProposalCreateManyTradeOfferInputObjectSchema = Schema;
