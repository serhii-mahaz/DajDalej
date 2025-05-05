import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProposalItemScalarWhereInputObjectSchema),
        z.lazy(() => ProposalItemScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProposalItemScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProposalItemScalarWhereInputObjectSchema),
        z.lazy(() => ProposalItemScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const ProposalItemScalarWhereInputObjectSchema = Schema;
