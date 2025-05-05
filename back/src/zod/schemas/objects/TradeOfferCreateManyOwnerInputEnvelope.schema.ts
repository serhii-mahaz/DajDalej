import { z } from 'zod';
import { TradeOfferCreateManyOwnerInputObjectSchema } from './TradeOfferCreateManyOwnerInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferCreateManyOwnerInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => TradeOfferCreateManyOwnerInputObjectSchema),
      z.lazy(() => TradeOfferCreateManyOwnerInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TradeOfferCreateManyOwnerInputEnvelopeObjectSchema = Schema;
