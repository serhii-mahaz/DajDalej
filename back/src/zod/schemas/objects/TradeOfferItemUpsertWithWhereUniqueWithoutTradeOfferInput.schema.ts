import { z } from 'zod';
import { TradeOfferItemWhereUniqueInputObjectSchema } from './TradeOfferItemWhereUniqueInput.schema';
import { TradeOfferItemUpdateWithoutTradeOfferInputObjectSchema } from './TradeOfferItemUpdateWithoutTradeOfferInput.schema';
import { TradeOfferItemUncheckedUpdateWithoutTradeOfferInputObjectSchema } from './TradeOfferItemUncheckedUpdateWithoutTradeOfferInput.schema';
import { TradeOfferItemCreateWithoutTradeOfferInputObjectSchema } from './TradeOfferItemCreateWithoutTradeOfferInput.schema';
import { TradeOfferItemUncheckedCreateWithoutTradeOfferInputObjectSchema } from './TradeOfferItemUncheckedCreateWithoutTradeOfferInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemUpsertWithWhereUniqueWithoutTradeOfferInput> =
  z
    .object({
      where: z.lazy(() => TradeOfferItemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TradeOfferItemUpdateWithoutTradeOfferInputObjectSchema),
        z.lazy(
          () => TradeOfferItemUncheckedUpdateWithoutTradeOfferInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => TradeOfferItemCreateWithoutTradeOfferInputObjectSchema),
        z.lazy(
          () => TradeOfferItemUncheckedCreateWithoutTradeOfferInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TradeOfferItemUpsertWithWhereUniqueWithoutTradeOfferInputObjectSchema =
  Schema;
