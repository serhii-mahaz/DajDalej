import { z } from 'zod';
import { TradeOfferCreateWithoutItemsInputObjectSchema } from './TradeOfferCreateWithoutItemsInput.schema';
import { TradeOfferUncheckedCreateWithoutItemsInputObjectSchema } from './TradeOfferUncheckedCreateWithoutItemsInput.schema';
import { TradeOfferCreateOrConnectWithoutItemsInputObjectSchema } from './TradeOfferCreateOrConnectWithoutItemsInput.schema';
import { TradeOfferWhereUniqueInputObjectSchema } from './TradeOfferWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferCreateNestedOneWithoutItemsInput> = z
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
    connect: z.lazy(() => TradeOfferWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const TradeOfferCreateNestedOneWithoutItemsInputObjectSchema = Schema;
