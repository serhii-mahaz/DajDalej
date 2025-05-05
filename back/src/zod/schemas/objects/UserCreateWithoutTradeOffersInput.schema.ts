import { z } from 'zod';
import { ItemCreateNestedManyWithoutOwnerInputObjectSchema } from './ItemCreateNestedManyWithoutOwnerInput.schema';
import { OfferProposalCreateNestedManyWithoutProposerInputObjectSchema } from './OfferProposalCreateNestedManyWithoutProposerInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.UserCreateWithoutTradeOffersInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    name: z.string().optional().nullable(),
    image: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    items: z
      .lazy(() => ItemCreateNestedManyWithoutOwnerInputObjectSchema)
      .optional(),
    proposals: z
      .lazy(() => OfferProposalCreateNestedManyWithoutProposerInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateWithoutTradeOffersInputObjectSchema = Schema;
