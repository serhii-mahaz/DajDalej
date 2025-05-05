import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { TradeOfferItemRelationFilterObjectSchema } from './TradeOfferItemRelationFilter.schema';
import { TradeOfferItemWhereInputObjectSchema } from './TradeOfferItemWhereInput.schema';
import { ProposalItemRelationFilterObjectSchema } from './ProposalItemRelationFilter.schema';
import { ProposalItemWhereInputObjectSchema } from './ProposalItemWhereInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ItemWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ItemWhereInputObjectSchema),
        z.lazy(() => ItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ItemWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ItemWhereInputObjectSchema),
        z.lazy(() => ItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    imageUrl: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    ownerId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    owner: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    tradeOfferItem: z
      .union([
        z.lazy(() => TradeOfferItemRelationFilterObjectSchema),
        z.lazy(() => TradeOfferItemWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    proposalItem: z
      .union([
        z.lazy(() => ProposalItemRelationFilterObjectSchema),
        z.lazy(() => ProposalItemWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const ItemWhereInputObjectSchema = Schema;
