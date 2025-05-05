import { z } from 'zod';
import { TradeOfferItemCreateWithoutItemInputObjectSchema } from './TradeOfferItemCreateWithoutItemInput.schema';
import { TradeOfferItemUncheckedCreateWithoutItemInputObjectSchema } from './TradeOfferItemUncheckedCreateWithoutItemInput.schema';
import { TradeOfferItemCreateOrConnectWithoutItemInputObjectSchema } from './TradeOfferItemCreateOrConnectWithoutItemInput.schema';
import { TradeOfferItemWhereUniqueInputObjectSchema } from './TradeOfferItemWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemUncheckedCreateNestedOneWithoutItemInput> =
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
      connect: z
        .lazy(() => TradeOfferItemWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const TradeOfferItemUncheckedCreateNestedOneWithoutItemInputObjectSchema =
  Schema;
