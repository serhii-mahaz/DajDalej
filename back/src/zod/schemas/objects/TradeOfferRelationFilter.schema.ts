import { z } from 'zod';
import { TradeOfferWhereInputObjectSchema } from './TradeOfferWhereInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferRelationFilter> = z
  .object({
    is: z
      .lazy(() => TradeOfferWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => TradeOfferWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const TradeOfferRelationFilterObjectSchema = Schema;
