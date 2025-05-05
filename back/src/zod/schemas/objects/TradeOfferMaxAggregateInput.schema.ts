import { z } from 'zod';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    ownerId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
  })
  .strict();

export const TradeOfferMaxAggregateInputObjectSchema = Schema;
