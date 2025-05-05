import { z } from 'zod';
import { ItemCreateWithoutTradeOfferItemInputObjectSchema } from './ItemCreateWithoutTradeOfferItemInput.schema';
import { ItemUncheckedCreateWithoutTradeOfferItemInputObjectSchema } from './ItemUncheckedCreateWithoutTradeOfferItemInput.schema';
import { ItemCreateOrConnectWithoutTradeOfferItemInputObjectSchema } from './ItemCreateOrConnectWithoutTradeOfferItemInput.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ItemCreateNestedOneWithoutTradeOfferItemInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemCreateWithoutTradeOfferItemInputObjectSchema),
          z.lazy(
            () => ItemUncheckedCreateWithoutTradeOfferItemInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ItemCreateOrConnectWithoutTradeOfferItemInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ItemCreateNestedOneWithoutTradeOfferItemInputObjectSchema = Schema;
