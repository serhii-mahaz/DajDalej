import { z } from 'zod';
import { OfferProposalWhereInputObjectSchema } from './OfferProposalWhereInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalListRelationFilter> = z
  .object({
    every: z.lazy(() => OfferProposalWhereInputObjectSchema).optional(),
    some: z.lazy(() => OfferProposalWhereInputObjectSchema).optional(),
    none: z.lazy(() => OfferProposalWhereInputObjectSchema).optional(),
  })
  .strict();

export const OfferProposalListRelationFilterObjectSchema = Schema;
