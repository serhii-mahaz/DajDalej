import { z } from 'zod';
import { OfferProposalWhereInputObjectSchema } from './objects/OfferProposalWhereInput.schema';
import { OfferProposalOrderByWithAggregationInputObjectSchema } from './objects/OfferProposalOrderByWithAggregationInput.schema';
import { OfferProposalScalarWhereWithAggregatesInputObjectSchema } from './objects/OfferProposalScalarWhereWithAggregatesInput.schema';
import { OfferProposalScalarFieldEnumSchema } from './enums/OfferProposalScalarFieldEnum.schema';

export const OfferProposalGroupBySchema = z.object({
  where: OfferProposalWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      OfferProposalOrderByWithAggregationInputObjectSchema,
      OfferProposalOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: OfferProposalScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(OfferProposalScalarFieldEnumSchema),
});
