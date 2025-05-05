import { z } from 'zod';
import { TradeOfferItemCreateWithoutTradeOfferInputObjectSchema } from './TradeOfferItemCreateWithoutTradeOfferInput.schema';
import { TradeOfferItemUncheckedCreateWithoutTradeOfferInputObjectSchema } from './TradeOfferItemUncheckedCreateWithoutTradeOfferInput.schema';
import { TradeOfferItemCreateOrConnectWithoutTradeOfferInputObjectSchema } from './TradeOfferItemCreateOrConnectWithoutTradeOfferInput.schema';
import { TradeOfferItemCreateManyTradeOfferInputEnvelopeObjectSchema } from './TradeOfferItemCreateManyTradeOfferInputEnvelope.schema';
import { TradeOfferItemWhereUniqueInputObjectSchema } from './TradeOfferItemWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemUncheckedCreateNestedManyWithoutTradeOfferInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TradeOfferItemCreateWithoutTradeOfferInputObjectSchema),
          z
            .lazy(() => TradeOfferItemCreateWithoutTradeOfferInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              TradeOfferItemUncheckedCreateWithoutTradeOfferInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TradeOfferItemUncheckedCreateWithoutTradeOfferInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              TradeOfferItemCreateOrConnectWithoutTradeOfferInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TradeOfferItemCreateOrConnectWithoutTradeOfferInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TradeOfferItemCreateManyTradeOfferInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => TradeOfferItemWhereUniqueInputObjectSchema),
          z.lazy(() => TradeOfferItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TradeOfferItemUncheckedCreateNestedManyWithoutTradeOfferInputObjectSchema =
  Schema;
