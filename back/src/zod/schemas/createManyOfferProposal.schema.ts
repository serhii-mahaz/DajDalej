import { z } from 'zod';
import { OfferProposalCreateManyInputObjectSchema } from './objects/OfferProposalCreateManyInput.schema';

export const OfferProposalCreateManySchema = z.object({
  data: z.union([
    OfferProposalCreateManyInputObjectSchema,
    z.array(OfferProposalCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
