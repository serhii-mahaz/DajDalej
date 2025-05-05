import { z } from 'zod';
import { OfferProposalOrderByWithRelationInputObjectSchema } from './objects/OfferProposalOrderByWithRelationInput.schema';
import { OfferProposalWhereInputObjectSchema } from './objects/OfferProposalWhereInput.schema';
import { OfferProposalWhereUniqueInputObjectSchema } from './objects/OfferProposalWhereUniqueInput.schema';
import { OfferProposalScalarFieldEnumSchema } from './enums/OfferProposalScalarFieldEnum.schema';

export const OfferProposalFindFirstSchema = z.object({
  orderBy: z
    .union([
      OfferProposalOrderByWithRelationInputObjectSchema,
      OfferProposalOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: OfferProposalWhereInputObjectSchema.optional(),
  cursor: OfferProposalWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(OfferProposalScalarFieldEnumSchema).optional(),
});
