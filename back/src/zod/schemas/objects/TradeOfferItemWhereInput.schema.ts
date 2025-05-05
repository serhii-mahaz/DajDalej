import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { TradeOfferRelationFilterObjectSchema } from './TradeOfferRelationFilter.schema';
import { TradeOfferWhereInputObjectSchema } from './TradeOfferWhereInput.schema';
import { ItemRelationFilterObjectSchema } from './ItemRelationFilter.schema';
import { ItemWhereInputObjectSchema } from './ItemWhereInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TradeOfferItemWhereInputObjectSchema),
        z.lazy(() => TradeOfferItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TradeOfferItemWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TradeOfferItemWhereInputObjectSchema),
        z.lazy(() => TradeOfferItemWhereInputObjectSchema).array(),
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
    tradeOffer: z
      .union([
        z.lazy(() => TradeOfferRelationFilterObjectSchema),
        z.lazy(() => TradeOfferWhereInputObjectSchema),
      ])
      .optional(),
    item: z
      .union([
        z.lazy(() => ItemRelationFilterObjectSchema),
        z.lazy(() => ItemWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const TradeOfferItemWhereInputObjectSchema = Schema;
