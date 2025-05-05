import { z } from 'zod';
import { OfferProposalWhereUniqueInputObjectSchema } from './objects/OfferProposalWhereUniqueInput.schema';
import { OfferProposalCreateInputObjectSchema } from './objects/OfferProposalCreateInput.schema';
import { OfferProposalUncheckedCreateInputObjectSchema } from './objects/OfferProposalUncheckedCreateInput.schema';
import { OfferProposalUpdateInputObjectSchema } from './objects/OfferProposalUpdateInput.schema';
import { OfferProposalUncheckedUpdateInputObjectSchema } from './objects/OfferProposalUncheckedUpdateInput.schema';

export const OfferProposalUpsertSchema = z.object({
  where: OfferProposalWhereUniqueInputObjectSchema,
  create: z.union([
    OfferProposalCreateInputObjectSchema,
    OfferProposalUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    OfferProposalUpdateInputObjectSchema,
    OfferProposalUncheckedUpdateInputObjectSchema,
  ]),
});
