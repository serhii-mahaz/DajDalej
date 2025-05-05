import { z } from 'zod';
import { TradeOfferWhereInputObjectSchema } from './TradeOfferWhereInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferListRelationFilter> = z
  .object({
    every: z.lazy(() => TradeOfferWhereInputObjectSchema).optional(),
    some: z.lazy(() => TradeOfferWhereInputObjectSchema).optional(),
    none: z.lazy(() => TradeOfferWhereInputObjectSchema).optional(),
  })
  .strict();

export const TradeOfferListRelationFilterObjectSchema = Schema;
