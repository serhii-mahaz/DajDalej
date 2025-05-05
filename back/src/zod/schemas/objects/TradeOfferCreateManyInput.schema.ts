import { z } from 'zod';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferCreateManyInput> = z
  .object({
    id: z.string().optional(),
    ownerId: z.string(),
    createdAt: z.coerce.date().optional(),
  })
  .strict();

export const TradeOfferCreateManyInputObjectSchema = Schema;
