import { z } from 'zod';
import { UserCreateNestedOneWithoutItemsInputObjectSchema } from './UserCreateNestedOneWithoutItemsInput.schema';
import { TradeOfferItemCreateNestedOneWithoutItemInputObjectSchema } from './TradeOfferItemCreateNestedOneWithoutItemInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ItemCreateWithoutProposalItemInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string().optional().nullable(),
    imageUrl: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    owner: z.lazy(() => UserCreateNestedOneWithoutItemsInputObjectSchema),
    tradeOfferItem: z
      .lazy(() => TradeOfferItemCreateNestedOneWithoutItemInputObjectSchema)
      .optional(),
  })
  .strict();

export const ItemCreateWithoutProposalItemInputObjectSchema = Schema;
