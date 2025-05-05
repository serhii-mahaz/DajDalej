import { z } from 'zod';
import { ProposalItemWhereInputObjectSchema } from './ProposalItemWhereInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemListRelationFilter> = z
  .object({
    every: z.lazy(() => ProposalItemWhereInputObjectSchema).optional(),
    some: z.lazy(() => ProposalItemWhereInputObjectSchema).optional(),
    none: z.lazy(() => ProposalItemWhereInputObjectSchema).optional(),
  })
  .strict();

export const ProposalItemListRelationFilterObjectSchema = Schema;
