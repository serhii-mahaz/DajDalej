import { z } from 'zod';
import { ItemCreateNestedOneWithoutTradeOfferItemInputObjectSchema } from './ItemCreateNestedOneWithoutTradeOfferItemInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemCreateWithoutTradeOfferInput> = z
  .object({
    id: z.string().optional(),
    item: z.lazy(
      () => ItemCreateNestedOneWithoutTradeOfferItemInputObjectSchema,
    ),
  })
  .strict();

export const TradeOfferItemCreateWithoutTradeOfferInputObjectSchema = Schema;
