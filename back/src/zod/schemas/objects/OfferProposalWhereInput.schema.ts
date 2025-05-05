import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { TradeOfferRelationFilterObjectSchema } from './TradeOfferRelationFilter.schema';
import { TradeOfferWhereInputObjectSchema } from './TradeOfferWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ProposalItemListRelationFilterObjectSchema } from './ProposalItemListRelationFilter.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => OfferProposalWhereInputObjectSchema),
        z.lazy(() => OfferProposalWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => OfferProposalWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => OfferProposalWhereInputObjectSchema),
        z.lazy(() => OfferProposalWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    tradeOfferId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    proposerId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    status: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    tradeOffer: z
      .union([
        z.lazy(() => TradeOfferRelationFilterObjectSchema),
        z.lazy(() => TradeOfferWhereInputObjectSchema),
      ])
      .optional(),
    proposer: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    items: z.lazy(() => ProposalItemListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const OfferProposalWhereInputObjectSchema = Schema;
