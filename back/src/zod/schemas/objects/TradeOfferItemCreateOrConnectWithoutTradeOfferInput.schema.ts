import { z } from 'zod';
import { TradeOfferItemWhereUniqueInputObjectSchema } from './TradeOfferItemWhereUniqueInput.schema';
import { TradeOfferItemCreateWithoutTradeOfferInputObjectSchema } from './TradeOfferItemCreateWithoutTradeOfferInput.schema';
import { TradeOfferItemUncheckedCreateWithoutTradeOfferInputObjectSchema } from './TradeOfferItemUncheckedCreateWithoutTradeOfferInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemCreateOrConnectWithoutTradeOfferInput> =
  z
    .object({
      where: z.lazy(() => TradeOfferItemWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TradeOfferItemCreateWithoutTradeOfferInputObjectSchema),
        z.lazy(
          () => TradeOfferItemUncheckedCreateWithoutTradeOfferInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TradeOfferItemCreateOrConnectWithoutTradeOfferInputObjectSchema =
  Schema;
