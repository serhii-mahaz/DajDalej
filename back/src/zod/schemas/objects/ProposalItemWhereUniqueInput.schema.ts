import { z } from 'zod';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    itemId: z.string().optional(),
  })
  .strict();

export const ProposalItemWhereUniqueInputObjectSchema = Schema;
