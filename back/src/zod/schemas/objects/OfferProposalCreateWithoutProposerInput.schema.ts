import { z } from 'zod';
import { TradeOfferCreateNestedOneWithoutProposalsInputObjectSchema } from './TradeOfferCreateNestedOneWithoutProposalsInput.schema';
import { ProposalItemCreateNestedManyWithoutOfferProposalInputObjectSchema } from './ProposalItemCreateNestedManyWithoutOfferProposalInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalCreateWithoutProposerInput> = z
  .object({
    id: z.string().optional(),
    status: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    tradeOffer: z.lazy(
      () => TradeOfferCreateNestedOneWithoutProposalsInputObjectSchema,
    ),
    items: z
      .lazy(
        () => ProposalItemCreateNestedManyWithoutOfferProposalInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const OfferProposalCreateWithoutProposerInputObjectSchema = Schema;
