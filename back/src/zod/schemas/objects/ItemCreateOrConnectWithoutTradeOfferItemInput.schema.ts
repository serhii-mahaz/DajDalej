import { z } from 'zod';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemCreateWithoutTradeOfferItemInputObjectSchema } from './ItemCreateWithoutTradeOfferItemInput.schema';
import { ItemUncheckedCreateWithoutTradeOfferItemInputObjectSchema } from './ItemUncheckedCreateWithoutTradeOfferItemInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ItemCreateOrConnectWithoutTradeOfferItemInput> =
  z
    .object({
      where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ItemCreateWithoutTradeOfferItemInputObjectSchema),
        z.lazy(() => ItemUncheckedCreateWithoutTradeOfferItemInputObjectSchema),
      ]),
    })
    .strict();

export const ItemCreateOrConnectWithoutTradeOfferItemInputObjectSchema = Schema;
