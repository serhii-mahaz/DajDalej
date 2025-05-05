import { z } from 'zod';
import { ItemUncheckedCreateNestedManyWithoutOwnerInputObjectSchema } from './ItemUncheckedCreateNestedManyWithoutOwnerInput.schema';
import { TradeOfferUncheckedCreateNestedManyWithoutOwnerInputObjectSchema } from './TradeOfferUncheckedCreateNestedManyWithoutOwnerInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutProposalsInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    name: z.string().optional().nullable(),
    image: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    items: z
      .lazy(() => ItemUncheckedCreateNestedManyWithoutOwnerInputObjectSchema)
      .optional(),
    tradeOffers: z
      .lazy(
        () => TradeOfferUncheckedCreateNestedManyWithoutOwnerInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutProposalsInputObjectSchema = Schema;
