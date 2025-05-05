import { z } from 'zod';
import { ProposalItemUncheckedCreateNestedManyWithoutOfferProposalInputObjectSchema } from './ProposalItemUncheckedCreateNestedManyWithoutOfferProposalInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalUncheckedCreateWithoutProposerInput> =
  z
    .object({
      id: z.string().optional(),
      tradeOfferId: z.string(),
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

export const OfferProposalUncheckedCreateWithoutProposerInputObjectSchema =
  Schema;
