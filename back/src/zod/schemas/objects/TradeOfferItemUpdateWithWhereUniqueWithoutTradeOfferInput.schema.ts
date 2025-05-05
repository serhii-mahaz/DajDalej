import { z } from 'zod';
import { TradeOfferItemWhereUniqueInputObjectSchema } from './TradeOfferItemWhereUniqueInput.schema';
import { TradeOfferItemUpdateWithoutTradeOfferInputObjectSchema } from './TradeOfferItemUpdateWithoutTradeOfferInput.schema';
import { TradeOfferItemUncheckedUpdateWithoutTradeOfferInputObjectSchema } from './TradeOfferItemUncheckedUpdateWithoutTradeOfferInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemUpdateWithWhereUniqueWithoutTradeOfferInput> =
  z
    .object({
      where: z.lazy(() => TradeOfferItemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TradeOfferItemUpdateWithoutTradeOfferInputObjectSchema),
        z.lazy(
          () => TradeOfferItemUncheckedUpdateWithoutTradeOfferInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TradeOfferItemUpdateWithWhereUniqueWithoutTradeOfferInputObjectSchema =
  Schema;
