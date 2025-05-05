import { z } from 'zod';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemCreateManyTradeOfferInput> = z
  .object({
    id: z.string().optional(),
    itemId: z.string(),
  })
  .strict();

export const TradeOfferItemCreateManyTradeOfferInputObjectSchema = Schema;
