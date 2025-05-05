import { z } from 'zod';
import { ItemCreateNestedOneWithoutProposalItemInputObjectSchema } from './ItemCreateNestedOneWithoutProposalItemInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemCreateWithoutOfferProposalInput> = z
  .object({
    id: z.string().optional(),
    item: z.lazy(() => ItemCreateNestedOneWithoutProposalItemInputObjectSchema),
  })
  .strict();

export const ProposalItemCreateWithoutOfferProposalInputObjectSchema = Schema;
