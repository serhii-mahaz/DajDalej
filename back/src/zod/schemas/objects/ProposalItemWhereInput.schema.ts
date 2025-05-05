import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { OfferProposalRelationFilterObjectSchema } from './OfferProposalRelationFilter.schema';
import { OfferProposalWhereInputObjectSchema } from './OfferProposalWhereInput.schema';
import { ItemRelationFilterObjectSchema } from './ItemRelationFilter.schema';
import { ItemWhereInputObjectSchema } from './ItemWhereInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProposalItemWhereInputObjectSchema),
        z.lazy(() => ProposalItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProposalItemWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProposalItemWhereInputObjectSchema),
        z.lazy(() => ProposalItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    offerProposalId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    itemId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    offerProposal: z
      .union([
        z.lazy(() => OfferProposalRelationFilterObjectSchema),
        z.lazy(() => OfferProposalWhereInputObjectSchema),
      ])
      .optional(),
    item: z
      .union([
        z.lazy(() => ItemRelationFilterObjectSchema),
        z.lazy(() => ItemWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ProposalItemWhereInputObjectSchema = Schema;
