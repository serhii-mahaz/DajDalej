import { z } from 'zod';
import { TradeOfferCreateNestedOneWithoutProposalsInputObjectSchema } from './TradeOfferCreateNestedOneWithoutProposalsInput.schema';
import { UserCreateNestedOneWithoutProposalsInputObjectSchema } from './UserCreateNestedOneWithoutProposalsInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalCreateWithoutItemsInput> = z
  .object({
    id: z.string().optional(),
    status: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    tradeOffer: z.lazy(
      () => TradeOfferCreateNestedOneWithoutProposalsInputObjectSchema,
    ),
    proposer: z.lazy(
      () => UserCreateNestedOneWithoutProposalsInputObjectSchema,
    ),
  })
  .strict();

export const OfferProposalCreateWithoutItemsInputObjectSchema = Schema;
