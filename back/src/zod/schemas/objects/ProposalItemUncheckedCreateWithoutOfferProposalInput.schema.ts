import { z } from 'zod';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemUncheckedCreateWithoutOfferProposalInput> =
  z
    .object({
      id: z.string().optional(),
      itemId: z.string(),
    })
    .strict();

export const ProposalItemUncheckedCreateWithoutOfferProposalInputObjectSchema =
  Schema;
