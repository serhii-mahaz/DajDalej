import { z } from 'zod';
import { OfferProposalCreateInputObjectSchema } from './objects/OfferProposalCreateInput.schema';
import { OfferProposalUncheckedCreateInputObjectSchema } from './objects/OfferProposalUncheckedCreateInput.schema';

export const OfferProposalCreateOneSchema = z.object({
  data: z.union([
    OfferProposalCreateInputObjectSchema,
    OfferProposalUncheckedCreateInputObjectSchema,
  ]),
});
