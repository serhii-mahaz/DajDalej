import { z } from 'zod';
import { TradeOfferItemCreateNestedOneWithoutItemInputObjectSchema } from './TradeOfferItemCreateNestedOneWithoutItemInput.schema';
import { ProposalItemCreateNestedOneWithoutItemInputObjectSchema } from './ProposalItemCreateNestedOneWithoutItemInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ItemCreateWithoutOwnerInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string().optional().nullable(),
    imageUrl: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    tradeOfferItem: z
      .lazy(() => TradeOfferItemCreateNestedOneWithoutItemInputObjectSchema)
      .optional(),
    proposalItem: z
      .lazy(() => ProposalItemCreateNestedOneWithoutItemInputObjectSchema)
      .optional(),
  })
  .strict();

export const ItemCreateWithoutOwnerInputObjectSchema = Schema;
