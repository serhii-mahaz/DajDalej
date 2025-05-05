import { z } from 'zod';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferCreateManyOwnerInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.coerce.date().optional(),
  })
  .strict();

export const TradeOfferCreateManyOwnerInputObjectSchema = Schema;
