import { z } from 'zod';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemUncheckedCreateWithoutItemInput> = z
  .object({
    id: z.string().optional(),
    offerProposalId: z.string(),
  })
  .strict();

export const ProposalItemUncheckedCreateWithoutItemInputObjectSchema = Schema;
