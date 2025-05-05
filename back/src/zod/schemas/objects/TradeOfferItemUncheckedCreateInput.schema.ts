import { z } from 'zod';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    tradeOfferId: z.string(),
    itemId: z.string(),
  })
  .strict();

export const TradeOfferItemUncheckedCreateInputObjectSchema = Schema;
