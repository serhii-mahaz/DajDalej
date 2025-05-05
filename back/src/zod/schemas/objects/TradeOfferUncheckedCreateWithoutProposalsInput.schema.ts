import { z } from 'zod';
import { TradeOfferItemUncheckedCreateNestedManyWithoutTradeOfferInputObjectSchema } from './TradeOfferItemUncheckedCreateNestedManyWithoutTradeOfferInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferUncheckedCreateWithoutProposalsInput> =
  z
    .object({
      id: z.string().optional(),
      ownerId: z.string(),
      createdAt: z.coerce.date().optional(),
      items: z
        .lazy(
          () =>
            TradeOfferItemUncheckedCreateNestedManyWithoutTradeOfferInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const TradeOfferUncheckedCreateWithoutProposalsInputObjectSchema =
  Schema;
