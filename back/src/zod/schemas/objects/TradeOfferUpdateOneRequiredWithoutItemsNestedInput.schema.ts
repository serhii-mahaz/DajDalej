import { z } from 'zod';
import { TradeOfferCreateWithoutItemsInputObjectSchema } from './TradeOfferCreateWithoutItemsInput.schema';
import { TradeOfferUncheckedCreateWithoutItemsInputObjectSchema } from './TradeOfferUncheckedCreateWithoutItemsInput.schema';
import { TradeOfferCreateOrConnectWithoutItemsInputObjectSchema } from './TradeOfferCreateOrConnectWithoutItemsInput.schema';
import { TradeOfferUpsertWithoutItemsInputObjectSchema } from './TradeOfferUpsertWithoutItemsInput.schema';
import { TradeOfferWhereUniqueInputObjectSchema } from './TradeOfferWhereUniqueInput.schema';
import { TradeOfferUpdateWithoutItemsInputObjectSchema } from './TradeOfferUpdateWithoutItemsInput.schema';
import { TradeOfferUncheckedUpdateWithoutItemsInputObjectSchema } from './TradeOfferUncheckedUpdateWithoutItemsInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferUpdateOneRequiredWithoutItemsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TradeOfferCreateWithoutItemsInputObjectSchema),
          z.lazy(() => TradeOfferUncheckedCreateWithoutItemsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => TradeOfferCreateOrConnectWithoutItemsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => TradeOfferUpsertWithoutItemsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => TradeOfferWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => TradeOfferUpdateWithoutItemsInputObjectSchema),
          z.lazy(() => TradeOfferUncheckedUpdateWithoutItemsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const TradeOfferUpdateOneRequiredWithoutItemsNestedInputObjectSchema =
  Schema;
