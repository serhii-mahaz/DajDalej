import { z } from 'zod';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemUncheckedCreateWithoutItemInput> =
  z
    .object({
      id: z.string().optional(),
      tradeOfferId: z.string(),
    })
    .strict();

export const TradeOfferItemUncheckedCreateWithoutItemInputObjectSchema = Schema;
