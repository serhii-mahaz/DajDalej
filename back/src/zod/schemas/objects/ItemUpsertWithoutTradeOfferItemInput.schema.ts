import { z } from 'zod';
import { ItemUpdateWithoutTradeOfferItemInputObjectSchema } from './ItemUpdateWithoutTradeOfferItemInput.schema';
import { ItemUncheckedUpdateWithoutTradeOfferItemInputObjectSchema } from './ItemUncheckedUpdateWithoutTradeOfferItemInput.schema';
import { ItemCreateWithoutTradeOfferItemInputObjectSchema } from './ItemCreateWithoutTradeOfferItemInput.schema';
import { ItemUncheckedCreateWithoutTradeOfferItemInputObjectSchema } from './ItemUncheckedCreateWithoutTradeOfferItemInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ItemUpsertWithoutTradeOfferItemInput> = z
  .object({
    update: z.union([
      z.lazy(() => ItemUpdateWithoutTradeOfferItemInputObjectSchema),
      z.lazy(() => ItemUncheckedUpdateWithoutTradeOfferItemInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ItemCreateWithoutTradeOfferItemInputObjectSchema),
      z.lazy(() => ItemUncheckedCreateWithoutTradeOfferItemInputObjectSchema),
    ]),
  })
  .strict();

export const ItemUpsertWithoutTradeOfferItemInputObjectSchema = Schema;
