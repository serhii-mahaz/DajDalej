import { z } from 'zod';
import { TradeOfferItemScalarWhereInputObjectSchema } from './TradeOfferItemScalarWhereInput.schema';
import { TradeOfferItemUpdateManyMutationInputObjectSchema } from './TradeOfferItemUpdateManyMutationInput.schema';
import { TradeOfferItemUncheckedUpdateManyWithoutItemsInputObjectSchema } from './TradeOfferItemUncheckedUpdateManyWithoutItemsInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferItemUpdateManyWithWhereWithoutTradeOfferInput> =
  z
    .object({
      where: z.lazy(() => TradeOfferItemScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => TradeOfferItemUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => TradeOfferItemUncheckedUpdateManyWithoutItemsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TradeOfferItemUpdateManyWithWhereWithoutTradeOfferInputObjectSchema =
  Schema;
