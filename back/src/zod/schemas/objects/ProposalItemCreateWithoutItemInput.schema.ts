import { z } from 'zod';
import { OfferProposalCreateNestedOneWithoutItemsInputObjectSchema } from './OfferProposalCreateNestedOneWithoutItemsInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemCreateWithoutItemInput> = z
  .object({
    id: z.string().optional(),
    offerProposal: z.lazy(
      () => OfferProposalCreateNestedOneWithoutItemsInputObjectSchema,
    ),
  })
  .strict();

export const ProposalItemCreateWithoutItemInputObjectSchema = Schema;
