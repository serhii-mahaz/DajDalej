import { z } from 'zod';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    tradeOfferId: z.literal(true).optional(),
    itemId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const TradeOfferItemCountAggregateInputObjectSchema = Schema;
