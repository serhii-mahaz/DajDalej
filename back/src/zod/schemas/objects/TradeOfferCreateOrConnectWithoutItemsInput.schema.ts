import { z } from 'zod';
import { TradeOfferWhereUniqueInputObjectSchema } from './TradeOfferWhereUniqueInput.schema';
import { TradeOfferCreateWithoutItemsInputObjectSchema } from './TradeOfferCreateWithoutItemsInput.schema';
import { TradeOfferUncheckedCreateWithoutItemsInputObjectSchema } from './TradeOfferUncheckedCreateWithoutItemsInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferCreateOrConnectWithoutItemsInput> = z
  .object({
    where: z.lazy(() => TradeOfferWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TradeOfferCreateWithoutItemsInputObjectSchema),
      z.lazy(() => TradeOfferUncheckedCreateWithoutItemsInputObjectSchema),
    ]),
  })
  .strict();

export const TradeOfferCreateOrConnectWithoutItemsInputObjectSchema = Schema;
