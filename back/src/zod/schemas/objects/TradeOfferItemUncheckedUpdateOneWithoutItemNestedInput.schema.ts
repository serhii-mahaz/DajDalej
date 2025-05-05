import { z } from 'zod';
import { TradeOfferItemCreateWithoutItemInputObjectSchema } from './TradeOfferItemCreateWithoutItemInput.schema';
import { TradeOfferItemUncheckedCreateWithoutItemInputObjectSchema } from './TradeOfferItemUncheckedCreateWithoutItemInput.schema';
import { TradeOfferItemCreateOrConnectWithoutItemInputObjectSchema } from './TradeOfferItemCreateOrConnectWithoutItemInput.schema';
import { TradeOfferItemUpsertWithoutItemInputObjectSchema } from './TradeOfferItemUpsertWithoutItemInput.schema';
import { TradeOfferItemWhereUniqueInputObjectSchema } from './TradeOfferItemWhereUniqueInput.schema';
import { TradeOfferItemUpdateWithoutItemInputObjectSchema } from './TradeOfferItemUpdateWithoutItemInput.schema';
import { TradeOfferItemUncheckedUpdateWithoutItemInputObjectSchema } from './TradeOfferItemUncheckedUpdateWithoutItemInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemUncheckedUpdateOneWithoutItemNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TradeOfferItemCreateWithoutItemInputObjectSchema),
          z.lazy(
            () => TradeOfferItemUncheckedCreateWithoutItemInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => TradeOfferItemCreateOrConnectWithoutItemInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => TradeOfferItemUpsertWithoutItemInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z
        .lazy(() => TradeOfferItemWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => TradeOfferItemUpdateWithoutItemInputObjectSchema),
          z.lazy(
            () => TradeOfferItemUncheckedUpdateWithoutItemInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const TradeOfferItemUncheckedUpdateOneWithoutItemNestedInputObjectSchema =
  Schema;
