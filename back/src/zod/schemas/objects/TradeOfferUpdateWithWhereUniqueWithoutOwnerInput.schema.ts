import { z } from 'zod';
import { TradeOfferWhereUniqueInputObjectSchema } from './TradeOfferWhereUniqueInput.schema';
import { TradeOfferUpdateWithoutOwnerInputObjectSchema } from './TradeOfferUpdateWithoutOwnerInput.schema';
import { TradeOfferUncheckedUpdateWithoutOwnerInputObjectSchema } from './TradeOfferUncheckedUpdateWithoutOwnerInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferUpdateWithWhereUniqueWithoutOwnerInput> =
  z
    .object({
      where: z.lazy(() => TradeOfferWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TradeOfferUpdateWithoutOwnerInputObjectSchema),
        z.lazy(() => TradeOfferUncheckedUpdateWithoutOwnerInputObjectSchema),
      ]),
    })
    .strict();

export const TradeOfferUpdateWithWhereUniqueWithoutOwnerInputObjectSchema =
  Schema;
