import { z } from 'zod';
import { TradeOfferItemUncheckedCreateNestedOneWithoutItemInputObjectSchema } from './TradeOfferItemUncheckedCreateNestedOneWithoutItemInput.schema';
import { ProposalItemUncheckedCreateNestedOneWithoutItemInputObjectSchema } from './ProposalItemUncheckedCreateNestedOneWithoutItemInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ItemUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string().optional().nullable(),
    imageUrl: z.string().optional().nullable(),
    ownerId: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    tradeOfferItem: z
      .lazy(
        () =>
          TradeOfferItemUncheckedCreateNestedOneWithoutItemInputObjectSchema,
      )
      .optional(),
    proposalItem: z
      .lazy(
        () => ProposalItemUncheckedCreateNestedOneWithoutItemInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ItemUncheckedCreateInputObjectSchema = Schema;
