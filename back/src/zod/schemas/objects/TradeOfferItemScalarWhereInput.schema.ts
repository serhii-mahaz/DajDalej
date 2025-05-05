import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TradeOfferItemScalarWhereInputObjectSchema),
        z.lazy(() => TradeOfferItemScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TradeOfferItemScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TradeOfferItemScalarWhereInputObjectSchema),
        z.lazy(() => TradeOfferItemScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    tradeOfferId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    itemId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const TradeOfferItemScalarWhereInputObjectSchema = Schema;
