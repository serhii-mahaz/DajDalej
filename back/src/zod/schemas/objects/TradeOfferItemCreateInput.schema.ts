import { z } from 'zod';
import { TradeOfferCreateNestedOneWithoutItemsInputObjectSchema } from './TradeOfferCreateNestedOneWithoutItemsInput.schema';
import { ItemCreateNestedOneWithoutTradeOfferItemInputObjectSchema } from './ItemCreateNestedOneWithoutTradeOfferItemInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemCreateInput> = z
  .object({
    id: z.string().optional(),
    tradeOffer: z.lazy(
      () => TradeOfferCreateNestedOneWithoutItemsInputObjectSchema,
    ),
    item: z.lazy(
      () => ItemCreateNestedOneWithoutTradeOfferItemInputObjectSchema,
    ),
  })
  .strict();

export const TradeOfferItemCreateInputObjectSchema = Schema;
