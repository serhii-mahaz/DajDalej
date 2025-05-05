import { z } from 'zod';
import { TradeOfferItemCreateWithoutTradeOfferInputObjectSchema } from './TradeOfferItemCreateWithoutTradeOfferInput.schema';
import { TradeOfferItemUncheckedCreateWithoutTradeOfferInputObjectSchema } from './TradeOfferItemUncheckedCreateWithoutTradeOfferInput.schema';
import { TradeOfferItemCreateOrConnectWithoutTradeOfferInputObjectSchema } from './TradeOfferItemCreateOrConnectWithoutTradeOfferInput.schema';
import { TradeOfferItemUpsertWithWhereUniqueWithoutTradeOfferInputObjectSchema } from './TradeOfferItemUpsertWithWhereUniqueWithoutTradeOfferInput.schema';
import { TradeOfferItemCreateManyTradeOfferInputEnvelopeObjectSchema } from './TradeOfferItemCreateManyTradeOfferInputEnvelope.schema';
import { TradeOfferItemWhereUniqueInputObjectSchema } from './TradeOfferItemWhereUniqueInput.schema';
import { TradeOfferItemUpdateWithWhereUniqueWithoutTradeOfferInputObjectSchema } from './TradeOfferItemUpdateWithWhereUniqueWithoutTradeOfferInput.schema';
import { TradeOfferItemUpdateManyWithWhereWithoutTradeOfferInputObjectSchema } from './TradeOfferItemUpdateManyWithWhereWithoutTradeOfferInput.schema';
import { TradeOfferItemScalarWhereInputObjectSchema } from './TradeOfferItemScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemUpdateManyWithoutTradeOfferNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              TradeOfferItemUpsertWithWhereUniqueWithoutTradeOfferInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TradeOfferItemUpsertWithWhereUniqueWithoutTradeOfferInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TradeOfferItemCreateManyTradeOfferInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => TradeOfferItemWhereUniqueInputObjectSchema),
          z.lazy(() => TradeOfferItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => TradeOfferItemWhereUniqueInputObjectSchema),
          z.lazy(() => TradeOfferItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => TradeOfferItemWhereUniqueInputObjectSchema),
          z.lazy(() => TradeOfferItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => TradeOfferItemWhereUniqueInputObjectSchema),
          z.lazy(() => TradeOfferItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              TradeOfferItemUpdateWithWhereUniqueWithoutTradeOfferInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TradeOfferItemUpdateWithWhereUniqueWithoutTradeOfferInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              TradeOfferItemUpdateManyWithWhereWithoutTradeOfferInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TradeOfferItemUpdateManyWithWhereWithoutTradeOfferInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => TradeOfferItemScalarWhereInputObjectSchema),
          z.lazy(() => TradeOfferItemScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TradeOfferItemUpdateManyWithoutTradeOfferNestedInputObjectSchema =
  Schema;
