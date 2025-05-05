import { z } from 'zod';
import { ItemUncheckedCreateNestedManyWithoutOwnerInputObjectSchema } from './ItemUncheckedCreateNestedManyWithoutOwnerInput.schema';
import { OfferProposalUncheckedCreateNestedManyWithoutProposerInputObjectSchema } from './OfferProposalUncheckedCreateNestedManyWithoutProposerInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutTradeOffersInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    name: z.string().optional().nullable(),
    image: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    items: z
      .lazy(() => ItemUncheckedCreateNestedManyWithoutOwnerInputObjectSchema)
      .optional(),
    proposals: z
      .lazy(
        () =>
          OfferProposalUncheckedCreateNestedManyWithoutProposerInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutTradeOffersInputObjectSchema = Schema;
