import { z } from 'zod';
import { TradeOfferUpdateWithoutItemsInputObjectSchema } from './TradeOfferUpdateWithoutItemsInput.schema';
import { TradeOfferUncheckedUpdateWithoutItemsInputObjectSchema } from './TradeOfferUncheckedUpdateWithoutItemsInput.schema';
import { TradeOfferCreateWithoutItemsInputObjectSchema } from './TradeOfferCreateWithoutItemsInput.schema';
import { TradeOfferUncheckedCreateWithoutItemsInputObjectSchema } from './TradeOfferUncheckedCreateWithoutItemsInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferUpsertWithoutItemsInput> = z
  .object({
    update: z.union([
      z.lazy(() => TradeOfferUpdateWithoutItemsInputObjectSchema),
      z.lazy(() => TradeOfferUncheckedUpdateWithoutItemsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TradeOfferCreateWithoutItemsInputObjectSchema),
      z.lazy(() => TradeOfferUncheckedCreateWithoutItemsInputObjectSchema),
    ]),
  })
  .strict();

export const TradeOfferUpsertWithoutItemsInputObjectSchema = Schema;
