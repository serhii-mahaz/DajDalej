import { z } from 'zod';
import { TradeOfferCreateWithoutOwnerInputObjectSchema } from './TradeOfferCreateWithoutOwnerInput.schema';
import { TradeOfferUncheckedCreateWithoutOwnerInputObjectSchema } from './TradeOfferUncheckedCreateWithoutOwnerInput.schema';
import { TradeOfferCreateOrConnectWithoutOwnerInputObjectSchema } from './TradeOfferCreateOrConnectWithoutOwnerInput.schema';
import { TradeOfferUpsertWithWhereUniqueWithoutOwnerInputObjectSchema } from './TradeOfferUpsertWithWhereUniqueWithoutOwnerInput.schema';
import { TradeOfferCreateManyOwnerInputEnvelopeObjectSchema } from './TradeOfferCreateManyOwnerInputEnvelope.schema';
import { TradeOfferWhereUniqueInputObjectSchema } from './TradeOfferWhereUniqueInput.schema';
import { TradeOfferUpdateWithWhereUniqueWithoutOwnerInputObjectSchema } from './TradeOfferUpdateWithWhereUniqueWithoutOwnerInput.schema';
import { TradeOfferUpdateManyWithWhereWithoutOwnerInputObjectSchema } from './TradeOfferUpdateManyWithWhereWithoutOwnerInput.schema';
import { TradeOfferScalarWhereInputObjectSchema } from './TradeOfferScalarWhereInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferUpdateManyWithoutOwnerNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TradeOfferCreateWithoutOwnerInputObjectSchema),
        z.lazy(() => TradeOfferCreateWithoutOwnerInputObjectSchema).array(),
        z.lazy(() => TradeOfferUncheckedCreateWithoutOwnerInputObjectSchema),
        z
          .lazy(() => TradeOfferUncheckedCreateWithoutOwnerInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => TradeOfferCreateOrConnectWithoutOwnerInputObjectSchema),
        z
          .lazy(() => TradeOfferCreateOrConnectWithoutOwnerInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => TradeOfferUpsertWithWhereUniqueWithoutOwnerInputObjectSchema,
        ),
        z
          .lazy(
            () => TradeOfferUpsertWithWhereUniqueWithoutOwnerInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => TradeOfferCreateManyOwnerInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => TradeOfferWhereUniqueInputObjectSchema),
        z.lazy(() => TradeOfferWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => TradeOfferWhereUniqueInputObjectSchema),
        z.lazy(() => TradeOfferWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => TradeOfferWhereUniqueInputObjectSchema),
        z.lazy(() => TradeOfferWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => TradeOfferWhereUniqueInputObjectSchema),
        z.lazy(() => TradeOfferWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => TradeOfferUpdateWithWhereUniqueWithoutOwnerInputObjectSchema,
        ),
        z
          .lazy(
            () => TradeOfferUpdateWithWhereUniqueWithoutOwnerInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => TradeOfferUpdateManyWithWhereWithoutOwnerInputObjectSchema,
        ),
        z
          .lazy(
            () => TradeOfferUpdateManyWithWhereWithoutOwnerInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => TradeOfferScalarWhereInputObjectSchema),
        z.lazy(() => TradeOfferScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TradeOfferUpdateManyWithoutOwnerNestedInputObjectSchema = Schema;
