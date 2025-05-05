import { z } from 'zod';
import { TradeOfferCreateNestedManyWithoutOwnerInputObjectSchema } from './TradeOfferCreateNestedManyWithoutOwnerInput.schema';
import { OfferProposalCreateNestedManyWithoutProposerInputObjectSchema } from './OfferProposalCreateNestedManyWithoutProposerInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.UserCreateWithoutItemsInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    name: z.string().optional().nullable(),
    image: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    tradeOffers: z
      .lazy(() => TradeOfferCreateNestedManyWithoutOwnerInputObjectSchema)
      .optional(),
    proposals: z
      .lazy(() => OfferProposalCreateNestedManyWithoutProposerInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateWithoutItemsInputObjectSchema = Schema;
