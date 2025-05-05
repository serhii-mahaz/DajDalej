import { z } from 'zod';
import { TradeOfferItemUpdateWithoutItemInputObjectSchema } from './TradeOfferItemUpdateWithoutItemInput.schema';
import { TradeOfferItemUncheckedUpdateWithoutItemInputObjectSchema } from './TradeOfferItemUncheckedUpdateWithoutItemInput.schema';
import { TradeOfferItemCreateWithoutItemInputObjectSchema } from './TradeOfferItemCreateWithoutItemInput.schema';
import { TradeOfferItemUncheckedCreateWithoutItemInputObjectSchema } from './TradeOfferItemUncheckedCreateWithoutItemInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemUpsertWithoutItemInput> = z
  .object({
    update: z.union([
      z.lazy(() => TradeOfferItemUpdateWithoutItemInputObjectSchema),
      z.lazy(() => TradeOfferItemUncheckedUpdateWithoutItemInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TradeOfferItemCreateWithoutItemInputObjectSchema),
      z.lazy(() => TradeOfferItemUncheckedCreateWithoutItemInputObjectSchema),
    ]),
  })
  .strict();

export const TradeOfferItemUpsertWithoutItemInputObjectSchema = Schema;
