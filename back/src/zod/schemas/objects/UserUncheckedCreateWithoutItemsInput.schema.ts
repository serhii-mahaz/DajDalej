import { z } from 'zod';
import { TradeOfferUncheckedCreateNestedManyWithoutOwnerInputObjectSchema } from './TradeOfferUncheckedCreateNestedManyWithoutOwnerInput.schema';
import { OfferProposalUncheckedCreateNestedManyWithoutProposerInputObjectSchema } from './OfferProposalUncheckedCreateNestedManyWithoutProposerInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutItemsInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    name: z.string().optional().nullable(),
    image: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    tradeOffers: z
      .lazy(
        () => TradeOfferUncheckedCreateNestedManyWithoutOwnerInputObjectSchema,
      )
      .optional(),
    proposals: z
      .lazy(
        () =>
          OfferProposalUncheckedCreateNestedManyWithoutProposerInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutItemsInputObjectSchema = Schema;
