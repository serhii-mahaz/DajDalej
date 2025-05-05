import { z } from 'zod';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalCreateManyProposerInput> = z
  .object({
    id: z.string().optional(),
    tradeOfferId: z.string(),
    status: z.string().optional(),
    createdAt: z.coerce.date().optional(),
  })
  .strict();

export const OfferProposalCreateManyProposerInputObjectSchema = Schema;
