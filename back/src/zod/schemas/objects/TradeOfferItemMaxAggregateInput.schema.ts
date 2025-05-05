import { z } from 'zod';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    tradeOfferId: z.literal(true).optional(),
    itemId: z.literal(true).optional(),
  })
  .strict();

export const TradeOfferItemMaxAggregateInputObjectSchema = Schema;
