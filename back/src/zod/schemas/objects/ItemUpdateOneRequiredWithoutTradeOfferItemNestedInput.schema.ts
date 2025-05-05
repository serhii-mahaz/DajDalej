import { z } from 'zod';
import { ItemCreateWithoutTradeOfferItemInputObjectSchema } from './ItemCreateWithoutTradeOfferItemInput.schema';
import { ItemUncheckedCreateWithoutTradeOfferItemInputObjectSchema } from './ItemUncheckedCreateWithoutTradeOfferItemInput.schema';
import { ItemCreateOrConnectWithoutTradeOfferItemInputObjectSchema } from './ItemCreateOrConnectWithoutTradeOfferItemInput.schema';
import { ItemUpsertWithoutTradeOfferItemInputObjectSchema } from './ItemUpsertWithoutTradeOfferItemInput.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateWithoutTradeOfferItemInputObjectSchema } from './ItemUpdateWithoutTradeOfferItemInput.schema';
import { ItemUncheckedUpdateWithoutTradeOfferItemInputObjectSchema } from './ItemUncheckedUpdateWithoutTradeOfferItemInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ItemUpdateOneRequiredWithoutTradeOfferItemNestedInput> =
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
      upsert: z
        .lazy(() => ItemUpsertWithoutTradeOfferItemInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ItemUpdateWithoutTradeOfferItemInputObjectSchema),
          z.lazy(
            () => ItemUncheckedUpdateWithoutTradeOfferItemInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ItemUpdateOneRequiredWithoutTradeOfferItemNestedInputObjectSchema =
  Schema;
