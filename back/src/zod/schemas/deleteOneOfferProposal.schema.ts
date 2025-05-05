import { z } from 'zod';
import { OfferProposalWhereUniqueInputObjectSchema } from './objects/OfferProposalWhereUniqueInput.schema';

export const OfferProposalDeleteOneSchema = z.object({
  where: OfferProposalWhereUniqueInputObjectSchema,
});
