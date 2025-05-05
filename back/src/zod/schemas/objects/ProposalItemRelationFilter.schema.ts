import { z } from 'zod';
import { ProposalItemWhereInputObjectSchema } from './ProposalItemWhereInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemRelationFilter> = z
  .object({
    is: z
      .lazy(() => ProposalItemWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ProposalItemWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ProposalItemRelationFilterObjectSchema = Schema;
