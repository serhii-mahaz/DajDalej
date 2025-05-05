import { z } from 'zod';
import { OfferProposalWhereUniqueInputObjectSchema } from './objects/OfferProposalWhereUniqueInput.schema';

export const OfferProposalFindUniqueSchema = z.object({
  where: OfferProposalWhereUniqueInputObjectSchema,
});
