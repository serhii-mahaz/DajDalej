import { z } from 'zod';
import { TradeOfferWhereUniqueInputObjectSchema } from './TradeOfferWhereUniqueInput.schema';
import { TradeOfferUpdateWithoutOwnerInputObjectSchema } from './TradeOfferUpdateWithoutOwnerInput.schema';
import { TradeOfferUncheckedUpdateWithoutOwnerInputObjectSchema } from './TradeOfferUncheckedUpdateWithoutOwnerInput.schema';
import { TradeOfferCreateWithoutOwnerInputObjectSchema } from './TradeOfferCreateWithoutOwnerInput.schema';
import { TradeOfferUncheckedCreateWithoutOwnerInputObjectSchema } from './TradeOfferUncheckedCreateWithoutOwnerInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferUpsertWithWhereUniqueWithoutOwnerInput> =
  z
    .object({
      where: z.lazy(() => TradeOfferWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TradeOfferUpdateWithoutOwnerInputObjectSchema),
        z.lazy(() => TradeOfferUncheckedUpdateWithoutOwnerInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => TradeOfferCreateWithoutOwnerInputObjectSchema),
        z.lazy(() => TradeOfferUncheckedCreateWithoutOwnerInputObjectSchema),
      ]),
    })
    .strict();

export const TradeOfferUpsertWithWhereUniqueWithoutOwnerInputObjectSchema =
  Schema;
