import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { TradeOfferItemListRelationFilterObjectSchema } from './TradeOfferItemListRelationFilter.schema';
import { OfferProposalListRelationFilterObjectSchema } from './OfferProposalListRelationFilter.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.TradeOfferWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TradeOfferWhereInputObjectSchema),
        z.lazy(() => TradeOfferWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TradeOfferWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TradeOfferWhereInputObjectSchema),
        z.lazy(() => TradeOfferWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    ownerId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    owner: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    items: z
      .lazy(() => TradeOfferItemListRelationFilterObjectSchema)
      .optional(),
    proposals: z
      .lazy(() => OfferProposalListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const TradeOfferWhereInputObjectSchema = Schema;
