import { z } from 'zod';
import { OfferProposalCreateNestedOneWithoutItemsInputObjectSchema } from './OfferProposalCreateNestedOneWithoutItemsInput.schema';
import { ItemCreateNestedOneWithoutProposalItemInputObjectSchema } from './ItemCreateNestedOneWithoutProposalItemInput.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProposalItemCreateInput> = z
  .object({
    id: z.string().optional(),
    offerProposal: z.lazy(
      () => OfferProposalCreateNestedOneWithoutItemsInputObjectSchema,
    ),
    item: z.lazy(() => ItemCreateNestedOneWithoutProposalItemInputObjectSchema),
  })
  .strict();

export const ProposalItemCreateInputObjectSchema = Schema;
