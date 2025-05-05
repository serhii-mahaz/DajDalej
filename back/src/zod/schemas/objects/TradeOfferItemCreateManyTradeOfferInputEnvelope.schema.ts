import { z } from 'zod';
import { TradeOfferItemCreateManyTradeOfferInputObjectSchema } from './TradeOfferItemCreateManyTradeOfferInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemCreateManyTradeOfferInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => TradeOfferItemCreateManyTradeOfferInputObjectSchema),
        z
          .lazy(() => TradeOfferItemCreateManyTradeOfferInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const TradeOfferItemCreateManyTradeOfferInputEnvelopeObjectSchema =
  Schema;
