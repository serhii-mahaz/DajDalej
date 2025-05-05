import { z } from 'zod';
import { OfferProposalUpdateInputObjectSchema } from './objects/OfferProposalUpdateInput.schema';
import { OfferProposalUncheckedUpdateInputObjectSchema } from './objects/OfferProposalUncheckedUpdateInput.schema';
import { OfferProposalWhereUniqueInputObjectSchema } from './objects/OfferProposalWhereUniqueInput.schema';

export const OfferProposalUpdateOneSchema = z.object({
  data: z.union([
    OfferProposalUpdateInputObjectSchema,
    OfferProposalUncheckedUpdateInputObjectSchema,
  ]),
  where: OfferProposalWhereUniqueInputObjectSchema,
});
