import { z } from 'zod';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalUncheckedCreateWithoutItemsInput> =
  z
    .object({
      id: z.string().optional(),
      tradeOfferId: z.string(),
      proposerId: z.string(),
      status: z.string().optional(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export const OfferProposalUncheckedCreateWithoutItemsInputObjectSchema = Schema;
