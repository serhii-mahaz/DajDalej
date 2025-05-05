import { z } from 'zod';
import { OfferProposalWhereInputObjectSchema } from './objects/OfferProposalWhereInput.schema';

export const OfferProposalDeleteManySchema = z.object({
  where: OfferProposalWhereInputObjectSchema.optional(),
});
