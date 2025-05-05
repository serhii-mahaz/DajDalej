import { z } from 'zod';
import { TradeOfferCreateNestedOneWithoutItemsInputObjectSchema } from './TradeOfferCreateNestedOneWithoutItemsInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemCreateWithoutItemInput> = z
  .object({
    id: z.string().optional(),
    tradeOffer: z.lazy(
      () => TradeOfferCreateNestedOneWithoutItemsInputObjectSchema,
    ),
  })
  .strict();

export const TradeOfferItemCreateWithoutItemInputObjectSchema = Schema;
