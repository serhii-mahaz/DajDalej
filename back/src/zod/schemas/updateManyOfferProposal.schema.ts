import { z } from 'zod';
import { OfferProposalUpdateManyMutationInputObjectSchema } from './objects/OfferProposalUpdateManyMutationInput.schema';
import { OfferProposalWhereInputObjectSchema } from './objects/OfferProposalWhereInput.schema';

export const OfferProposalUpdateManySchema = z.object({
  data: OfferProposalUpdateManyMutationInputObjectSchema,
  where: OfferProposalWhereInputObjectSchema.optional(),
});
