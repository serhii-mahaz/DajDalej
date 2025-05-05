import { z } from 'zod';
import { ProposalItemUncheckedCreateNestedManyWithoutOfferProposalInputObjectSchema } from './ProposalItemUncheckedCreateNestedManyWithoutOfferProposalInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    tradeOfferId: z.string(),
    proposerId: z.string(),
    status: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    items: z
      .lazy(
        () =>
          ProposalItemUncheckedCreateNestedManyWithoutOfferProposalInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const OfferProposalUncheckedCreateInputObjectSchema = Schema;
