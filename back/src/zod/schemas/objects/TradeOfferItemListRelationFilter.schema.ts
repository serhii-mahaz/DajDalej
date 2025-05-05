import { z } from 'zod';
import { TradeOfferItemWhereInputObjectSchema } from './TradeOfferItemWhereInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemListRelationFilter> = z
  .object({
    every: z.lazy(() => TradeOfferItemWhereInputObjectSchema).optional(),
    some: z.lazy(() => TradeOfferItemWhereInputObjectSchema).optional(),
    none: z.lazy(() => TradeOfferItemWhereInputObjectSchema).optional(),
  })
  .strict();

export const TradeOfferItemListRelationFilterObjectSchema = Schema;
