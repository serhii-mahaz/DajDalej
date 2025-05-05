import { z } from 'zod';
import { TradeOfferItemWhereInputObjectSchema } from './TradeOfferItemWhereInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemRelationFilter> = z
  .object({
    is: z
      .lazy(() => TradeOfferItemWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => TradeOfferItemWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const TradeOfferItemRelationFilterObjectSchema = Schema;
