import { z } from 'zod';
import { OfferProposalWhereInputObjectSchema } from './OfferProposalWhereInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.OfferProposalRelationFilter> = z
  .object({
    is: z
      .lazy(() => OfferProposalWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => OfferProposalWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const OfferProposalRelationFilterObjectSchema = Schema;
