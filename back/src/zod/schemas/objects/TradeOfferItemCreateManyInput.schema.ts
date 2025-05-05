import { z } from 'zod';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemCreateManyInput> = z
  .object({
    id: z.string().optional(),
    tradeOfferId: z.string(),
    itemId: z.string(),
  })
  .strict();

export const TradeOfferItemCreateManyInputObjectSchema = Schema;
