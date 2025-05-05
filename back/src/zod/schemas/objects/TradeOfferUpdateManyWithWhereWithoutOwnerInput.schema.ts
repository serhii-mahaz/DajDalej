import { z } from 'zod';
import { TradeOfferScalarWhereInputObjectSchema } from './TradeOfferScalarWhereInput.schema';
import { TradeOfferUpdateManyMutationInputObjectSchema } from './TradeOfferUpdateManyMutationInput.schema';
import { TradeOfferUncheckedUpdateManyWithoutTradeOffersInputObjectSchema } from './TradeOfferUncheckedUpdateManyWithoutTradeOffersInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferUpdateManyWithWhereWithoutOwnerInput> =
  z
    .object({
      where: z.lazy(() => TradeOfferScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => TradeOfferUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            TradeOfferUncheckedUpdateManyWithoutTradeOffersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TradeOfferUpdateManyWithWhereWithoutOwnerInputObjectSchema =
  Schema;
