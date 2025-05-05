import { z } from 'zod';
import { UserCreateNestedOneWithoutItemsInputObjectSchema } from './UserCreateNestedOneWithoutItemsInput.schema';
import { ProposalItemCreateNestedOneWithoutItemInputObjectSchema } from './ProposalItemCreateNestedOneWithoutItemInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ItemCreateWithoutTradeOfferItemInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string().optional().nullable(),
    imageUrl: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    owner: z.lazy(() => UserCreateNestedOneWithoutItemsInputObjectSchema),
    proposalItem: z
      .lazy(() => ProposalItemCreateNestedOneWithoutItemInputObjectSchema)
      .optional(),
  })
  .strict();

export const ItemCreateWithoutTradeOfferItemInputObjectSchema = Schema;
