import { z } from 'zod';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    offerProposalId: z.string(),
    itemId: z.string(),
  })
  .strict();

export const ProposalItemUncheckedCreateInputObjectSchema = Schema;
