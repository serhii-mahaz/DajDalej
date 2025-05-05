import { z } from 'zod';
import { TradeOfferItemWhereUniqueInputObjectSchema } from './TradeOfferItemWhereUniqueInput.schema';
import { TradeOfferItemCreateWithoutItemInputObjectSchema } from './TradeOfferItemCreateWithoutItemInput.schema';
import { TradeOfferItemUncheckedCreateWithoutItemInputObjectSchema } from './TradeOfferItemUncheckedCreateWithoutItemInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemCreateOrConnectWithoutItemInput> =
  z
    .object({
      where: z.lazy(() => TradeOfferItemWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TradeOfferItemCreateWithoutItemInputObjectSchema),
        z.lazy(() => TradeOfferItemUncheckedCreateWithoutItemInputObjectSchema),
      ]),
    })
    .strict();

export const TradeOfferItemCreateOrConnectWithoutItemInputObjectSchema = Schema;
